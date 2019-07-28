import React from 'react'
import PropTypes from 'prop-types'
import './components.css'

const constants = require('../lib/constants')

class MatchScreen extends React.Component {
  static propTypes = {
    chatHistory: PropTypes.array,
    showScreen: PropTypes.func,
  }

  render() {
    const chatHistory = this.props.chatHistory

    return (
      <React.Fragment>
        <button
          className="button"
          onClick={(e) => this.props.showScreen(constants.screens.PASSAGE_SCREEN)}
        >
          See my match for today
        </button>

        {chatHistory.length > 0 && (
          <React.Fragment>
            <hr className="underline"/>

            <div class="chatHistory">
              <b>Chat history</b>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

export default MatchScreen