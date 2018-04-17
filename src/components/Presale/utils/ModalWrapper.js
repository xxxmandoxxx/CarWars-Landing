import React from 'react';
import "./ModalWrapper.css";

const modalWrapper = (props) => {
    return(
        <div className="modal-wrapper" onClick={props.close}>
            <div className="modal-wrapper-content animated bounceInDown">
                <div className="modal-wrapper-title">
                    {props.title}
                </div>
                    {props.children}
                <div className="modal-wrapper-close">
                    <button className="btn btn-primary" onClick={props.close}>Close</button>
                </div>
            </div>
        </div>
    )
};

export default modalWrapper;