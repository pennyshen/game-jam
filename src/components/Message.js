import React from 'react'
import PropTypes from 'prop-types'

class Message extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    message: PropTypes.string,
  }

  render() {
    return (
      <div>
        {this.props.message}
      </div>
    )
  }
}

export default Message