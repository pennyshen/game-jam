import React from 'react'
import MatchScreen from './MatchScreen'
import './components.css'
import PassageScreen from './PassageScreen';

const constants = require('../lib/constants')

const script = require('../content/script1')
const profiles = require('../content/profiles')

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.showScreen = this.showScreen.bind(this)

    this.state = {
      screen: constants.screens.MATCH_SCREEN,
      // screen: constants.screens.PASSAGE_SCREEN,

      /**
       * Each chat history item is:
       * {
       *  dialogueIds,
       *  profile,
       * }
       */
      chatHistory: [{
        dialogueIds: [1, 2, 3, 4, 5],
        profile: profiles[0],
      }]
    }
  }

  showScreen(screen) {
    this.setState({
      screen,
    })
  }

  getMatchScreen() {
    return (
      <MatchScreen
        chatHistory={this.state.chatHistory}
        showScreen={this.showScreen}
      />
    )
  }

  // show latest passage screen
  getPassageScreen() {
    const profileIndex = this.state.chatHistory.length
    if (profileIndex >= profiles.length) {
      throw new Error("Can't show new passage screen. No more profile")
    }

    const startingId = 1

    return (
      <PassageScreen
        script={script}
        profile={profiles[profileIndex]}
        startingId={startingId}
      />
    )
  }

  getScreenComponent() {
    switch(this.state.screen) {
      case constants.screens.MATCH_SCREEN:
        return this.getMatchScreen()
      case constants.screens.PASSAGE_SCREEN:
        return this.getPassageScreen()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="gameContainer">
        {this.getScreenComponent()}
      </div>
    )
  }
}

export default Game