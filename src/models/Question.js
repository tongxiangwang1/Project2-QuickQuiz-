export default class Question {
  constructor(questionId, prompt, options, correctAnswer, categoryId) {
    this.questionId = questionId
    this.prompt = prompt
    this.options = [...options]
    this.correctAnswer = correctAnswer
    this.categoryId = categoryId
  }

  checkAnswer(answer) {
    return String(answer).trim().toLowerCase()
      === this.correctAnswer.trim().toLowerCase()
  }

  getCorrectAnswer() {
    return this.correctAnswer
  }
}