import React, { Component } from 'react'
import Modal from 'react-bootstrap4-modal';

class MyModal extends Component {

    render() {

        const { handleClick, visible } = this.props

        return (
            <Modal visible={visible} onClickBackdrop={this.modalBackdropClicked}>
                <div className="modal-header">
                    <h5 className="modal-title">Hey!!!</h5>
                </div>
                <div className="modal-body">
                    <p>Are you sure that you want clear your whole library?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-success" onClick={() => handleClick(true)}>
                        Accept
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => handleClick(false)}>
                        Cancel
                    </button>
                </div>
            </Modal>
        )
    }
}
export default MyModal