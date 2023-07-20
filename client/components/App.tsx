import React, { useState } from 'react'
import FlashcardList from './FlashcardList'
import main from '../main.css'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Homepage from './Homepage'
import Create from './Create'

function App() {
  return (
    <>
      <div className="header">
        <div>
          <h1>REVIEW</h1>
        </div>
        <div>
          <h2>A space for you to learn</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={'/flashcards'} className="link">
                Create
              </Link>
            </li>
            <li>
              <Link to={'/'} className="link">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default App
