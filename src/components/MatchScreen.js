import React from 'react'
import PropTypes from 'prop-types'
import './components.css'

const constants = require('../lib/constants')

class MatchScreen extends React.Component {
  static propTypes = {
    /**
     * Each chat history item is:
     * {
     *  dialogueIds,
     *  profile,
     * }
     */
    chatHistory: PropTypes.array,
    showScreen: PropTypes.func,
    profiles: PropTypes.array,
    meetWithPerson: PropTypes.func,
  }

  showChatHistory(item) {
    console.log('no-op for now')
  }

  getMeetWithPeopleButtons() {
    return (
      <div className="meetWith">
        {this.props.profiles.map((profile, index) => (
          <React.Fragment key={index}>
            <button
              className="button"
              onClick={(e) => this.props.meetWithPerson(profile)}
            >
              Meet with {profile.name}
            </button>
          </React.Fragment>
        ))}
      </div>
    )
  }

  getSeeMyMatchButton() {
    return (
      <button
        className="match button"
        onClick={(e) => this.props.showScreen(constants.screens.PASSAGE_SCREEN)}
      >
        See my match for today
      </button>
    )
  }

  render() {
    const chatHistory = this.props.chatHistory

    return (
      <React.Fragment>
        {chatHistory.length < this.props.profiles.length ?
          this.getSeeMyMatchButton() : this.getMeetWithPeopleButtons()}

        {chatHistory.length > 0 && (
          <React.Fragment>
            <hr className="match underline"/>

            <div className="chatHistory">
              <b>Your recent match</b>
              {chatHistory.map((item, index) => (
                <div className="option" key={index}>
                  > {item.profile.name}
                </div>
              ))}
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

export default MatchScreen