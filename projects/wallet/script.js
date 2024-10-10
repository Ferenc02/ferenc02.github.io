//console.log(solanaWeb3);
test_element = document.querySelector(".test");
test_element2 = document.querySelector(".test2");

// Set the cluster API to mainnet-beta, devnet, or testnet
clusterApi = "mainnet-beta";

//Debugging
//window.solana.isPhantom = false;

connectWallet = async () => {
  if (window.solana.isPhantom) {
    //Connect to phantom wallet
    const response = await window.solana.connect();
    const walletAddress = response.publicKey.toString();

    test_element.innerHTML = `Has a phantom wallet with address: ${walletAddress}`;

    const connection = new solanaWeb3.Connection(
      solanaWeb3.clusterApiUrl(clusterApi),
      "confirmed"
    );
    const balance = await connection.getBalance(
      new solanaWeb3.PublicKey(walletAddress)
    );
    const balanceInSOL = balance / solanaWeb3.LAMPORTS_PER_SOL;
    test_element2.innerHTML = `Balance: ${balanceInSOL}`;
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
