import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Question from '../models/Question.js'
import AnswerFeedbackView from '../views/AnswerFeedbackView.jsx'

describe('Hafsa - answer feedback user stories', () => {
  const question = new Question(
    'science-1',
    'Which planet is known as the Red Planet?',
    ['Earth', 'Mars'],
    'Mars',
    'science',
  )

  it('checks an answer without being affected by letter case', () => {
    expect(question.checkAnswer('mars')).toBe(true)
    expect(question.checkAnswer('Earth')).toBe(false)
  })

  it('shows clear positive feedback for a correct answer', () => {
    render(
      <AnswerFeedbackView
        result={{ isCorrect: true, correctAnswer: 'Mars' }}
      />,
    )

    expect(screen.getByRole('status')).toHaveClass('feedback-correct')
    expect(screen.getByText('Correct!')).toBeInTheDocument()
  })

  it('shows the correct answer after an incorrect answer', () => {
    render(
      <AnswerFeedbackView
        result={{ isCorrect: false, correctAnswer: question.getCorrectAnswer() }}
      />,
    )

    expect(screen.getByRole('status')).toHaveClass('feedback-incorrect')
    expect(screen.getByText('The correct answer is Mars.')).toBeInTheDocument()
  })
})
