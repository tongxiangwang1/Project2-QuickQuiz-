export default class AnswerRecord {
  constructor(
    playerId,
    questionId,
    submittedAnswer,
    isCorrect,
    timeRemaining,
  ) {
    this.playerId = playerId
    this.questionId = questionId
    this.submittedAnswer = submittedAnswer
    this.isCorrect = isCorrect
    this.timeRemaining = timeRemaining
  }

  getResult() {
    return this.isCorrect
  }
}