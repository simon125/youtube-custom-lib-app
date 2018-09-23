import React, { Component } from 'react'

export default class SearchingResults extends Component {




    render() {

        const { results } = this.props

        const url = results ? `https://www.youtube.com/embed/${results.items[0].id}?rel=0` : "https://www.youtube.com/embed/BMUiFMZr7vk"
        return (
            <div className="embed-responsive embed-responsive-16by9 my-4">
                <iframe title="searchedFilm" className="embed-responsive-item" src={url}></iframe>
            </div>
        )
    }
}
