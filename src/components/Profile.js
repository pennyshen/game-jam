import React from 'react'
import PropTypes from 'prop-types'
import './components.css';

class Profile extends React.Component {
  static propTypes = {
    /**
     * name
     * age
     * gender
     * blurb
     */
    profile: PropTypes.object,
  }

  render() {
    const profile = this.props.profile
    return (
      <div>
        <div>{profile.name}, {profile.age}</div>
        <div>{profile.gender}</div>
        <div className="blurb">
          {profile.blurb.map((line, index) => (
            <div>{line}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default Profile
