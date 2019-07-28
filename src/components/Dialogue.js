import React from 'react'
import PropTypes from 'prop-types'

const constants = require('../lib/constants')

class Dialogue extends React.PureComponent {
  static propTypes = {
    messages: PropTypes.array,
    isDisplaying: PropTypes.bool,
    doneDisplaying: PropTypes.func,
    scrollToBottom: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      displayedMessages: [],
    }
    if (this.props.isDisplaying) {
      this.displayNextMessage()
    } else {
      this.props.doneDisplaying()
    }
  }

  displayNextMessage() {
    const displayedMessages = this.state.displayedMessages
    const messages = this.props.messages

    if (displayedMessages >= messages) {
      this.props.doneDisplaying()
      return
    }

    setTimeout(() => {
      const nextMessage = messages[displayedMessages.length]
      this.setState({
        displayedMessages: [
          ...displayedMessages,
          nextMessage,
        ]
      })

      this.displayNextMessage()
    }, constants.messageDelay)
  }

  componentDidMount() {
    this.props.scrollToBottom()
  }

  componentDidUpdate() {
    this.props.scrollToBottom()
  }

  render() {
    const messages = this.props.isDisplaying ?
      this.state.displayedMessages : this.props.messages
    return (
      <div>
        {messages.length > 0 && messages.map((message, index) => {
          const name = message[0]
          const nameClass = name === constants.names.ME ? 'mine' : 'theirs'
          const text = message[1]
          return (
            <div className={`message ${nameClass}`} key={index}>{text}</div>
          )
        })}
        <br/>
      </div>
    )
  }
}

export default Dialogue