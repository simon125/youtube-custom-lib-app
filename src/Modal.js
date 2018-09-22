import React, { Component } from 'react'
import Modal from 'react-bootstrap4-modal';

class MyModal extends Component {




    render() {

        const { handleClick, visible } = this.props

        return (
            <Modal visible={visible} onClickBackdrop={this.modalBackdropClicked}>
                <div className="modal-header">
                    <h5 className="modal-title">Red Alert!</h5>
                </div>
                <div className="modal-body">
                    <p>Enemy vessel approaching!</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleClick}>
                        Panic
          </button>
                    <button type="button" className="btn btn-primary" onClick={handleClick}>
                        Fire phasers
          </button>
                </div>
            </Modal>
        )
    }
}
export default MyModal