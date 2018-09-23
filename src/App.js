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


    const myregexp = /youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/i


    // const myregexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
    const regExp = /([A-Za-z0-9_\-]{11})/i
    console.log(url.match(myregexp).length)

    url.match(myregexp).forEach(el => console.log(el))

    if (regExp.test(url)) return url
    else if (url.match(myregexp).length === 2) {
      console.log('wchodze')
      return url.match(myregexp)[1]
    }
  }



  getVideoInfo(urlOrId) {

    const id = this.validateUrl(urlOrId)

    fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBfJ3rGTb5Xm56_02-DSSLzYesJb5lKaoY&id=${id}&part=snippet,statistics`)
      .then(response => response.json())
      .then(results => {
        if (results.items.length === 0) {
          console.log('STH went wrong')
        } else {
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
