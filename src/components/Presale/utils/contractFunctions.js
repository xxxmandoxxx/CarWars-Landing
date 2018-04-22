export function buyPackageUpTo(event) {
    event.preventDefault();

    const data = new FormData(event.target)
    const ethAmount = data.get('ethAmount');
    const upTo = data.get('upTo');

    //console.log(ethAmount + '-' + upTo);
 
    if (ethAmount > 0 && upTo > 0) {
        this.setState({loading: true, txHash: null});
        this.props.contract.purchasePackagesUpto(upTo, 
            {from: this.state.account, gas: 80000, value: this.state.web3.utils.toWei(ethAmount, "ether"), gasPrice: this.state.web3.utils.toWei("10", 'gwei')})
            .then(async (res)  =>  {
                console.log(res.tx);
                this.setState({loading: true, txHash: res.tx})
            }).catch((error) => {
                console.log(error);
                this.setState({loading: false,  showModal: true, error: error, txHash: error.tx})
            });
    } 
}


export function claimPackages(event) {
    event.preventDefault();

    this.props.contract.claimPackages(
        {from: this.state.account, gas: 80000, gasPrice: this.state.web3.utils.toWei("10", 'gwei')})
        .then(async (res)  =>  {
            console.log(res.tx);
        }).catch((error) => {
            console.log(error);
        });;
}


export async function setCurrentPrice() {
   const price = await this.props.contract.nextPrice();
   this.setState({currentPrice: this.state.web3.utils.fromWei(price.toString(), 'ether')});
}

export async function packagesOwned() {
    if (this.state.account) {
        const pOwned = await this.props.contract.packagesOwned(this.state.account);
        const gifts = await this.props.contract.giftPackagesForUser(this.state.account); 
        const allowedPkg = 25 - pOwned
        if (pOwned.toNumber() !== this.state.pkgOwned || gifts.toNumber() !== this.state.gifts ) {
            if (pOwned.toNumber() < 25) {      
                this.setState({pkgOwned: pOwned.toNumber(), pkgLimit: false, pkgAllowed: allowedPkg, gifts: gifts.toNumber()});
            } else {        
                this.setState({pkgOwned: pOwned.toNumber(), pkgLimit: true, pkgAllowed: allowedPkg, gifts: gifts.toNumber()});
            }
        }
    }
 }



