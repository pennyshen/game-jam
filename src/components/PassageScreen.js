import React from 'react'
import Conversation from './Conversation';
import Profile from './Profile';
import PropTypes from 'prop-types'
import './components.css';

const constants = require('../lib/constants')

class PassageScreen extends React.Component {
  static propTypes = {
    script: PropTypes.object,
    profile: PropTypes.object,
    endConversation: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.showConversation = this.showConversation.bind(this)
    this.state = {
      shouldShowConversation: false,
      transitionCSS: ''
    }
  }

  showConversation() {
    this.setState({
      shouldShowConversation: true,
    })
  }

  endConversation(dialogueIds) {
    setTimeout(() => {
      this.setState({
        transitionCSS: 'fadeOut',
      })

      setTimeout(() => {
        this.props.endConversation({
          dialogueIds,
          profile: this.props.profile,
        })
      }, constants.endConversationDelay)
    }, constants.fadeOutDelay)
  }

  render() {

    return (
      <div className={`conversationContainer ${this.state.transitionCSS}`}>
        <Profile
          profile={this.props.profile}
          showConversation={this.showConversation}
        />
        {this.state.shouldShowConversation &&
          <Conversation
            script={this.props.script}
            endConversation={(dialogueIds) => this.endConversation(dialogueIds)}
          />
        }
      </div>
    )
  }
}

export default PassageScreen