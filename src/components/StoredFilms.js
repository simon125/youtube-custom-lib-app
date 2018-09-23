import React, { Component } from 'react'

import StoreOptionNav from './StoreOptionNav'
import MyModal from '../Modal'

import './style.css'

class StoredFilms extends Component {
    state = {
        films: [],
        sortOption: {
            dateOfAddition: null,   // false - sort from old to new, true - sort from new to old
            showOnlyFavourite: false,
            clearAll: false,
            modalVisibility: false
        }
    }
    componentDidMount() {
        this.setState({ films: this.getFilmsFromLocalStorage() })
    }
    getFilmsFromLocalStorage = () => {////// do wywyalenia
        let films
        if (localStorage.getItem('films') === null) {   /////////////DRY do zewnetrznego pliku
            films = []
        } else {
            films = JSON.parse(localStorage.getItem('films'))
        }
        return films
    }
    trimDescription = (description) => {/////// do wywalenia
        const shortDescription = description.substring(0, 100) + '...'
        return shortDescription
    }
    convertDateToDisplay = (time) => {/////// do wywalenia
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
    buttonValue = (isFavourite) => { /////// do wywalenia
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
    clearAllStoreage = () => {
        localStorage.removeItem('films')
        this.setState({ films: [] })
    }
    handleClick = (confirmation) => {
        this.setState({
            sortOption: {
                ...this.state.sortOption,
                modalVisibility: false,
                clearAll: confirmation
            }
        }, () => {
            if (this.state.sortOption.clearAll) this.clearAllStoreage()
        })

    }
    handleOnTrashClick = () => {
        this.setState({
            sortOption: {
                ...this.state.sortOption,
                modalVisibility: true
            }
        })
    }

    render() {
        console.log('render')
        const films = this.state.films

        return (
            <div className="row">
                <MyModal handleClick={this.handleClick} visible={this.state.sortOption.modalVisibility} />
                <StoreOptionNav handleOnTrashClick={this.handleOnTrashClick} />

                {
                    films.length !== 0 ?
                        <div className="card-columns">{
                            films.map(film => {
                                this.convertDateToDisplay(film.additionDate)
                                return (

                                    <div key={film.id} className="my-3 card">
                                        <span className="imgWrap">
                                            <img className="card-img-top img-fluid" style={{ cursor: 'pointer' }} src={film.thumbnail} alt="Ups there is no thumbline! Sorry!" />
                                        </span>
                                        <div className="card-body">
                                            <h5 className="card-title">{film.title}</h5>
                                            <p className="card-text">{this.trimDescription(film.description)}</p>
                                            <p className="text-muted">{this.convertDateToDisplay(film.additionDate)}</p>

                                            <button onClick={() => this.toggleFavouritestate(film.id)} className="btn btn-info  btn-block m-1"> {this.buttonValue(film.isFavourite)} </button>
                                            <button className="btn btn-primary  btn-block m-1">DELETE</button>
                                        </div>
                                        <div className="card-footer">
                                            <a href={`https://www.youtube.com/watch?v=${film.id}`} target="_blank" style={{ backgroundColor: ' #c4302b' }} className=" text-white m-1 btn  btn-block">Open in YouTube <i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <div className="alert alert-primary my-5 mx-auto" role="alert">
                            <p className="h3 text-center my-4">You have no films in the library at the moment <i className="far fa-frown"></i></p>
                        </div>
                }
            </div>
        )
    }
}
export default StoredFilms
