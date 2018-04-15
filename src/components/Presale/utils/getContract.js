import initContract from 'truffle-contract'
import { abi } from '../utils/Presale.abi.js';

const MAIN_NET = "1";
const RINKEBY = "4";
const ROPSTEN = "3";
const LOCAL = "5777"

const USEDNETWORK = LOCAL
const ADDRESS = "0xBA4e61629EdC37C46B1879002F69a4C63fcFe3E4"


const getContract = async (web3) => {
  //const contract = initContract(contractDefinition)
  // ROPSTEN ADDRESS - address: "0x21Ad59373b053c72B100e4c9ab4746EA541EE6b9"
  //console.log(abi);
  const contract = initContract({
    abi,
    networks: {
      [USEDNETWORK]: {
        events: {},
        links: {},
        address: ADDRESS
      }
    },
  })

  contract.setProvider(web3.currentProvider)
  

  // Dirty hack for web3@1.0.0 support for localhost testrpc
  // see https://github.com/trufflesuite/truffle-contract/issues/56#issuecomment-331084530
  if (typeof contract.currentProvider.sendAsync !== 'function') {
    contract.currentProvider.sendAsync = function () {
      return contract.currentProvider.send.apply(
        contract.currentProvider, arguments
      )
    }
  }
  
  return(web3.eth.net.getId()
  .then(async (id) => {
    if (id == USEDNETWORK) {
      const instance = await contract.at(ADDRESS)
      return instance
    } else {
      return null
    }
  }).catch(() => {
    return null}))
}


export default getContract
