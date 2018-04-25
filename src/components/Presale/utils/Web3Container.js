import React from 'react'
import getWeb3 from './getWeb3'
import getAccounts from './getAccounts'
import getContract, {USEDNETWORK} from './getContract'
import Web3ErrorWrapper from './Web3ErrorWrapper';
import SwitchToMainNet from '../Components/SwitchToMainNet';
//import contractDefinition from '../contracts/Presale.sol.json';

export default class Web3Container extends React.Component {
  state = { web3: null, accounts: null, contract: null, networkID: null }

  async componentDidMount () {
    try {
      let web3 = await getWeb3()
      const accounts = await getAccounts(web3)
      const contract = await getContract(web3)
      const networkID = await web3.eth.net.getId()

     
      this.setState({ web3, accounts, contract, networkID })
    } catch (error) {
      // alert(`Failed to load web3, accounts, or contract. Check console for details.`)
      console.log(error)
    }
  }

  render () {

    let { web3, accounts, contract } = this.state
    
    if (this.props.web3Portis) {
      try {
      
        web3 = this.props.web3Portis;
        accounts =  this.props.portisAccounts;
        contract =  this.props.portisContract;
        return this.props.render({ web3, accounts, contract })
      } catch (error) {
        console.log("Error loading Portis: " + error)
      }
    }
  
    if (web3 && this.state.networkID !== USEDNETWORK) {
      return <Web3ErrorWrapper><SwitchToMainNet /></Web3ErrorWrapper>
    } else {
    return web3 && accounts && contract
      ? this.props.render({ web3, accounts, contract })
      : this.props.renderLoading()
    }
  }
}