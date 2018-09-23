import React, { Component } from 'react'
import './style.css'

class StoredFilms extends Component {


    getFilmsFromLocalStorage = () => {
        let films
        if (localStorage.getItem('films') === null) {   /////////////DRY do zewnetrznego pliku
            films = []
        } else {
            films = JSON.parse(localStorage.getItem('films'))
        }
        return films
    }


    // 8KoUzchViH0

    render() {

        const films = this.getFilmsFromLocalStorage()

        return (
            <div className="row">
                {
                    films.length !== 0 ?
                        films.map(film => {
                            return (

                                <div key={film.id} className="my-3 card col-md-4" >
                                    <span className="imgWrap">
                                        <img className="card-img-top img-fluid" style={{ cursor: 'pointer' }} src={film.thumbnail} alt="Card image cap" />
                                    </span>
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="/" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>


                                // <div key={Math.random()} className=" embed-responsive embed-responsive-16by9 my-3 w-25">
                                //     <img

                                //         title="searchedFilm"
                                //         className="embed-responsive-item"
                                //         src={`https://www.youtube.com/embed/${film.id}`}/>
                                // </div>
                            )
                        }) :
                        <div className="alert alert-primary my-5" role="alert">
                            <p className="h3 text-center my-4">You have no films in the library at the moment <i className="far fa-frown"></i></p>
                        </div>
                }
            </div>
        )
    }
}


export default StoredFilms
