import React from 'react'
import Dialogue from './Dialogue'
import Conversation from './Conversation';

class Passage extends React.Component {

render() {
  const script = require('../dialogues/dialogue1')
  const startingId = 1

  return (
    <Conversation
        script={script}
        startingId={startingId}
        myName="Grace"
    />
  )
}
}

export default Passage