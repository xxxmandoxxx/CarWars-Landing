import React from 'react';

const myAccountMessageHelper = (props) => {


    switch (true) {

        case props.amount === 0:
            return (<h3>You do not yet own any packages!</h3>)
           

        case props.amount > 0 && props.amount < 6:
            return (<h3>You currently own only  <span className="blue"><strong>{props.amount}</strong></span> packages!</h3>)
         
        
        case props.amount > 6 && props.amount < 25:
            return (<h3>You are the proud owner of <span className="blue"><strong>{props.amount}</strong></span> packages!</h3>)
        

        case props.amount === 25:
            return (<h3>You own 25 packages, the most an account can hold.</h3>)
       
        
        default:
            return (<h3>Can't retrieve your packages. Try again later.</h3>)
          


    }


};

export default myAccountMessageHelper;