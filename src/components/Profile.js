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
  }

  render() {
    const profile = this.props.profile
    return (
      <div>
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
        <hr className="profileUnderline"/>
        <div className="profileBottomLarge">
          {profile.lookingFor}
        </div>

        <div>
          Hobbies
        </div>
        <hr className="profileUnderline"/>
        <div className="profileBottomLarge">
          {profile.hobbies}
        </div>
      </div>
    )
  }
}

export default Profile
