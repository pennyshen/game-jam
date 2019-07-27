import React from 'react'
import Conversation from './Conversation';

class Passage extends React.Component {

render() {
  const script = require('../scripts/script1')
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