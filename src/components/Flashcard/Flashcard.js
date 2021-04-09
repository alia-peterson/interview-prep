import React from 'react'
import './Flashcard.css'

export default function Flashcard({ question }) {
  return (
    <article className='flashcard'>
      <p>{question.q}</p>
    </article>
  )
}
