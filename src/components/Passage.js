import React from 'react'
import Conversation from './Conversation';
import './components.css';
import Profile from './Profile';

class Passage extends React.Component {
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

  render() {
    const script = require('../scripts/script1')
    const startingId = 1
    const profiles = require('../scripts/profiles')

    return (
      <div className="conversationContainer">
        <Profile
          profile={profiles[2]}
          showConversation={this.showConversation}
        />
        {this.state.shouldShowConversation &&
          <Conversation
            script={script}
            startingId={startingId}
            myName="Grace"
          />
        }
      </div>
    )
  }
}

export default Passage