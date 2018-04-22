import React from 'react';

const myAccountTx = (props) => {
    const contractAddress = props.contractAddress;

    const tx = props.accountTx.map(function(item, i){
        if (item.to.toLowerCase() === contractAddress.toLowerCase()) {
            const txDate = new Date(item.timeStamp * 1000).toString();
            return (  
            <tr key={i}>
                <th><a className="txLink" href={"https://etherscan.io/tx/" + item.hash} target="_blank" rel="noopener noreferrer">{item.hash.substring(0,17) + "..."}</a></th>
                <th>{txDate}</th>
                <th>{item.blockNumber}</th>
                <th>{item.gasUsed}</th>
                <th>{item.confirmations}</th>
            </tr> )
        }
        return null
      })

    if (props.loadingTx) {
        return <p>Loading Transactions...</p>

    } else {

        return(
            <div className="myAccountTx">
                <h4>Transactions</h4>
                <div className="table-responsive">
                    <table className="table table-condensed">
                        <thead>
                        <tr>
                            <th>Tx Hash</th>
                            <th>Time Stamp</th>
                            <th>Block Number</th>
                            <th>Gas used</th>
                            <th>Confirmations</th>
                        </tr>
                        </thead>
                        <tbody>
                            {tx}
                        </tbody>
                    </table>
                </div>
            </div>
        )   
    }
};

export default myAccountTx;