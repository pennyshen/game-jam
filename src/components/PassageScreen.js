import React from 'react'
import Conversation from './Conversation';
import Profile from './Profile';
import PropTypes from 'prop-types'
import './components.css';

class PassageScreen extends React.Component {
  static propTypes = {
    startingId: PropTypes.number,
    script: PropTypes.object,
    profile: PropTypes.object,
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
          />
        }
      </div>
    )
  }
}

export default PassageScreen