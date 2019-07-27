import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

class Dialogue extends React.PureComponent {
  static propTypes = {
    person: PropTypes.string,
    messages: PropTypes.array,
    isDisplaying: PropTypes.bool,
    doneDisplaying: PropTypes.func,
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
    }, 700)
  }

  render() {
    const messages = this.props.isDisplaying ?
    this.state.displayedMessages : this.props.messages
    return (
      <div>
        {messages.length > 0 && messages.map((message, index) => (
          <Message
            name={this.props.person}
            message={message}
            key={index}
          />
        ))}
        <br/>
      </div>
    )
  }
}

export default Dialogue