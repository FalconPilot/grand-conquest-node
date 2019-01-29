import React, { Component } from 'react'

import { MainViewport } from './view'

import Header from '../Header'

class App extends Component {
  render() {
    return (
      <MainViewport>
        <Header />
      </MainViewport>
    )
  }
}

export default App
