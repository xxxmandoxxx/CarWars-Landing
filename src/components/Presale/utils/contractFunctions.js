export function buyPackageUpTo(event) {
    event.preventDefault();

    const data = new FormData(event.target)
    const ethAmount = data.get('ethAmount');
    const upTo = data.get('upTo');

    console.log(ethAmount + '-' + upTo);

    if (ethAmount > 0 && upTo > 0) {
        this.setState({loading: true, txHash: null});
        this.props.contract.purchasePackagesUpto(upTo, 
            {from: this.state.account, gas: 300000, value: this.state.web3.utils.toWei(ethAmount, "ether")})
            .then(async (res)  =>  {
                console.log(res.tx);
                this.setState({loading: true, txHash: res.tx})
            }).catch((error) => {
                console.log(error);
                this.setState({loading: false})
            });
    } 
}

export async function setCurrentPrice() {
   const price = await this.props.contract.nextPrice();
   this.setState({currentPrice: this.state.web3.utils.fromWei(price.toString(), 'ether')});
}

export async function packagesOwned() {

    const pOwned = await this.props.contract.packagesOwned(this.state.account);
    if (pOwned.toNumber() != this.state.pkgOwned) {
        if (pOwned.toNumber() < 25) {
         
            this.setState({pkgOwned: pOwned.toNumber(), pkgLimit: false});
        } else {
            
            this.setState({pkgOwned: pOwned.toNumber(), pkgLimit: true});
        }
    }
 }


