import React, { Component } from 'react'
import { addToLocalStorage } from '../../logic'

class SearchingResults extends Component {

    state = {
        showAlert: false,
        whichContent: false
    }

    handleOnClick = (film) => {
        const whichContent = addToLocalStorage(film)
        this.setState({
            showAlert: true,
            whichContent
        })
        setTimeout(() => this.setState({ showAlert: false }), 2000)
    }

    render() {

        const { film } = this.props

        const className = !this.state.showAlert ? "d-none" : !this.state.content ? "alert alert-success mt-3" : "alert alert-danger mt-3"

        const url = !film ?
            "https://www.youtube.com/embed/BMUiFMZr7vk"
            : film.service
                ?
                `https://www.youtube.com/embed/${film.id}?rel=0` : `https://player.vimeo.com/video/${film.id}`
        const views = film ? film.views : "Ups I can't find it"
        const likes = film ? film.likes : "Ups I can't find it"
        const dislikes = film ? film.dislikes : "Ups I can't find it"

        return (
            <div className="row">

                <div className=" mx-auto col-md-8">
                    <h4 className="text-white">
                        Check if this the film which you were searching for?
                    </h4>
                    <button onClick={() => this.handleOnClick(film)} className="btn btn-success btn-block my-2">
                        YES! Add to collection
                    </button>
                    <div className="d-flex justify-content-between">
                        <div className=" embed-responsive embed-responsive-16by9">
                            <iframe scrolling="yes" title="searchedFilm" className="embed-responsive-item" src={url}></iframe>
                        </div>
                        <ul className="ml-2 list-group">
                            <li className="list-group-item d-flex flex-column align-items-center"><i className="mb-1 fas fa-eye text-success"></i>{views}</li>
                            <li className="list-group-item d-flex flex-column align-items-center"><i className="mb-1 far fa-thumbs-up text-success"></i> {likes}</li>
                            <li className="list-group-item d-flex flex-column align-items-center"><i className="mb-1 far fa-thumbs-down text-success"></i> {dislikes}</li>
                        </ul>
                    </div>
                    <div className={className} role="alert">
                        {
                            this.state.whichContent ?
                                "You already have this film in your collection"
                                :
                                "You have succesfully added film to collection"
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchingResults