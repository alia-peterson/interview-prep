import React from 'react'
import './Navigation.css'

export default function Arrow({ direction, handleClick }) {
  return (
    <button
      className={`button-${direction}`}
      onClick={handleClick}
      >
    </button>
  )
}
