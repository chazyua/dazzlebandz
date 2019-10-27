import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={props.scrollToContact}
      className="modal fade"
      id="ModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="modal-dialog modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Score!
            </h5>
            <button
              type="button"
              onClick={props.scrollToContact}
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            You can inqure for pricing and make an order in any convenient way
            through our contacts section.
          </div>
          <div className="modal-footer">
          <button
            type="button"
            onClick={props.scrollToContact}
            data-dismiss="modal"
            className="btn call-to-action"
          >
            <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
