export default function AnswerFeedbackView({ result }) {
  if (!result) {
    return null
  }

  return (
    <div
      className={`feedback ${result.isCorrect ? 'feedback-correct' : 'feedback-incorrect'}`}
      role="status"
    >
      <strong>{result.isCorrect ? 'Correct!' : 'Incorrect'}</strong>

      {!result.isCorrect && (
        <span>The correct answer is {result.correctAnswer}.</span>
      )}
    </div>
  )
}
