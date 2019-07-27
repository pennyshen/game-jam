import React from 'react'
import Conversation from './Conversation';
import './components.css';
import Profile from './Profile';

class Passage extends React.Component {
  render() {
    const script = require('../scripts/script1')
    const startingId = 1
    const profiles = require('../scripts/profiles')

    return (
      <div className="conversationContainer">
        <Profile
          profile={profiles[2]}
        />
        <Conversation
          script={script}
          startingId={startingId}
          myName="Grace"
        />
      </div>
    )
  }
}

export default Passage