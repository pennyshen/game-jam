const constants = require("../lib/constants")

const {
  ME,
  MONA,
} = constants.names

const {
  DATE,
  NO_DATE,
} = constants.result

module.exports = {
  start: {
    messages: [
      [MONA, "Hey, nice to meet you!"],

      [ME,   "hey mona! nice to meet u as well :)"],
      [ME,   "how’s ur day giong?"],

      [MONA, "It's been productive!"],

      [ME,   "good to hear"],
      [ME,   "what are you producing?"],

      [MONA, "haha I produce coffee at work ;)"],
    ],
    options: [
      "coffeeBeans",
      "barista",
    ],
  },

  coffeeBeans: {
    messages: [
      [ME,   "...like producing coffee beans??"],

      [MONA, "Exactly"],
      [MONA, "I live in the forest"],
      [MONA, "and I hunt for fun"],

      [ME,   "Now youre joking for sure"],

      [MONA, "Haha, you caught me."],
      [MONA, "I'm just a barista"],
    ],
    options: [
      "barista",
    ]
  },

  barista: {
    messages: [
      [ME,   " Yeah I saw you're a barista, right?"],

      [MONA, "Yup, been at my barista job the whole day."],

      [ME, "nice! i love coffee"],

      [MONA, "Me too. I can't live without it."],
      [MONA, "What kind of coffee do you like?"],

      [ME,   "hmm I'm not really picky as long as it's coffee haha"],
      [ME,   "how bout u?"],

      [MONA, "I prefer full city roast most of the time, but when I need ideas, I get Viennese"],
    ],
    options: [
      "impressive",
      "theBest",
    ],
  },

  impressive: {
    messages: [
      [ME,   "whoa, that's impressive"],
    ],
    options: [
      "canDefSeeBarista",
    ]
  },

  theBest: {
    messages: [
      [ME,   "viennese is the best!"],
      [MONA, "Oh! Most people don't know Viennesse"],
      [ME,   "i just know my coffee :)"],
    ],
    options: [
      "canDefSeeBarista",
    ]
  },

  canDefSeeBarista: {
    messages: [
      [ME,   "can def see the barista now"],
      [MONA, "Haha! I'm glad :)"],
      [ME,   "when did you start making coffee?"],
      [MONA, "I actually started drinking since middle school, haha..."],
      [MONA, "I'd make coffee for my mom every morning"],
      [ME,   "oh wow!"],
    ],
    options: [
      "yourMomClose",
      "yourMomBusyALot",
    ]
  },

  yourMomClose: {
    messages: [
      [ME,   "are u and ur mom close?"],
      [MONA, "Hm, yes and no?"],
      [MONA, "A bit of a complicated relationship, like every other"],
      [MONA, "I haven't actually talked to her in a few months now"],
      [ME,   "oh really?"],
      [MONA, "Yeah... you know, family"],
    ],
    options: [
      "enoughAboutMe",
    ]
  },

  yourMomBusyALot: {
    messages: [
      [ME, "was ur mom rly busy a lot?"],
      [MONA, "I guess you could say that"],
      [MONA, "It was something I enjoyed doing"],
      [MONA, "how it could bring a smile to someone's face!"],
      [MONA, "Especially early in the morning"],
      [MONA, "So... I guess... that's kinda where I am today!"],
    ],
    options: [
      "enoughAboutMe",
    ]
  },

  enoughAboutMe: {
    messages: [
      [MONA, "But enough about me!"],
      [MONA, "What's going on with you?"],
    ],
    options: [
      "hrTechCompany",
      "careerSwitch",
    ],
  },

  hrTechCompany: {
    messages: [
      [ME,   "working in hr at a tech company rn"],
      [MONA, "HR! Do you like it?"],
      [ME,   "that's arguable..."],
      [ME,   "i'm not really into tech in general, i guess"],
      [MONA, "Haha, same"],
      [ME,   "kinda feels like u have to be in tech to survive here"],
      [MONA, "Lol, don't remind me!"],
      [ME,   "well i have to go to sleep now. work tmrw"],
      [ME,   "good night!"],
      [MONA, "Oh okay, good night!"],
    ],
    options: [],
    result: NO_DATE,
  },

  careerSwitch: {
    messages: [
      [ME, "im actually trying to do a career switch!"],
      [MONA, "Oh really! What are you trying to switch to?"],
      [ME,   "im not actually sure! just trying to feel things out"],
      [ME,   "just feel like the corporate life isn't for me"],
      [MONA, "Oh yeah, I definitely feel that too"],
      [MONA, "People ask me if I'm happy as a barista"],
      [MONA, "As if they're looking down on me"],
      [MONA, "But a part of me *is* happy, you know"],
      [MONA, "There are different paths to happiness"],
      [ME,   "yeah"],
      [MONA, "It's also great inspiration for writing"],
      [MONA, "All the different people you meet in a day"],
    ],
    options: [
      "writeAboutWho",
      "publishBook",
    ],
  },

  writeAboutWho: {
    messages: [
      [ME, "what do u like to write about?"],
      [MONA, "I actually like to write about people I know"],
      [MONA, "Which some people don't like"],
      [ME,   "oh really?"],
      [MONA, "Yeah... haha"],
      [MONA, "People perceive themselves differently than how others see them"],
      [MONA, "I realize..."],
      [ME,   "haha, must be fun to be friends with a writer!"],
      [MONA, "Sure is! :)"],
      [ME,   "maybe you can show me your writing sometime"],
      [ME,   "over some coffee? ;)"],
      [MONA, "Haha, I can brew you some"],
      [ME,   "sounds good!"],
    ],
    options: [],
    result: DATE,
  },

  publishBook: {
    messages: [
      [ME, "do u want to publish a book?"],
      [MONA, "Haha, maybe.."],
      [MONA, "I know someone who published a book"],
      [MONA, "And honestly, life as a famous writer"],
      [MONA, "Isn't really... what I'd want for myself"],
      [ME,   "oh, never thought about that"],
      [MONA, "We'll see what happens!"],
      [ME,   ":)"],
      [MONA, "Gotta go now - talk to you later?"],
      [ME,   "yeah!"],
    ],
    options: [],
    result: DATE,
  },
}
