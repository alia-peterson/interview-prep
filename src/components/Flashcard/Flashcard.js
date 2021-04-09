import React from 'react'
import AnswerForm from './AnswerForm'
import './Flashcard.css'

export default function Flashcard({ question, flipCard, showQuestion, addAnswer }) {
  let answer
  if (question && question.a) {
    answer = question.a
  } else {
    answer = 'what'
  }

  return (
    <article
      className='flashcard'
      >
      {showQuestion ?
        <div>
          {question && <p>{question.q}</p>}
          <button onClick={flipCard}>Update Answer</button>
        </div> :
        <AnswerForm answerText={answer} addAnswer={addAnswer} />
      }
    </article>
  )
}
