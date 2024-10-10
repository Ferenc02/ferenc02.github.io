//console.log(solanaWeb3);
test_element = document.querySelector(".test");
test_element2 = document.querySelector(".test2");

// Set the cluster API to mainnet-beta, devnet, or testnet
clusterApi = "mainnet-beta";

//Debugging
//window.solana.isPhantom = false;

let connection;

(async () => {
  connection = new solanaWeb3.Connection(
    "https://solana-mainnet.g.alchemy.com/v2/wqTeCXjF3594qMPjVU0WF_idaJQk_Qoq", // Replace with your QuickNode or Alchemy URL
    "confirmed"
  );
  /*
  const response = await window.solana.connect();
  const walletAddress = response.publicKey.toString();
 
  const balance = await connection.getBalance(publicKey);
  console.log(balance);*/
})();

connectWallet = async () => {
  console.log(connection);
  if (window.solana.isPhantom) {
    //Connect to phantom wallet
    const response = await window.solana.connect();
    const walletAddress = response.publicKey.toString();

    test_element.innerHTML = `Has a phantom wallet with address: ${walletAddress}`;

    const publicKey = new solanaWeb3.PublicKey(walletAddress);

    // Get the balance of the wallet
    const balance = await connection.getBalance(publicKey);
    const balanceInSOL = balance / solanaWeb3.LAMPORTS_PER_SOL;
    test_element2.innerHTML = `Balance: ${balanceInSOL} sol`;
  }
  // if no wallet
  else if (!window.solana.isPhantom) {
    test_element.innerHTML = "No Phantom wallet";
  }
};
let disconnectWallet = async () => {
  if (window.solana.isPhantom) {
    await window.solana.disconnect();
    test_element.innerHTML = "Disconnected from wallet";
  }
};
