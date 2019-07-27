import React from 'react'
import PropTypes from 'prop-types'
import Dialogue from './Dialogue';
import Options from './Options'

class Conversation extends React.Component {
  static propTypes = {
    startingId: PropTypes.number,
    script: PropTypes.object,
    myName: PropTypes.string,
  }

  constructor(props) {
    super(props)
    this.onOptionClick = this.onOptionClick.bind(this)
    this.doneDisplaying = this.doneDisplaying.bind(this)
    this.state = {
      dialogueIds: [this.props.startingId],
      options: [],
    }
  }

  onOptionClick(id) {
    this.displayNewDialogue(id)
  }

  displayNewDialogue(id) {
    this.setState({
      dialogueIds: [
        ...this.state.dialogueIds,
        id,
      ],
      options: [],  // hide options
    })
  }

  doneDisplaying() {
    // check to see if we need to automatically display next dialogue or show options
    const optionIds = this.getCurrentDialogue().optionIds
    console.log(`> done displaying, current: ${optionIds[0]}`)

    if (optionIds.length > 1) {
      // show options
      this.showOptions(optionIds)
    } else if (optionIds.length === 1) {
      this.displayNewDialogue(optionIds[0])
    } else {
      // end of conversation!
      console.log('convo ended!!')
    }
  }

  getCurrentDialogue() {
    const dialogueIds = this.state.dialogueIds
    const currentDialogueId = dialogueIds[dialogueIds.length - 1]
    return this.props.script[currentDialogueId]
  }

  getDialogue(id) {
    return this.props.script[id]
  }

  showOptions(optionIds) {
    setTimeout(() => {
      const options = optionIds.map((id) => ({
        id,
        message: this.getDialogue(id).messages[0],
      }))
      this.setState({ options })
    }, 500)
  }

  render() {
    const dialogueIds = this.state.dialogueIds

    return (
      <div>
        {dialogueIds.map((id, index) => {
          const {person, messages} = this.getDialogue(id)
          return (
            <Dialogue
              person={person}
              messages={messages}
              isDisplaying={dialogueIds.length === index + 1}
              doneDisplaying={this.doneDisplaying}
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
      </div>
    )
  }
}

export default Conversation