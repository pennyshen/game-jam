import React from 'react'
import Conversation from './Conversation';
import Profile from './Profile';
import PropTypes from 'prop-types'
import './components.css';

const constants = require('../lib/constants')

class PassageScreen extends React.Component {
  static propTypes = {
    startingId: PropTypes.number,
    script: PropTypes.object,
    profile: PropTypes.object,
    endConversation: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.showConversation = this.showConversation.bind(this)
    this.state = {
      shouldShowConversation: false,
    }
  }

  showConversation() {
    this.setState({
      shouldShowConversation: true,
    })
  }

  endConversation(dialogueIds) {
    setTimeout(() => {
      this.props.endConversation({
        dialogueIds,
        profile: this.props.profile,
      })
    }, constants.endConversationDelay)
  }

  render() {

    return (
      <div className="conversationContainer">
        <Profile
          profile={this.props.profile}
          showConversation={this.showConversation}
        />
        {this.state.shouldShowConversation &&
          <Conversation
            script={this.props.script}
            startingId={this.props.startingId}
            myName="Grace"
            endConversation={(dialogueIds) => this.endConversation(dialogueIds)}
          />
        }
      </div>
    )
  }
}

export default PassageScreen