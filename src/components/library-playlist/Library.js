import React, { Component } from 'react'

import LibraryNav from './LibraryNav'
import ClearAllModal from './modals/ClearAllModal'
import IframeModal from './modals/IframeModal'
import SingleFilmCard from './SingleFilmCard'
import PaginationNav from './PaginationNav'
import Alert from './Alert';

import { getFilmsFromLocalStorage } from '../../logic'

import './style.css'

class Library extends Component {



    state = {
        films: [],
        sortOption: {
            sortByDateOfAddition: null,   // false - sort from old to new, true - sort from new to old, null - don't sort
            showOnlyFavourite: false,
            clearAll: false,
            modalVisibility: false,
            modalWatchFilm: false,
            resultsPerPage: 5,
            numberOfPage: 1,
            numberOfPageToRender: 3
        },
        filmToOpen: 'EgHJxS198fY'
    }
    componentDidMount() {


        this.setState({ films: getFilmsFromLocalStorage() })
        const length = this.state.films.length
        let countOfPages = Math.floor(length / this.state.sortOption.resultsPerPage)
        this.setState({
            sortOption: {
                ...this.state.sortOption,
                numberOfPageToRender: countOfPages
            }
        })
    }
    toggleFavouritestate = id => {
        const films = getFilmsFromLocalStorage()
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
    sortByDateOfAddition = (sortByDateOfAddition, films) => {
        if (sortByDateOfAddition === null) return films
        else if (sortByDateOfAddition) {
            return films
                .map(film => film.additionDate)
                .sort((a, b) => a - b)
                .map(time => films
                    .filter(film => film.additionDate.toString() === time.toString())[0])

        } else if (!sortByDateOfAddition) {
            return films
                .map(film => film.additionDate)
                .sort((a, b) => b - a)
                .map(time => films
                    .filter(film => film.additionDate.toString() === time.toString())[0])
        }
    }
    filterByIsFavourite = (filterByFavourite, films) => {
        if (filterByFavourite === true) {
            return films.filter(film => film.isFavourite)
        }
        else return films
    }
    filterByResultsPerPage = (resultsPerPage, numberOfPage, films) => {
        const length = films.length
        let countOfPages = Math.floor(length / resultsPerPage)
        if (countOfPages <= 1) return films
        else {
            console.log('liczba stron: ', countOfPages)
            const start = resultsPerPage * numberOfPage
            const end = start + resultsPerPage
            console.log(films.slice(start, end))
            return films.slice(start, end)
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
    handleConfirmationClick = (confirmation) => {
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
    handelOnFilterByFavouriteClick = (filterMode) => {
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
    handleOnDeleteClick = (id) => {
        const films = getFilmsFromLocalStorage()
        const newFilms = films.filter(film => film.id !== id)
        this.setState({
            ...this.state,
            films: newFilms
        })
        localStorage.setItem('films', JSON.stringify(newFilms))
    }

    onNumOfPageClick = (numberOfPage) => {
        this.setState({
            sortOption: {
                ...this.state.sortOption,
                numberOfPage
            }
        })
    }
    onPreviousClick = () => {
        console.log('działa klurde')
        if (this.state.sortOption.numberOfPage > 0) {
            this.setState({
                sortOption: {
                    ...this.state.sortOption,
                    numberOfPage: this.state.sortOption.numberOfPage - 1
                }
            })
        }
    }
    onNextClick = () => {
        console.log('działa klurde')
        if (this.state.sortOption.numberOfPageToRender >= this.state.sortOption.numberOfPage) {
            this.setState({
                sortOption: {
                    ...this.state.sortOption,
                    numberOfPage: this.state.sortOption.numberOfPage + 1
                }
            })
        }
    }



    render() {
        let films = this.filterByIsFavourite(this.state.sortOption.showOnlyFavourite, this.sortByDateOfAddition(this.state.sortOption.sortByDateOfAddition, this.state.films))
        films = this.filterByResultsPerPage(this.state.sortOption.resultsPerPage, this.state.sortOption.numberOfPage, films)
        //////filterByResultPerPage(resultsPerPage, numberOfPage, films) return films

        return (
            <div className="container">
                <ClearAllModal handleConfirmationClick={this.handleConfirmationClick} visible={this.state.sortOption.modalVisibility} />
                <IframeModal id={this.state.filmToOpen} handleClickFilmModal={this.handleClickFilmModal} visible={this.state.sortOption.modalWatchFilm} />
                <LibraryNav
                    sortByDateOfAddition={this.state.sortOption.sortByDateOfAddition}
                    handelOnFilterByFavouriteClick={this.handelOnFilterByFavouriteClick}
                    handleOnClickSortByDate={this.handleOnClickSortByDate}
                    handleOnTrashClick={this.handleOnTrashClick} />
                <PaginationNav
                    onNumOfPageClick={this.onNumOfPageClick}
                    onPreviousClick={this.onPreviousClick}
                    onNextClick={this.onNextClick}
                    numberOfPageToRender={this.state.sortOption.numberOfPageToRender}
                />
                {
                    films.length !== 0 ?
                        <div className="card-columns">{
                            films.map(film =>
                                <SingleFilmCard
                                    handleClickFilmModal={this.handleClickFilmModal}
                                    film={film}
                                    toggleFavouritestate={this.toggleFavouritestate}
                                    handleOnDeleteClick={this.handleOnDeleteClick}
                                    key={film.id}
                                />
                            )
                        }
                        </div>
                        :
                        <Alert />
                }
                <PaginationNav
                    onNumOfPageClick={this.onNumOfPageClick}
                    onPreviousClick={this.onPreviousClick}
                    onNextClick={this.onNextClick}
                    numberOfPageToRender={this.state.sortOption.numberOfPageToRender}
                />
            </div>
        )
    }
}
export default Library
