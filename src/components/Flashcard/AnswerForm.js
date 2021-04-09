import React, { useState } from 'react'

export default function AnswerForm({ answerText, addAnswer }) {
  const [answerField, setAnswerField] = useState(answerText)

  return (
    <form className='form'>
      <div className='container-answer'>
        <label htmlFor='answer'>Add your answer below:</label>
        <textarea
          id='answer'
          value={answerField}
          placeholder='Enter any notes or answers here for future reference!'
          onChange={(e) => setAnswerField(e.target.value)}
          />
      </div>
      <button
        className='button-primary'
        onClick={(e) => addAnswer(e, answerField)}
        >
        Update Answer
      </button>
    </form>
  )
}
