// Initialize Web3 with Infura Provider
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/ce1f6d3b9eb0402d9c3a0a82fe1ead12'));

// Function to check ETH balance
async function checkBalance() {
    const walletAddress = document.getElementById('walletAddress').value.trim();

    // Validate Ethereum address
    if (!web3.utils.isAddress(walletAddress)) {
        document.getElementById('balanceResult').innerHTML = '<p>Please enter a valid Ethereum wallet address.</p>';
        return;
    }

    try {
        // Fetch ETH balance
        const balance = await web3.eth.getBalance(walletAddress);
        const ethBalance = web3.utils.fromWei(balance, 'ether');

        // Display balance
        document.getElementById('balanceResult').innerHTML = `<p>Balance of ${walletAddress} is ${ethBalance} ETH</p>`;
    } catch (error) {
        console.error('Error fetching balance:', error);
        document.getElementById('balanceResult').innerHTML = `<p>Error fetching balance: ${error.message}</p>`;
    }
}
