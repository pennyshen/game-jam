import React from 'react'
import PropTypes from 'prop-types'
import './components.css';

class Profile extends React.Component {
  static propTypes = {
    /**
     * name
     * age
     * gender
     * occupation
     * blurb
     * looking for
     * hobbies
     */
    profile: PropTypes.object,
    showConversation: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.showConversation = this.showConversation.bind(this)
    this.state = {
      shouldShowChatButton: true,
    }
  }

  showConversation() {
    this.setState({
      shouldShowChatButton: false,
    })
    this.props.showConversation()
  }

  render() {
    const profile = this.props.profile
    const buttonText = `Chat with ${profile.name}`

    return (
      <div className="profile">
        <div className="profileName profileBottomSmall">{profile.name}</div>
        <div className="profileBottomLarge">{profile.gender} · {profile.age} · {profile.occupation}</div>

        <div className="profileBlurb profileBottomLarge">
          {profile.blurb.map((line, index) => {
            const startQuote = index === 0 ? '"' : ''
            const endQuote = index === profile.blurb.length - 1 ? '"': ''
            return (
              <div key={index}>
                {startQuote}{line}{endQuote}
              </div>
            )
          })}
        </div>

        <div>
          Looking for
        </div>
        <hr className="underline"/>
        <div className="profileBottomLarge">
          {profile.lookingFor}
        </div>

        <div>
          Hobbies
        </div>
        <hr className="underline"/>
        <div className="profileBottomLarge">
          {profile.hobbies}
        </div>

        <button
            className={this.state.shouldShowChatButton ? 'button' : 'hidden'}
            onClick={(e) => this.showConversation()}
          >
            {buttonText}
        </button>
      </div>
    )
  }
}

export default Profile
