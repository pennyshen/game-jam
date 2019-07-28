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
  }

  showChatHistory(item) {
    console.log('no-op for now')
  }

  render() {
    const chatHistory = this.props.chatHistory

    return (
      <React.Fragment>
        <button
          className="match button"
          onClick={(e) => this.props.showScreen(constants.screens.PASSAGE_SCREEN)}
        >
          See my match for today
        </button>

        {chatHistory.length > 0 && (
          <React.Fragment>
            <hr className="match underline"/>

            <div className="chatHistory">
              <b>Chat history</b>
              {chatHistory.map((item, index) => (
                <button
                  className="option"
                  key={index}
                  onClick={(e) => this.showChatHistory(item)}
                >
                  > <span className="optionText">{item.profile.name}</span>
                </button>
              ))}
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

export default MatchScreen