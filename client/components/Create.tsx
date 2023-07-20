import React, { useState } from 'react'
import { useEffect } from 'react'
import FlashcardList from './FlashcardList'
import { getAllFlashCards } from '../apis/flashcards'

interface Props {
  onAddItem: (newItem: string) => void
}

const initialValues = {
  topic: '',
  question: '',
  options: '',
  answer: '',
}

export default function Create() {
  const [flashcards, setFlashCards] = useState(SAMPLE_FLASHCARDS)
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [options, setOptions] = useState('')

  // useEffect(() => {
  //   async function fetchFlashCard() {
  //     try {
  //       const flashcard = await getAllFlashCards()
  //       setFlashCards(flashcard)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // }, [])

  //handle events change
  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  function handleQuestionChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuestion(event.target.value)
  }

  function handleAnswerChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAnswer(event.target.value)
  }
  function handleOptionsChange(event: React.ChangeEvent<HTMLInputElement>) {
    setOptions(event.target.value)
  }

  //handle submit change

  function handleSubmitTitle(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('Submit this text:', title)
  }

  function handleSubmitQuestion(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('Submit this text:', question)
  }

  function handleSubmitAnswer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('Submit this text:', answer)
  }

  function handleSubmitOptions(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('Submit this text:', options)
  }
  return (
    <>
      <h2>Create your flashcard</h2>
      <div className="form">
        <form onSubmit={handleSubmitTitle}>
          <p className="formText">What do you want to learn?</p>
          <input
            type="text"
            id="topic"
            value={title}
            onChange={handleTitleChange}
          />
          <button type="submit" className="button">
            Enter
          </button>
        </form>
      </div>
      <div className="form">
        <form onSubmit={handleSubmitQuestion}>
          <p className="formText">Question</p>
          <input
            type="text"
            value={question}
            id="question"
            onChange={handleQuestionChange}
          />
          <button type="submit" className="button">
            Enter
          </button>
        </form>
      </div>
      <div className="form">
        <form onSubmit={handleSubmitOptions}>
          <p className="formText">Options</p>
          <input
            type="text"
            value={options}
            id="question"
            onChange={handleOptionsChange}
          />
          <button type="submit" className="button">
            Enter
          </button>
        </form>
      </div>
      <div className="form">
        <form onSubmit={handleSubmitAnswer}>
          <p className="formText">Answer</p>
          <input
            type="text"
            value={answer}
            id="question"
            onChange={handleAnswerChange}
          />
          <button type="submit" className="button">
            Enter
          </button>
        </form>
      </div>
      <div className="flashcard">
        <FlashcardList flashcards={flashcards} />
      </div>
      <div className="finishButton">
        <button type="submit" className="button">
          Finish
        </button>
      </div>
    </>
  )
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    title: 'Name',
    question: 'How do you spell my name?',
    answer: 'Answer: Denyce',
    options: ['Denise', 'Denyse', 'Denyce', 'Dencye'],
  },
]
