import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.scrollToMessage} className="modal fade" id="ModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div onClick={(e) => e.stopPropagation()} className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Score!</h5>
                        <button type="button" onClick={props.scrollToMessage} className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        You can mention this online coupon to receive a $5 discount in store! Please feel free to learn about us, our pricing, and where we are located on this website.
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={props.scrollToMessage} data-dismiss="modal" className="btn call-to-action">OK</button>
                    </div>
                </div>
            </div>
        </div>
        ,
        document.querySelector('#modal')
    );
};
export default Modal;