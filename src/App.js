import React, { Component } from 'react'
import MyModal from './Modal'

import AddForm from './components/AddForm'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


class App extends Component {


  state = {
    visible: true,

  }

  componentDidMount() {

  }

  handleClick = () => {
    this.setState({ visible: !this.state.visible })
  }



  render() {

    // this.getSearchResult('phrase')

    return (
      <div>

        <button onClick={this.handleClick} className="btn btn-primary">Toggle</button>

        <MyModal handleClick={this.handleClick} visible={this.state.visible} />

      </div>
    );
  }
}

export default App
