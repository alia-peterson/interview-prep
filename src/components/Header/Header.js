import React from 'react'
import './Header.css'

export default function Header({ type, toggleType }) {
  return (
    <header className='header'>
      <h1>Interview Prep!</h1>
      <div className='button-container'>
        <p>Toggle your program:</p>
        <button
          className='button-primary'
          disabled={type === 'FE' ? true : false}
          onClick={toggleType}
          >
          FE
        </button>
        <button
          className='button-primary'
          disabled={type === 'BE' ? true : false}
          onClick={toggleType}
          >
          BE
        </button>
      </div>
    </header>
  )
}
