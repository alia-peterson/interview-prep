import React, { Component } from 'react'
import questions from ''

import Header from '../Header/Header'
import Flashcard from '../Flashcard/Flashcard'
import Arrow from '../Navigation/Arrow'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentQuestion: {}
    }
  }

  selectNextCard = (event) => {
    const buttonDirection = event.target.classList.value
    if (buttonDirection.includes('right')) {

    }
  }

  componentDidMount = () => {

  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='container'>
          <Flashcard />
          <div>
            <Arrow direction='left' handleClick={this.selectNextCard} />
            <Arrow direction='right' handleClick={this.selectNextCard} />
          </div>
        </div>
      </div>
    )
  }
}
