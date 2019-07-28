import React from 'react'
import PropTypes from 'prop-types'

class Dialogue extends React.PureComponent {
  static propTypes = {
    myName: PropTypes.string,
    person: PropTypes.string,
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
    }, 700)
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
    const messageClass = this.props.myName === this.props.person ? 'mine': 'theirs'
    return (
      <div className={messageClass}>
        {messages.length > 0 && messages.map((message, index) => (
          <div className="message" key={index}>{message}</div>
        ))}
        <br/>
      </div>
    )
  }
}

export default Dialogue