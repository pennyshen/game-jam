import React from 'react'
import PropTypes from 'prop-types'
import './components.css'

class EndingScreen extends React.Component {
  static propTypes = {
    texts: PropTypes.array,
    goBack: PropTypes.func,
  }

  render() {
    return (
      <div className="endingScreen">
        {this.props.texts.map((text, index) => (
          <div className="endingBottom" key={index}>
            {text}
          </div>
        ))}
        <button
          className="match button profile endingButton"
          onClick={(e) => this.props.goBack()}
        >
          Go back
        </button>
      </div>
    )
  }
}

export default EndingScreen
