import React from 'react'
import './Header.css'

export default function Header({ type, toggleType }) {
  return (
    <header className='header'>
      <h1>Interview Prep!</h1>
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
    </header>
  )
}
