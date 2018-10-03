import React from 'react'
import { convertDateToDisplay, trimDescription } from '../../logic'

const SingleFilmCard = ({
    handleClickFilmModal,
    film,
    toggleFavouritestate,
    handleOnDeleteClick
}) => {
    const buttonValue = film.isFavourite ?
        <span>
            Delete from favourite <i className="fas fa-star"></i>
        </span>
        :
        <span>
            Add to favourite <i className="far fa-star"></i>
        </span>

    const href = film.service ? `https://www.youtube.com/watch?v=${film.id}` : `https://vimeo.com/${film.id}`

    return (

        <div className="my-3 card">
            <span className="imgWrap">
                <img onClick={() => handleClickFilmModal(true, film.id)} className="card-img-top img-fluid" style={{ cursor: 'pointer' }} src={film.thumbnail} alt="Ups there is no thumbline! Sorry!" />
            </span>
            <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <p className="card-text">{trimDescription(film.description)}</p>
                <p className="text-muted">{convertDateToDisplay(film.additionDate)}</p>
                <ul className="ml-2 list-group d-flex flex-row justify-content-around mb-2">
                    <li className="list-group-item d-flex flex-column align-items-center"><i className="mb-1 fas fa-eye text-success"></i>{film.views}</li>
                    <li className="list-group-item d-flex flex-column align-items-center"><i className="mb-1 far fa-thumbs-up text-success"></i> {film.likes}</li>
                    <li className="list-group-item d-flex flex-column align-items-center"><i className="mb-1 far fa-thumbs-down text-success"></i> {film.dislikes}</li>
                </ul>
                <button onClick={() => toggleFavouritestate(film.id)} className="btn btn-info  btn-block m-1"> {buttonValue} </button>
                <button onClick={() => {
                    handleOnDeleteClick(film.id)
                }} className="btn btn-primary btn-block m-1">DELETE</button>
            </div>
            <div className="card-footer">
                <a href={href} target="_blank" style={{ backgroundColor: ' #c4302b' }} className=" text-white m-1 btn  btn-block">Open in YouTube <i className="fab fa-youtube"></i></a>
            </div>
        </div>

    )
}

export default SingleFilmCard
