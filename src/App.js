import React, { Component } from 'react'
import MyModal from './Modal'

import AddForm from './components/AddForm'
import SearchingResults from './components/SearchingResults'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


class App extends Component {


  state = {
    visible: false,
    results: null,

  }

  componentDidMount() {

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

    fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBfJ3rGTb5Xm56_02-DSSLzYesJb5lKaoY&id=${id}&part=snippet,statistics`)
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
      <div className="container">
        <AddForm
          handleOnSubmitAddForm={this.handleOnSubmitAddForm}
        />
        <SearchingResults
          results={this.state.results}
        />
        <button onClick={this.handleClick} className="btn btn-primary">Toggle</button>

        <MyModal handleClick={this.handleClick} visible={this.state.visible} />

      </div>
    )
  }
}

export default App
