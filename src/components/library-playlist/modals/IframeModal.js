import React from 'react'
import Modal from 'react-bootstrap4-modal';

const IframeModal = ({ handleClickFilmModal, id, visible }) => {

    const src = id && id.length === 11 ? `https://www.youtube.com/embed/${id}?rel=0` : `https://player.vimeo.com/video/${id}`

    const film = visible ?
        <div className=" embed-responsive embed-responsive-16by9">
            <iframe scrolling="yes" title="searchedFilm" className="embed-responsive-item" src={src}></iframe>
        </div>
        :
        <p>UPS sth went wrong</p>

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

export default IframeModal
