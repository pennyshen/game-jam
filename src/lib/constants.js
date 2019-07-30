module.exports = {
  screens: {
    MATCH_SCREEN: 'match',
    PASSAGE_SCREEN: 'passage',
    ENDING_SCREEN: 'ending',
  },

  shouldDelayMessage: true,
  defaultMessageDelay: 2000,
  // shorter delay after user clicks on a button so it's less confusing
  // whether the click actually worked or not
  messageDelayAfterClick: 500,

  endConversationDelay: 5000,
  fadeOutDelay: 3000,

  names: {
    ME: 'me',
    MONA: 'Mona',
    ZACK: 'Zack',
    ELI: 'Eli',
  },

  startId: 'start',

  message: {
    NAME_INDEX: 0,
    TEXT_INDEX: 1,
  },

  result: {
    DATE: 'date',
    NO_DATE: 'noDate',
  }
}
