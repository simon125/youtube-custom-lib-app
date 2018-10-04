import React from 'react'
import AddForm from './AddForm'
import SearchingResults from './SearchingResults'
import { getIdFromUrl, createURL, createInit, addToLocalStorage } from '../../logic'


class SearchAndAdd extends React.Component {

    state = {
        film: null,
        client_secret: '8Cep1BIJWZKIgjMcGuCpXlPU9nTwtZV8wYMYM06m4woMEgtbE7ulnbyq7FZb+tNpM2EZNQdtGnx53A7NWtw1FlDM5L/T++G63NTwcLpIsU2dZJpLYEjbBX1+KANIh9JJ',
        client_id: '7e9e79265eb9405a9e750858d1b135a397e299bc',
        arrOfURLs: ['https://www.youtube.com/watch?v=OVGbAFy36xM',
            'https://www.youtube.com/watch?v=FhzAjZlnGjw',
            'https://www.youtube.com/watch?v=NsB2eya4nFA',
            'https://www.youtube.com/watch?v=cpn05QLWUnY',
            'https://www.youtube.com/watch?v=BSG5iHK9Scw',
            'https://vimeo.com/159597639',
            'https://vimeo.com/211052676',
            'https://vimeo.com/285487972',
            'https://vimeo.com/113464050',
            'https://vimeo.com/292251793',
            'https://vimeo.com/40567070']
    }
    componentDidMount() {
        this.getVideoInfo('BMUiFMZr7vk')
    }
    addDemoFilmsToLocalStorage() {
        this.state.arrOfURLs.forEach(url => {
            this.getVideoInfo(url)
                .then(film => addToLocalStorage(film))
        })
    }
    getVideoInfo(urlOrId) {
        const id = getIdFromUrl(urlOrId)
        const url = createURL(urlOrId, id)
        const init = createInit(url)

        return fetch(url, init)
            .then(response => {
                return response.json()
            })
            .then(results => {
                let film = null
                if (id.length === 9 || id.length === 8) {

                    film = {
                        service: false,
                        title: results.name,
                        description: results.description,
                        thumbnail: results.pictures.sizes[4].link,
                        id: results.link.substring(18),
                        views: '0',
                        likes: results.metadata.connections.likes.total,
                        dislikes: "0",
                        additionDate: Date.now(),
                        isFavourite: false
                    }
                }
                else if (id.length === 11) {
                    film = {
                        service: true,
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
                }
                this.setState({ film })
                return film
            })
            .catch(err => console.log(err))
    }

    handleOnSubmitAddForm = e => {
        e.preventDefault()
        const phrase = e.target.urlOrId.value
        this.getVideoInfo(phrase)
    }
    render() {
        return (
            <React.Fragment>
                <AddForm handleOnSubmitAddForm={this.handleOnSubmitAddForm} />
                <div className="form-group">
                    <button onClick={() => this.addDemoFilmsToLocalStorage()} className="btn btn-success">ADD 10 FILMS TO COLLECTION DEMO</button>
                </div>
                <SearchingResults film={this.state.film} />
            </React.Fragment>
        )
    }
}

export default SearchAndAdd