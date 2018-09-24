import React, { Component } from 'react'
import Modal from 'react-bootstrap4-modal';

class IframeModal extends Component {

    render() {

        const { handleClickFilmModal, id, visible } = this.props
        const film = visible ? <div className=" embed-responsive embed-responsive-16by9">
            <iframe scrolling="yes" title="searchedFilm" className="embed-responsive-item" src={`https://www.youtube.com/embed/${id}`}></iframe>
        </div> : <p>UPS sth went wrong</p>

        return (
            <Modal visible={visible} onClickBackdrop={this.modalBackdropClicked}>
                <div className="modal-header">
                    <h5 className="modal-title">Hey!!!</h5>
                </div>
                <div className="modal-body">
                    {film}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={() => handleClickFilmModal(false)}>
                        Cancel
                    </button>
                </div>
            </Modal>
        )
    }
}

export default IframeModal
