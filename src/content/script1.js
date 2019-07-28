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
      "Went to lots of parties",
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
      "Some very very long long long long long long long long long long long long long long sentence",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
      "Many line line",
    ],
    "optionIds": [
      8,
      9,
      10,
    ]
  },
  8: {
    "person": "Grace",
    "messages": [
      "branch 1",
      "Some very very long long long long long long long long long long long long long long sentence",
      "blah blah blah",
      "blah blah blah",
      "blah blah blah",
      "blah blah blah",
      "blah blah blah",
      "blah blah blah",
    ],
    "optionIds": [],
  },
  9: {
    "person": "Grace",
    "messages": [
      "branch 2",
      "blah blah blah",
      "blah blah blah",
      "blah blah blah",
      "blah blah blah",
      "blah blah blah",
      "blah blah blah",
    ],
    "optionIds": [],
  },
  10: {
    "person": "Grace",
    "messages": [
      "branch 3",
      "blah blah blah",
      "blah blah blah",
      "blah blah blah",
      "blah blah blah",
      "blah blah blah",
      "blah blah blah",
    ],
    "optionIds": [],
  },
}