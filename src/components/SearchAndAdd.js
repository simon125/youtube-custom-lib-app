import React from 'react'
import AddForm from './AddForm'
import SearchingResults from './SearchingResults'

class SearchAndAdd extends React.Component {


    state = {
        visible: false,
        results: null,
    }

    componentDidMount() {
        this.getVideoInfo('BMUiFMZr7vk')
    }

    validateUrl = (url) => {
        let start = ''
        let id = ''

        if (url.indexOf('youtube.com/watch?v=') !== -1) {
            start = url.indexOf('?v=') + 3
            console.log(start)
            id = url.substring(start, start + 11)
            console.log(id)

            return id /////// zmień wynik zwracany
        } else if (url.indexOf('youtu.be/') !== -1) {
            start = url.indexOf('.be/') + 4
            id = url.substring(start, start + 11)
            console.log(id)

            return id
        } else return 'wkpNvvvighY'
    }
    getVideoInfo(urlOrId) {

        const id = this.validateUrl(urlOrId)

        fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBfJ3rGTb5Xm56_02-DSSLzYesJb5lKaoY&id=${id}&part=snippet,contentDetails,statistics`)
            .then(response => response.json())
            .then(results => {
                if (results.items.length === 0) {
                    console.log('STH went wrong')
                } else {
                    console.log('Everything is all right')
                    this.setState({ results })
                }
            })
    }
    handleOnSubmitAddForm = e => {
        e.preventDefault()
        const phrase = e.target.urlOrId.value
        this.getVideoInfo(phrase)
    }
    handleClick = () => {
        this.setState({ visible: !this.state.visible })
    }



    render() {
        return (
            <div>
                <AddForm handleOnSubmitAddForm={this.handleOnSubmitAddForm} />
                <SearchingResults results={this.state.results} />
            </div>
        )
    }

}

export default SearchAndAdd