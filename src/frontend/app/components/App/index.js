import React, { Component } from 'react'

import { MainViewport } from './view'

import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

class App extends Component {
  render() {
    return (
      <MainViewport>
        <Header />
        <Main />
        <Footer />
      </MainViewport>
    )
  }
}

export default App
