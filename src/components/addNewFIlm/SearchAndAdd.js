import React from 'react'
import AddForm from './AddForm'
import SearchingResults from './SearchingResults'
import { getIdFromUrl, createURL, createInit } from '../../logic'

class SearchAndAdd extends React.Component {

    state = {
        film: null,
        client_secret: '8Cep1BIJWZKIgjMcGuCpXlPU9nTwtZV8wYMYM06m4woMEgtbE7ulnbyq7FZb+tNpM2EZNQdtGnx53A7NWtw1FlDM5L/T++G63NTwcLpIsU2dZJpLYEjbBX1+KANIh9JJ',
        client_id: '7e9e79265eb9405a9e750858d1b135a397e299bc'
    }
    componentDidMount() {
        this.getVideoInfo('BMUiFMZr7vk')
    }
    getVideoInfo(urlOrId) {
        const id = getIdFromUrl(urlOrId)
        const url = createURL(urlOrId, id)
        const init = createInit(url)

        fetch(url, init)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(results => {
                console.log(results)
                let film = null
                if (id.length === 9) {
                    console.log('wchodze updatować vimea')
                    // vimeo
                    film = {
                        service: false,
                        title: results.name,
                        description: results.description,
                        thumbnail: results.pictures.sizes[4].link,
                        id: results.link.substring(18), //////JESZCZE TO
                        views: '0',
                        likes: results.metadata.connections.likes.total,
                        dislikes: "0",
                        additionDate: Date.now(),
                        isFavourite: false
                    }
                }
                else if (id.length === 11) {
                    console.log('wchodze updatować jutuba')
                    // jutub
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
                console.log(film)
            })
    }

    handleOnSubmitAddForm = e => {
        e.preventDefault()
        const phrase = e.target.urlOrId.value
        this.getVideoInfo(phrase)
    }
    render() {
        return (
            <div>
                <AddForm handleOnSubmitAddForm={this.handleOnSubmitAddForm} />
                <SearchingResults film={this.state.film} />
            </div>
        )
    }
}

export default SearchAndAdd