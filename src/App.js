import React, { Component } from 'react'

import Home from './components/Home'
import About from './components/About'
import SearchAndAdd from './components/SearchAndAdd'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StoredFilms from './components/StoredFilms'
import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container">

            <Route
              exact
              path='/'
              component={Home} />
            <Route
              path='/search'
              component={SearchAndAdd}
            />
            <Route
              path='/library'
              component={StoredFilms} />
            <Route
              path='/about'
              component={About} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>

    )
  }
}

export default App
