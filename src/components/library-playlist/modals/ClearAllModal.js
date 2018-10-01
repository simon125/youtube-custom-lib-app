import React from 'react'
import Modal from 'react-bootstrap4-modal';

const ClearAllModal = ({ handleConfirmationClick, visible }) => {

    return (
        <Modal visible={visible} onClickBackdrop={this.modalBackdropClicked}>
            <div className="modal-header">
                <h5 className="modal-title">Hey!!!</h5>
            </div>
            <div className="modal-body">
                <p>Are you sure that you want clear your whole library?</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-success" onClick={() => handleConfirmationClick(true)}>
                    Accept
                </button>
                <button type="button" className="btn btn-danger" onClick={() => handleConfirmationClick(false)}>
                    Cancel
                </button>
            </div>
        </Modal>
    )

}
export default ClearAllModal