import React from 'react'
import AnswerForm from './AnswerForm'
import './Flashcard.css'

export default function Flashcard({ question, flipCard, showQuestion, addAnswer }) {
  let answer
  if (question && question.a) {
    answer = question.a
  } else {
    answer = ''
  }

  return (
    <article
      className='flashcard'
      >
      {showQuestion ?
        <div className='flashcard-body'>
          {question && <div className='container-question'><p>{question.q}</p></div>}
          <button
            className='button-primary'
            onClick={flipCard}
            >
            Update Answer
          </button>
        </div> :
        <AnswerForm answerText={answer} addAnswer={addAnswer} />
      }
    </article>
  )
}
