import React, { Component } from 'react'

class SearchingResults extends Component {

    state = {
        showAlert: false
    }



    createValidFormatOfFilm = (results) => {
        const film = {
            title: results.items[0].snippet.title,
            description: results.items[0].snippet.description,
            thumbnail: results.items[0].snippet.thumbnails.high.url,
            id: results.items[0].id,
            views: results.items[0].statistics.viewCount,
            likes: results.items[0].statistics.likeCount,
            dislikes: results.items[0].statistics.dislikeCount,
            additionDate: Date.now(),
            isFavourite: false
        }
        return film
    }


    addToLocalStorage = (film) => {
        let films
        if (localStorage.getItem('films') === null) {   /////////////DRY do zewnetrznego pliku
            films = []
        } else {
            films = JSON.parse(localStorage.getItem('films'))
        }
        const newFilms = [...films, film]
        localStorage.setItem('films', JSON.stringify(newFilms))
    }

    handleOnClick = (results) => {
        const film = this.createValidFormatOfFilm(results)
        this.addToLocalStorage(film)
        this.setState({
            showAlert: true
        })
        setTimeout(() => this.setState({ showAlert: false }), 2000)
    }


    render() {

        const className = this.state.showAlert ? "alert alert-success mt-3" : "d-none"

        const { results } = this.props

        const url = results ? `https://www.youtube.com/embed/${results.items[0].id}?rel=0` : "https://www.youtube.com/embed/BMUiFMZr7vk"
        const views = results ? results.items[0].statistics.viewCount : "Ups I can't find it"
        const likes = results ? results.items[0].statistics.likeCount : "Ups I can't find it"
        const disLikes = results ? results.items[0].statistics.dislikeCount : "Ups I can't find it"
        return (
            <div className="row">

                <div className=" mx-auto col-md-8">

                    <h4 className="text-white">Check if this the film which you were searching for?</h4>
                    <button onClick={() => this.handleOnClick(results)} className="btn btn-success btn-block my-2">YES! Add to collection</button>
                    <div className="d-flex justify-content-between">
                        <div className=" embed-responsive embed-responsive-16by9">
                            <iframe scrolling="yes" title="searchedFilm" className="embed-responsive-item" src={url}></iframe>
                        </div>
                        <ul className="ml-2 list-group">
                            <li className="list-group-item d-flex flex-column align-items-center"><i className="mb-1 fas fa-eye text-success"></i>{views}</li>
                            <li className="list-group-item d-flex flex-column align-items-center"><i className="mb-1 far fa-thumbs-up text-success"></i> {likes}</li>
                            <li className="list-group-item d-flex flex-column align-items-center"><i className="mb-1 far fa-thumbs-down text-success"></i> {disLikes}</li>
                        </ul>
                    </div>
                    <div className={className} role="alert">
                        You add succesfully film to your collection!
                </div>
                </div>
            </div>
        )
    }
}

export default SearchingResults