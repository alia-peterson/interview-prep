import React, { Component } from 'react'
import questionsListFE from '../../data/questions-fe'
import questionsListBE from '../../data/questions-be'

import Header from '../Header/Header'
import Flashcard from '../Flashcard/Flashcard'
import Arrow from '../Navigation/Arrow'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      allQuestions: [],
      currentQuestion: {},
      type: 'FE'
    }
  }

  selectNextCard = (event) => {
    const buttonDirection = event.target.classList.value
    const currentQuestionNumber = this.state.allQuestions.find((q, i) => {
      if (q.id === this.state.currentQuestion.id) {
        return i
      } else {
        return NaN
      }
    })

    if (buttonDirection.includes('right')) {
      console.log(currentQuestionNumber);
    } else if (buttonDirection.includes('left')) {
      console.log(this.state.currentQuestion.id);
      console.log(this.state.allQuestions);
    }
  }

  shuffleCards = () => {
    let questions = this.state.allQuestions
    const numberQs = questions.length
    const reorderedQuestions = []

    for (let i = 0; i < numberQs; i++) {
      const number = Math.floor(Math.random() * Math.floor(questions.length))
      reorderedQuestions.push(questions[number])
      questions.splice(number, 1)
    }

    this.setState({
      allQuestions: reorderedQuestions,
      currentQuestion: reorderedQuestions[0]
    })
  }

  toggleQuestionType = () => {
    if (this.state.type === 'FE') {
      this.updateState('BE')

    } else if (this.state.type === 'BE') {
      this.updateState('FE')
    }
  }

  updateState = (type) => {
    if (type === 'FE') {
      this.setState({
        allQuestions: questionsListFE,
        currentQuestion: questionsListFE[0],
        type: 'FE'
      }, () => {
        window.localStorage.setItem('interview-prep', JSON.stringify(this.state))
      })

    } else if (type === 'BE') {
      this.setState({
        allQuestions: questionsListBE,
        currentQuestion: questionsListBE[0],
        type: 'BE'
      }, () => {
        window.localStorage.setItem('interview-prep', JSON.stringify(this.state))
      })
    }
  }

  componentDidMount = () => {
    const stored = JSON.parse(window.localStorage.getItem('interview-prep'))

    if (!stored) {
      this.updateState('FE')

    } else {
      this.setState({
        allQuestions: stored.allQuestions,
        currentQuestion: stored.currentQuestion,
        type: stored.type
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className='container'>
          <Flashcard question={this.state.currentQuestion} />
          <div>
            <Arrow direction='left' handleClick={this.selectNextCard} />
            <Arrow direction='right' handleClick={this.selectNextCard} />
          </div>
          <button onClick={this.shuffleCards}>Shuffle Cards</button>
        </div>
      </div>
    )
  }
}
