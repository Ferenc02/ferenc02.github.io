//console.log(solanaWeb3);
test_element = document.querySelector(".test");
test_element2 = document.querySelector(".test2");
test_element3 = document.querySelector(".test3");

// Set the cluster API to mainnet-beta, devnet, or testnet, https://solana-mainnet.g.alchemy.com/v2/wqTeCXjF3594qMPjVU0WF_idaJQk_Qoq
clusterApi = "devnet";

//Debugging
//window.solana.isPhantom = false;

let connection;

(async () => {
  //Connect to the cluster
  if (clusterApi[0] == "h") {
    connection = new solanaWeb3.Connection(clusterApi, "confirmed");
  } else {
    connection = new solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl(clusterApi),
      "confirmed"
    );
  }
  /*
  const response = await window.solana.connect();
  const walletAddress = response.publicKey.toString();
 
  const balance = await connection.getBalance(publicKey);
  console.log(balance);*/
})();

connectWallet = async () => {
  console.log(connection);
  if (window.solana) {
    let response;
    let walletAddress;
    //Connect to phantom wallet
    try {
      response = await window.solana.connect();
      walletAddress = response.publicKey.toString();
    } catch (error) {
      console.error("Failed to connect to Phantom wallet:", error);
      test_element.innerHTML = "Failed to connect to Phantom wallet 😔";
      return;
    }

    test_element.innerHTML = `Has a phantom wallet with address: ${walletAddress}`;

    const publicKey = new solanaWeb3.PublicKey(walletAddress);

    // Get the balance of the wallet
    const balance = await connection.getBalance(publicKey);
    const balanceInSOL = balance / solanaWeb3.LAMPORTS_PER_SOL;
    test_element2.innerHTML = `Balance: ${balanceInSOL} sol`;

    //get transaction history
    /*
    const confirmed_transactions =
      await connection.getConfirmedSignaturesForAddress2(publicKey, {
        limit: 5,
      });
*/
    const transactions = await connection.getSignaturesForAddress(publicKey, {
      limit: 20,
    });
    const transactions_signature = transactions.map(
      (signature) => signature.signature
    );

    console.log(transactions_signature.length);

    let parsed_transactions = [];

    let transactionsLoaded = false;

    //If transactions are not loaded, show a loading bar
    if (!transactionsLoaded) {
      // document.body.style.backgroundColor = "red";
    }

    //Get the parsed transactions
    for (let i = 0; i < transactions_signature.length; i++) {
      const parsed_transaction = await connection.getParsedTransactions(
        [transactions_signature[i]],
        {
          commitment: "confirmed",
          maxSupportedTransactionVersion: 0,
        }
      );
      parsed_transactions.push(parsed_transaction);
      //await sleep(1000);
    }
    transactionsLoaded = true;

    //If transactions are loaded, remove the loading bar
    if (transactionsLoaded) {
      // document.body.style.backgroundColor = "green";
    }

    console.log(parsed_transactions);

    //test_element3.innerHTML += `<br>Transactions: `;
    test_element3.innerHTML = 4499985000 / solanaWeb3.LAMPORTS_PER_SOL;

    const outputContainer = document.querySelector(".output"); // Replace with your actual container ID

    parsed_transactions.forEach((transactionArray) => {
      transactionArray.forEach((transaction) => {
        const {
          blockTime,
          transaction: {
            message: { instructions },
          },
        } = transaction;

        // Convert blockTime to a human-readable date
        const date = new Date(blockTime * 1000).toLocaleString();

        // Find the parsed instruction
        const transferInstruction = instructions.find((instr) => instr.parsed);
        if (transferInstruction) {
          const {
            info: { source, destination, lamports },
          } = transferInstruction.parsed;

          // Convert lamports to SOL
          const amountInSOL = lamports / 1_000_000_000;

          // Create a new paragraph element
          const p = document.createElement("p");

          // Determine if it's a receive or send
          if (source === walletAddress) {
            p.textContent = `Sent ${amountInSOL} SOL on ${date}`;
          } else if (destination === walletAddress) {
            p.textContent = `Received ${amountInSOL} SOL on ${date}`;
          }

          // Append the paragraph to the output container
          outputContainer.appendChild(p);
        }
      });
    });
    console.log(outputContainer);
  }
  //If there is no phantom wallet
  else {
    test_element.innerHTML = "No Phantom wallet";
  }
};
let disconnectWallet = async () => {
  if (window.solana.isPhantom) {
    await window.solana.disconnect();
    test_element.innerHTML = "Disconnected from wallet";
  }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
