export function buyPackage(event) {
    event.preventDefault();
   
    const data = new FormData(event.target)
    const ethAmount = data.get('ethAmount');

    if (ethAmount > 0) {
    this.setState({loading: true});
    this.props.contract.purchasePackagesUpto(25, 
        {from: this.props.accounts[0], gas: 300000, value: this.props.web3.utils.toWei(ethAmount, "ether")})
        .then(async (res)  =>  {
            console.log(res.tx);
            this.setState({loading: true})
        }).catch((error) => {
            console.log(error);
            this.setState({loading: false})
        });
    } 
}

