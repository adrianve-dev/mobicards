import React, {Component} from 'react'
import { connect } from 'react-redux'
import QuizQuestion from './QuizQuestion'
import QuizAnswer from './QuizAnswer'
import QuizResults from './QuizResults'
import NoCards from './NoCards'

class Quiz extends Component {
  state = {
    currentQuestion: 0,
    showAnswer: false,
    numCorrect: 0,
  }

  handleShowAnswer = () => {
    this.setState(() => ({
      showAnswer: true
    }))
  }

  handleQuestionResult = (correct) => {
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1,
      showAnswer: false,
      numCorrect: correct ? prevState.numCorrect + 1 : prevState.numCorrect
    }))
  }

  handleRestartQuiz = () => {
    this.setState(() => ({
      currentQuestion: 0,
      showAnswer: false,
      numCorrect: 0,
    }))
  }

  handleBackToDeck = () => {
    const { navigation, route } = this.props
    navigation.navigate('DeckView', { cardsId: route.params.deckRef })
 }

  render() {
    const {cards, navigation, route, dispatch} = this.props
    const {currentQuestion, numCorrect} = this.state
    const {deckRef} = route.params

    //no cards exist
    if(!cards || !cards[deckRef]) {
      return <NoCards />
    }

    //cardsIds at deckRef
    const currentCards = cards[deckRef]
    const cardIds = Object.keys(currentCards)
    const currentCardId = cardIds[currentQuestion]

    //answered all questions
    if(currentQuestion >= cardIds.length) {
      return <QuizResults numCorrect={numCorrect} numQuestions={cardIds.length} handleRestartQuiz={this.handleRestartQuiz} handleBackToDeck={this.handleBackToDeck} />
    }


    //taking quiz
    return (
      !this.state.showAnswer
        ? <QuizQuestion 
            question={currentCards[currentCardId].question} 
            questionsLeft={cardIds.length - currentQuestion} 
            handleShowAnswer={this.handleShowAnswer} 
          />
        : <QuizAnswer 
            answer={currentCards[currentCardId].answer} 
            handleQuestionResult={this.handleQuestionResult}
          />
    )
  }
}

const mapStateToProps = ({cards}) => {
  return {
    cards
  }
}

export default connect(mapStateToProps)(Quiz)