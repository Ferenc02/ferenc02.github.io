let balance_element = document.querySelector(".balance");
let transactions_container_element = document.querySelector(
  ".transactions-container"
);

// Set the cluster API to mainnet-beta, devnet, or testnet, https://solana-mainnet.g.alchemy.com/v2/wqTeCXjF3594qMPjVU0WF_idaJQk_Qoq
let clusterApi = "devnet";

//Debugging
//window.solana.isPhantom = false;

let connection;

let parsed_transactions;

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
  if (window.solana) {
    let response;
    let walletAddress;
    //Connect to phantom wallet
    try {
      response = await window.solana.connect();
      walletAddress = response.publicKey.toString();
    } catch (error) {
      console.error("Failed to connect to Phantom wallet:", error);
      alert("Failed to connect to Phantom wallet 😔");
      return;
    }
    let transactionsLoaded = false;
    //If transactions are not loaded, show a loading bar
    if (!transactionsLoaded) {
      document.body.style.backgroundColor = "red";
    }

    generateQRCode(walletAddress);

    const publicKey = new solanaWeb3.PublicKey(walletAddress);

    // Get the balance of the wallet
    const balance = await connection.getBalance(publicKey);
    const balanceInSOL = balance / solanaWeb3.LAMPORTS_PER_SOL;

    const transactions = await connection.getSignaturesForAddress(publicKey, {
      limit: 20,
    });
    const transactions_signature = transactions.map(
      (signature) => signature.signature
    );

    parsed_transactions = [];

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

    const outputContainer = document.querySelector(".output");

    let count = 0;
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
          let amountInSOL = lamports / 1_000_000_000;

          // If sent from the wallet, make the amount negative
          if (source === walletAddress) {
            amountInSOL *= -1;
          }

          balance_element.innerHTML = `${balanceInSOL}`;
          generateTransactionElement(
            source,
            destination,
            amountInSOL,
            date,
            count
          );
          count++;
        }
      });
    });
    //If transactions are loaded, remove the loading bar
    if (transactionsLoaded) {
      document.body.style.backgroundColor = "green";
    }
  }
  //If there is no phantom wallet
  else {
    alert("No Phantom wallet");
  }
};
let disconnectWallet = async () => {
  if (window.solana.isPhantom) {
    await window.solana.disconnect();
    alert("Disconnected from wallet");
  }
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let generateTransactionElement = (
  source,
  destination,
  amountInSOL,
  date,
  count
) => {
  let transactions_container_element = document.querySelector(
    ".transactions-container"
  );
  let transaction_element = `<div class="transaction pointer " onclick="getTransactionDetails([${count}])">
          <span class="transaction-amount ${
            amountInSOL >= 0 ? "positive" : "negative"
          }">${amountInSOL} SOL</span>
          <p class="transaction-address">
           ${amountInSOL >= 0 ? source : destination}
          </p>
          <p class="transaction-date">${date.split(",")[0]}</p>
        </div>`;
  transactions_container_element.innerHTML += transaction_element;
};

let getTransactionDetails = (transactionIndex) => {
  console.log(parsed_transactions[transactionIndex]);
};

generateQRCode = (walletAddress) => {
  let wallet_address_code_element = document.querySelector(
    ".wallet-address-code"
  );
  let qr_code_size = 250;
  let format = "svg";
  let color = "1e1e1e";
  let background = "FFFFFF";
  wallet_address_code_element.src = `https://api.qrserver.com/v1/create-qr-code/?size=${qr_code_size}x${qr_code_size}&data=${walletAddress}&format=${format}&color=${color}&bgcolor=${background}`;
};
