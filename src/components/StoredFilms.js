import React, { Component } from 'react'

import StoreOptionNav from './StoreOptionNav'


import './style.css'

class StoredFilms extends Component {
    state = {
        films: []
    }
    componentDidMount() {
        this.setState({ films: this.getFilmsFromLocalStorage() })
    }
    getFilmsFromLocalStorage = () => {
        let films
        if (localStorage.getItem('films') === null) {   /////////////DRY do zewnetrznego pliku
            films = []
        } else {
            films = JSON.parse(localStorage.getItem('films'))
        }
        return films
    }
    trimDescription = (description) => {
        const shortDescription = description.substring(0, 100) + '...'
        return shortDescription
    }
    convertDateToDisplay = (time) => {
        const date = new Date(time)
        let month = date.getMonth() + 1,
            day = date.getDate(),
            year = date.getFullYear(),
            hour = date.getHours(),
            minute = date.getMinutes()

        if (day < 10) day = '0' + day.toString()
        if (month < 10) month = '0' + month.toString()
        if (minute < 10) minute = '0' + minute.toString()
        if (hour < 10) hour = '0' + hour.toString()

        return `Addition date: ${day}.${month}.${year} ${hour}:${minute}`
    }
    buttonValue = (isFavourite) => {
        console.log('isFavourite: ', isFavourite)
        return isFavourite ?
            (<span>Delete from favourite <i className="fas fa-star"></i></span>)
            :
            (<span>Add to favourite <i className="far fa-star"></i></span>)
    }
    toggleFavouritestate = id => {
        const films = this.getFilmsFromLocalStorage()
        const newFilms = films.map(film => {
            if (film.id.toString() === id.toString()) {
                return {
                    ...film, isFavourite: !film.isFavourite
                }
            } else return film
        })
        localStorage.setItem('films', JSON.stringify(newFilms))
        this.setState({ films: newFilms })
    }
    render() {
        console.log('render')
        const films = this.state.films

        return (
            <div className="row">

                <StoreOptionNav />
                {
                    films.length !== 0 ?
                        films.map(film => {
                            this.convertDateToDisplay(film.additionDate)
                            return (
                                <div key={film.id} className="my-3 card col-md-4">
                                    <span className="imgWrap">
                                        <img className="card-img-top img-fluid" style={{ cursor: 'pointer' }} src={film.thumbnail} alt="Ups there is no thumbline! Sorry!" />
                                    </span>
                                    <div className="card-body">
                                        <button onClick={() => this.toggleFavouritestate(film.id)} className="btn btn-primary  btn-block m-1"> {this.buttonValue(film.isFavourite)} </button>
                                        <a href={`https://www.youtube.com/watch?v=${film.id}`} target="_blank" className="m-1 btn btn-primary btn-block">Open in YouTube <i className="fab fa-youtube"></i></a>
                                        <h5 className="card-title">{film.title}</h5>
                                        <p className="card-text">{this.trimDescription(film.description)}</p>
                                        <p className="text-muted">{this.convertDateToDisplay(film.additionDate)}</p>
                                    </div>
                                </div>
                            )
                        }) :
                        <div className="alert alert-primary my-5 mx-auto" role="alert">
                            <p className="h3 text-center my-4">You have no films in the library at the moment <i className="far fa-frown"></i></p>
                        </div>
                }
            </div>
        )
    }
}
export default StoredFilms
