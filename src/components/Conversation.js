import React from 'react'
import PropTypes from 'prop-types'
import Dialogue from './Dialogue';
import Options from './Options'

const constants = require('../lib/constants')

class Conversation extends React.Component {
  static propTypes = {
    script: PropTypes.object,
    tion: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.onOptionClick = this.onOptionClick.bind(this)
    this.doneDisplaying = this.doneDisplaying.bind(this)
    this.scrollToBottom = this.scrollToBottom.bind(this)
    this.state = {
      dialogueIds: [constants.startId],
      options: [],
      firstMessageDelay: constants.messageDelayAfterClick,
    }
  }

  doneDisplaying() {
    // check to see if we need to automatically display next dialogue or show options
    const options = this.getCurrentDialogue().options

    if (options.length > 1) {
      // show options
      this.showOptions(options)
    } else if (options.length === 1) {
      this.displayNewDialogue(options[0])
    } else {
      this.props.endConversation(this.state.dialogueIds)
    }
  }

  onOptionClick(id) {
    this.displayNewDialogue(id, constants.messageDelayAfterClick)
  }

  displayNewDialogue(id, firstMessageDelay) {
    this.setState({
      dialogueIds: [
        ...this.state.dialogueIds,
        id,
      ],
      options: [],  // hide options
      firstMessageDelay,
    })
  }

  getCurrentDialogue() {
    const dialogueIds = this.state.dialogueIds
    const currentDialogueId = dialogueIds[dialogueIds.length - 1]
    return this.props.script[currentDialogueId]
  }

  getDialogue(id) {
    return this.props.script[id]
  }

  showOptions(options) {
    setTimeout(() => {
      const optionsObj = options.map((id) => ({
        id,
        message: this.getDialogue(id).messages[0][constants.message.TEXT_INDEX],
      }))
      this.setState({ options: optionsObj })
    }, constants.messageOptionDelay)
  }

  scrollToBottom() {
    this.messagesEnd && this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const dialogueIds = this.state.dialogueIds

    return (
      <div className="conversation">
        {dialogueIds.map((id, index) => {
          const {messages} = this.getDialogue(id)
          return (
            <Dialogue
              messages={messages}
              isDisplaying={constants.shouldDelayMessage && dialogueIds.length === index + 1}
              firstMessageDelay={this.state.firstMessageDelay}
              doneDisplaying={this.doneDisplaying}
              scrollToBottom={this.scrollToBottom}
              key={index}
            />
          )
        })}

        {this.state.options.length > 0 &&
          <Options
            options={this.state.options}
            onOptionClick={this.onOptionClick}
          />
        }

        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    )
  }
}

export default Conversation