import React, { useState } from 'react'

export default function AnswerForm({ answerText, addAnswer }) {
  const [answerField, setAnswerField] = useState(answerText)

  return (
    <form className='form'>
      <label htmlFor='answer'>Add your answer below:</label>
      <textarea
        id='answer'
        value={answerField}
        onChange={(e) => setAnswerField(e.target.value)}
        />
      <button
        onClick={(e) => addAnswer(e, answerField)}
        >
        Add Answer
      </button>
    </form>
  )
}
