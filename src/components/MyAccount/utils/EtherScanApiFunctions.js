export async function getTxforAccount(account) {
    const apiTxAccountUrl = "https://api-ropsten.etherscan.io/api?module=account&action=txlist&address=" + account + "&startblock=3000000&endblock=99999999&sort=asc&apikey=DWVMXJSACBAFBZREUA3ZM8V7V9T987VVZM"

    const accountTx = await fetch(apiTxAccountUrl)
                            .then(function(response) {
                                return(response.json());
                            })
                            .then(function(myJson) {
                                return myJson.result
                            });
    this.setState({accountTx: accountTx, loadingTx: false})
}