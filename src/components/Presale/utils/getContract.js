import initContract from 'truffle-contract'
import { abi } from '../utils/Presale.abi.js';

const MAIN_NET = "1";
const RINKEBY = "4";
const ROPSTEN = "3";
const LOCAL = "5777"


const getContract = async (web3) => {
  //const contract = initContract(contractDefinition)
  // ROPSTEN ADDRESS - address: "0x21Ad59373b053c72B100e4c9ab4746EA541EE6b9"
  //console.log(abi);
  const contract = initContract({
    abi,
    networks: {
      [LOCAL]: {
        events: {},
        links: {},
        address: "0x70c66ee495fEa2Ff282afFaCbd017D080114eE21"
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

  const instance = await contract.at("0x70c66ee495fEa2Ff282afFaCbd017D080114eE21")
  return instance
}

export default getContract
