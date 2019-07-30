import React from 'react'
import MatchScreen from './MatchScreen'
import PassageScreen from './PassageScreen';
import EndingScreen from './EndingScreen';
import './components.css'

const {
  screens,
  result,
} = require('../lib/constants')
const profiles = require('../content/profiles')

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.showScreen = this.showScreen.bind(this)

    this.state = {
      screen: screens.MATCH_SCREEN,

      /**
       * Each chat history item is:
       * {
       *  dialogueIds,
       *  profile,
       * }
       */
      chatHistory: [],
      // chatHistory: [
      //   {profile: profiles[0], dialogueIds: ["ohAnimeDotDotDot"]},
      //   {profile: profiles[1], dialogueIds: ["publishBook"]},
      // ],

      endingScreenProfile: null,
    }
  }

  getScript(name) {
    return require(`../content/${name}Script`)
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
        profiles={profiles}
        meetWithPerson={(profile) => this.meetWithPerson(profile)}
      />
    )
  }

  getResult(profile) {
    const chatHistoryItem = this.state.chatHistory.filter((item) => item.profile.name === profile.name)[0]
    const dialogueIds = chatHistoryItem.dialogueIds
    const lastDialogueId = dialogueIds[dialogueIds.length - 1]
    const script = this.getScript(profile.name)
    return script[lastDialogueId].result
  }

  meetWithPerson(profile) {
    this.setState({
      endingScreenProfile: profile,
      screen: screens.ENDING_SCREEN,
    })
  }

  goBack() {
    this.showScreen(screens.MATCH_SCREEN)
  }

  getEndingTexts(profile) {
    const _result = this.getResult(profile)

    if (_result === result.NO_DATE) {
      return [
        `You asked ${profile.name} out a few times, but there was no response.`,
        'You are ghosted.'
      ]
    } else {
      const endings = require('../content/endings')
      return endings[profile.name][result.DATE]
    }
  }

  getEndingScreen() {
    return (
      <EndingScreen
        texts={this.getEndingTexts(this.state.endingScreenProfile)}
        goBack={() => this.goBack()}
      />
    )
  }
  // show latest passage screen
  getPassageScreen() {
    const profileIndex = this.state.chatHistory.length
    if (profileIndex >= profiles.length) {
      throw new Error("Can't show new passage screen. No more profile")
    }

    const profile = profiles[profileIndex]
    return (
      <PassageScreen
        script={this.getScript(profile.name)}
        profile={profile}
        endConversation={(chatHistoryItem) => this.endConversation(chatHistoryItem)}
      />
    )
  }

  endConversation(chatHistoryItem) {
    this.setState({
      screen:  screens.MATCH_SCREEN,
      chatHistory: [...this.state.chatHistory, chatHistoryItem]
    })
  }

  getScreenComponent() {
    switch(this.state.screen) {
      case screens.MATCH_SCREEN:
        return this.getMatchScreen()
      case screens.PASSAGE_SCREEN:
        return this.getPassageScreen()
      case screens.ENDING_SCREEN:
        return this.getEndingScreen()
      default:
        throw new Error(`No screen defined for ${this.state.screen}`)
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