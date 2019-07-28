import React from 'react'
import MatchScreen from './MatchScreen'
import PassageScreen from './PassageScreen';
import EndingScreen from './EndingScreen';
import './components.css'

const constants = require('../lib/constants')
const profiles = require('../content/profiles')

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.showScreen = this.showScreen.bind(this)

    this.state = {
      screen: constants.screens.MATCH_SCREEN,

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
      screen: constants.screens.ENDING_SCREEN,
    })
  }

  goBack() {
    this.showScreen(constants.screens.MATCH_SCREEN)
  }

  getEndingTexts(profile) {
    let texts = []
    const result = this.getResult(profile)

    if (result === constants.result.NO_DATE) {
      texts = [
        `You asked ${profile.name} out a few times, but there was no response.`,
        'You are ghosted.'
      ]
    } else {
      if (profile.name === constants.names.MONA) {
        texts = [
          [`"I met with Mona on a sunny afternoon at her cafe. We sat down and chatted about her writing project.`],
          [`Her writing style was unique. It somehow reminded me of a NY times best-seller I'd read a while ago.`],
          [`I mentioned that to her, as a compliment.`],
          [`However, she got upset, and murmured: ""I can never escape from her..."""`],
          [`It turned out that her mom was the author of that best-seller. Under her mom's influence, Mona grew up love writing. But having a famous mom was stressing her out in school, as everyone around her couldn't help compare her to her mom.`],
          [`As a creative writing major in college, Mona was hit by those kinds of comparison more and more often. Mona started to fear that she could never be as good as her mom.`],
          [`The voices inside of her, and the voices around her, were driving Mona crazy.`],
          [`Mona gave up, and decided to take a break from college.`],
          [`She wanted some quiet space, where people don't know about her famous mom, to keep writing.`],
        ]
      } else if (profile.name === constants.names.ZACK) {
        texts = [
          [`Zack and I had set up time to meet for coffee, in the middle of a work day. I arrived at the cafe a bit early, and watched throngs of people come in and out as I waited. The cafe was in downtown, and the majority of people looked like tech workers.`],
          [`Twenty minutes passed, and no sign of Zack. I began to feel tense. Maybe I'd come to the wrong Blue Bottle? Granted, there were several in the city...`],
          [`"Hi, are you {name}?" I turned my head at the sound of my name, and looked up.`],
          [`"Hi Zack," I said, extending a hand, though my voice caught in my throat.`],
          [`He... looked like his pictures, but there was something a bit off. `],
          [`"Are you wearing... a uniform?" There was a clear insignia on his collared shirt. It looked a little familiar...`],
          [`I did a double take. "Wait... I've seen that before. A friend's younger sister goes to that same... high school?!"`],
          [`It turned out that Zack was actually not a fellow tech worker, but in fact a high school student. `],
        ]
      }
    }

    return texts
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
      screen:  constants.screens.MATCH_SCREEN,
      chatHistory: [...this.state.chatHistory, chatHistoryItem]
    })
  }

  getScreenComponent() {
    switch(this.state.screen) {
      case constants.screens.MATCH_SCREEN:
        return this.getMatchScreen()
      case constants.screens.PASSAGE_SCREEN:
        return this.getPassageScreen()
      case constants.screens.ENDING_SCREEN:
        return this.getEndingScreen()
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