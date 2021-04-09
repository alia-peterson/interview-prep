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
      type: 'FE',
      showQuestion: true
    }
  }

  selectNextCard = (event) => {
    const buttonDirection = event.target.classList.value
    const currentQuestionNumber = this.state.allQuestions.findIndex(q => {
      return q.id === this.state.currentQuestion.id
    })

    let newQuestionNumber = this.incrementNumber(buttonDirection, currentQuestionNumber)

    this.setState({
      currentQuestion: this.state.allQuestions[newQuestionNumber],
      showQuestion: true
    })
  }

  incrementNumber = (buttonDirection, currentQuestionNumber) => {
    let newNumber

    if (buttonDirection.includes('left')) {
      newNumber = currentQuestionNumber - 1

    } else {
      newNumber = currentQuestionNumber + 1
    }

    return this.checkNumberBounds(newNumber)
  }

  checkNumberBounds = (newNumber) => {
    if (newNumber === this.state.allQuestions.length) {
      return 0

    } else if (newNumber < 0) {
      return this.state.allQuestions.length - 1

    } else {
      return newNumber
    }
  }

  flipCard = () => {
    let newView = true

    if (this.state.showQuestion) {
      newView = false
    }

    this.setState({ showQuestion: newView })
  }

  updateAnswer = (event, newAnswer) => {
    event.preventDefault()
    const currentQuestionNumber = this.state.allQuestions.findIndex(q => {
      return q.id === this.state.currentQuestion.id
    })

    const updatedQuestion = this.state.allQuestions[currentQuestionNumber]
    updatedQuestion.a = newAnswer

    const updatedQuestions = this.state.allQuestions
    updatedQuestions[currentQuestionNumber] = updatedQuestion

    this.setState({
      allQuestions: updatedQuestions,
      currentQuestion: updatedQuestion
    }, () => {
      window.localStorage.setItem('interview-prep', JSON.stringify(this.state))
      this.flipCard()
    })
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
        <Header
          type={this.state.type}
          toggleType={this.toggleQuestionType}
          />

        <div className='container'>
          <Flashcard
            question={this.state.currentQuestion}
            flipCard={this.flipCard}
            showQuestion={this.state.showQuestion}
            addAnswer={this.updateAnswer}
            />

          <div>
            <Arrow
              direction='left'
              handleClick={this.selectNextCard}
              />
            <Arrow
              direction='right'
              handleClick={this.selectNextCard}
              />
          </div>

          <button
            onClick={this.shuffleCards}
            className='button-primary'
            >
            Shuffle Cards
          </button>
        </div>
      </div>
    )
  }
}
