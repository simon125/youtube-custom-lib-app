import React, { Component } from 'react'

import Home from './components/pages/Home'
import About from './components/pages/About'
import SearchAndAdd from './components/addNewFIlm/SearchAndAdd'
import Navbar from './components/navigation/Navbar'
import Footer from './components/pages/Footer'
import Library from './components/library-playlist/Library'
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
              component={Library} />
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
