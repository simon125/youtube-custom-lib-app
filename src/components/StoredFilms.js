import React, { Component } from 'react'
import StoreOptionNav from './StoreOptionNav'
import MyModal from '../Modal'
import IframeModal from './IframeModal'
import { Link } from 'react-router-dom'
import './style.css'
class StoredFilms extends Component {
    state = {
        films: [],
        sortOption: {
            sortByDateOfAddition: null,   // false - sort from old to new, true - sort from new to old, null - don't sort
            showOnlyFavourite: false,
            clearAll: false,
            modalVisibility: false,
            modalWatchFilm: false
        },
        filmToOpen: 'EgHJxS198fY'
    }
    componentDidMount() {
        this.setState({ films: this.getFilmsFromLocalStorage() })
    }
    getFilmsFromLocalStorage = () => {/////////////DRY do zewnetrznego pliku
        let films
        if (localStorage.getItem('films') === null) {
            films = []
        } else {
            films = JSON.parse(localStorage.getItem('films'))
        }
        return films
    }
    trimDescription = (description) => {/////// do pliku zew
        const shortDescription = description.substring(0, 100) + '...'
        return shortDescription
    }
    convertDateToDisplay = (time) => {/////// do do pliku zew
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
    buttonValue = (isFavourite) => { /////// do pliku zew
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
    sortByDateOfAddition = (sortByDateOfAddition, films) => {
        if (sortByDateOfAddition === null) return films
        else if (sortByDateOfAddition) {
            const arrayOfTime = films.map(film => film.additionDate).sort((a, b) => a - b)
            const sortedFilms = arrayOfTime.map(time => films.filter(film => film.additionDate.toString() === time.toString())[0])
            return sortedFilms
        } else if (!sortByDateOfAddition) {
            const arrayOfTime = films.map(film => film.additionDate).sort((a, b) => b - a)
            const sortedFilms = arrayOfTime.map(time => films.filter(film => film.additionDate.toString() === time.toString())[0])
            return sortedFilms
        }
    }
    handleOnClickSortByDate = () => {
        this.setState({
            sortOption: {
                ...this.state.sortOption,
                sortByDateOfAddition: !this.state.sortOption.sortByDateOfAddition
            }
        })
    }
    filterByIsFavourite = (filterByFavourite, films) => {
        if (filterByFavourite === true) {
            return films.filter(film => film.isFavourite)
        }
        else return films
    }
    handelOnClickFilterByFavourite = (filterMode) => {
        this.setState({
            sortOption: {
                ...this.state.sortOption,
                showOnlyFavourite: filterMode
            }
        })
    }
    handleClickFilmModal = (openFilmModal, id) => {
        this.setState({
            sortOption: {
                ...this.state.sortOption,
                modalWatchFilm: openFilmModal

            },
            filmToOpen: id
        })
    }
    handleOnDelete = (id) => {
        const films = this.getFilmsFromLocalStorage()
        const newFilms = films.filter(film => film.id !== id)
        this.setState({ ...this.state, films: newFilms })
        localStorage.setItem('films', JSON.stringify(newFilms))
    }
    render() {

        const films = this.filterByIsFavourite(this.state.sortOption.showOnlyFavourite, this.sortByDateOfAddition(this.state.sortOption.sortByDateOfAddition, this.state.films))

        return (
            <div className="container">
                <MyModal handleClick={this.handleClick} visible={this.state.sortOption.modalVisibility} />
                <IframeModal id={this.state.filmToOpen} handleClickFilmModal={this.handleClickFilmModal} visible={this.state.sortOption.modalWatchFilm} />

                <StoreOptionNav
                    sortByDateOfAddition={this.state.sortOption.sortByDateOfAddition}
                    handelOnClickFilterByFavourite={this.handelOnClickFilterByFavourite}
                    handleOnClickSortByDate={this.handleOnClickSortByDate}
                    handleOnTrashClick={this.handleOnTrashClick} />
                {
                    films.length !== 0 ?
                        <div className="card-columns">{
                            films.map(film => {
                                this.convertDateToDisplay(film.additionDate)
                                return (
                                    <div key={film.id} className="my-3 card">
                                        <span className="imgWrap">
                                            <img onClick={() => this.handleClickFilmModal(true, film.id)} className="card-img-top img-fluid" style={{ cursor: 'pointer' }} src={film.thumbnail} alt="Ups there is no thumbline! Sorry!" />
                                        </span>
                                        <div className="card-body">
                                            <h5 className="card-title">{film.title}</h5>
                                            <p className="card-text">{this.trimDescription(film.description)}</p>
                                            <p className="text-muted">{this.convertDateToDisplay(film.additionDate)}</p>
                                            <ul className="ml-2 list-group d-flex flex-row justify-content-around mb-2">
                                                <li className="list-group-item d-flex flex-column align-items-center"><i className="mb-1 fas fa-eye text-success"></i>{film.views}</li>
                                                <li className="list-group-item d-flex flex-column align-items-center"><i className="mb-1 far fa-thumbs-up text-success"></i> {film.likes}</li>
                                                <li className="list-group-item d-flex flex-column align-items-center"><i className="mb-1 far fa-thumbs-down text-success"></i> {film.dislikes}</li>
                                            </ul>
                                            <button onClick={() => this.toggleFavouritestate(film.id)} className="btn btn-info  btn-block m-1"> {this.buttonValue(film.isFavourite)} </button>
                                            <button onClick={() => {
                                                this.handleOnDelete(film.id)
                                            }} className="btn btn-primary btn-block m-1">DELETE</button>
                                        </div>
                                        <div className="card-footer">
                                            <a href={`https://www.youtube.com/watch?v=${film.id}`} target="_blank" style={{ backgroundColor: ' #c4302b' }} className=" text-white m-1 btn  btn-block">Open in YouTube <i className="fab fa-youtube"></i></a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <div className="alert alert-primary my-5 mx-auto text-center" role="alert">
                            <p className="h3  my-4">You have no films in the library at the moment <i className="far fa-frown"></i></p>
                            <Link to='/search' style={{ textDecoration: 'none' }} className="btn btn-info btn-lg">Let's change it</Link>
                        </div>
                }
            </div>
        )
    }
}
export default StoredFilms
