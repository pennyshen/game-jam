module.exports = {
  1: {
    "person": "Penny",
    "messages": [
      "Hello",
      "Nice to meet you",
      "How was your day?",
    ],
    "optionIds": [
      2, // it was good
      5, // it was bad
    ]
  },

  // tree 1: it was good
  2: {
    "person": "Grace",
    "messages": [
      "It was good",
    ],
    "optionIds": [
      3,
    ]
  },

  3: {
    "person": "Penny",
    "messages": [
      "That's great!",
      "I'm jealous",
    ],
    "optionIds": [
      4, // goodbye
    ]
  },

  // tree 2
  5: {
    "person": "Grace",
    "messages": [
      "It was bad",
    ],
    "optionIds": [
      6,
    ]
  },

  6: {
    "person": "Penny",
    "messages": [
      "Awww",
      "What a bummer",
    ],
    "optionIds": [
      4,
    ]
  },
  
  // end
  4: {
    "person": "Grace",
    "messages": [
      "Cool",
      "Goodbye",
    ],
    "optionIds": [
      7,
    ],
  },
  7: {
    "person": "Penny",
    "messages": [
      "Bye!",
    ],
    "optionIds": [],
  },
}