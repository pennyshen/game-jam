const constants = require("../lib/constants")

const {
  ME,
  ZACK,
} = constants.names

const {
  DATE,
  NO_DATE,
} = constants.result

module.exports = {
  start: {
    messages: [
      [ZACK, "heyy"],
      [ME, "hi :) "],
      [ME, "hows it going "],
      [ZACK, "good. had dance practice today. new set was fun"],
      [ZACK, "u?"],
    ],
    options: [
      "matchedWithYou",
      "doYouLikeDancing",
    ],
  },

  matchedWithYou: {
    messages: [
      [ME, "great cuz i matched w u"],
      [ZACK, ";)"],
      [ME, "do u like dancing?"],
    ],
    options: [
      "dreamIsGoPro",
    ],
  },

  doYouLikeDancing: {
    messages: [
      [ME, "nice! do u like dancing?"],
    ],
    options: [
      "dreamIsGoPro",
    ],
  },

  dreamIsGoPro: {
    messages: [
      [ZACK, "yeah the dream is to go pro"],
    ],
    options: [
      "thatsSoCool",
      "butEngineer",
    ],
  },

  thatsSoCool: {
    messages: [
      [ME, "that's so cool!"],
      [ZACK, "are u into dancing?"],
      [ME, "yeah!"],
      [ZACK, "what kind?"],
    ],
    options: [
      "hipHop",
      "contempoary",
    ],
  },

  butEngineer: {
    messages: [
      [ME, "wait, but you're an engineer?"],
      [ZACK, "oh yeah haha..."],
      [ME, "i get it, engineering isn't your passion"],
    ],
    options: [
      "gottaGoBye",
    ],
  },

  contempoary: {
    messages: [
      [ME, "contemporary"],
      [ZACK, "oh i never got into contemp"],
      [ZACK, "but that cool"],
      [ME, "fun~"],
      [ZACK, "haha"],
    ],
    options: [
      "whatElseDoYouLike",
    ],
  },

  hipHop: {
    messages: [
      [ME, "hip-hop"],
      [ME,"yea, im in a crew called fsx"],
      [ZACK, "o never heard of it"],
      [ME, "we're small & new. broke off from afx"],
      [ZACK, "what... im in AFX"],
      [ZACK, "when did a new group start?"],
      [ME, "oh... it was rly low key"],
      [ZACK, "hm i guess. i do hip-hop."],
      [ZACK, "but fuck there are some dancers on AFX who are monsters"],
      [ME, "talking about yourself?"],
      [ZACK, "lol i guess"],
    ],
    options: [
      "whatElseDoYouLike",
    ],
  },

  whatElseDoYouLike: {
    messages: [
      [ZACK, "what else do u like to do?"],
    ],
    options: [
      "intoGardening",
      "exporingCity",
    ],
  },


  exporingCity: {
    messages: [
      [ME, "just exploring the city outside of work"],
      [ZACK, "that's fun"],
      [ME, "yeah i'm new to the city, so still getting used to it"],
    ],
    options: [
      "whereDidYouMoveFrom",
    ],
  },

  intoGardening: {
    messages: [
      [ME, "i've been really into gardening recently"],
      [ZACK, "that's fun"],
      [ME, "yeah have you tried before?"],
      [ZACK, "no, i dont think i have the patience for that haha"],
      [ZACK, "but it seems cool"],
      [ME, "yeah it's fun!"],
      [ZACK, "u didn't say much on ur profile so i was curious about u"],
      [ZACK, "if you were in afx, we must have mutual friends?"],
      [ME, "oh i wasn't in afx... i joined super recently. after the split."],
      [ZACK, "still wouldn't be surprised if we had mutual friends"],
    ],
    options: [
      "movedRecently",
      "gottaGoBye",
    ],
  },

  movedRecently: {
    messages: [
      [ME, "oh i moved here very recently"],
      [ME, "dont know ppl in the bay!"],
    ],
    options: [
      "whereDidYouMoveFrom",
    ],
  },

  whereDidYouMoveFrom: {
    messages: [
      [ZACK, "oh really"],
      [ZACK, "where did you move from?"],
      [ME, "LA"],
      [ZACK, "oh yeah i moved from la a few years ago too"],
    ],
    options: [
      "cool",
      "whyMove",
    ],
  },

  cool: {
    messages: [
      [ME, "cool"],
      [ZACK, "do you miss la?"],
      [ME, "oh yeah... the vibe"],
      [ZACK, "the beaches?"],
      [ME, "that too"],
    ],
    options: [
      "whyMove",
    ],
  },

  whyMove: {
    messages: [
      [ME, "why did you move here?"],
      [ZACK, "for work"],
      [ZACK, "all the tech jobs are here, you know"],
      [ME, "tell me about it"],
      [ZACK, "do you work in tech?"],
    ],
    options: [
      "canTalkTomorrow",
      "yeaInHr",
    ],
  },

  canTalkTomorrow: {
    messages: [
      [ME, "its getting late. we can talk tmrw. bye!"],
      [ZACK, "good nite"],
    ],
    options: [],
    result: NO_DATE,
  },

  yeaInHr: {
    messages: [
      [ME, "yeah in hr"],
      [ME, "but i'm not really into recruiting"],
      [ME, "trying to find a way out"],
      [ZACK, "what do you want to do? "],
      [ME, "im not entirely sure. maybe ill move to a diff country."],
      [ZACK, "where?"],
    ],
    options: [
      "asia",
      "canada",
    ],
  },

  canada: {
    messages: [
      [ME, "canada"],
      [ZACK, "lol we should all just move to canada"],
      [ME, "haha"],
      [ME, "gonna sleep now. good nite!"],
    ],
    options: [
      "goodNiteNoDate",
    ],
  },

  asia: {
    messages: [
      [ME, "asia"],
      [ME, "it would be hard tho since i don't know other languages"],
      [ZACK, "u could always learn"],
      [ZACK, "i learned some japanese from anime"],

    ],
    options: [
      "mustWatchLots",
      "ohAnimeDotDotDot",
    ],
  },

  mustWatchLots: {
    messages: [
      [ME, "you must watch a lot of anime! "],
      [ZACK, "haha yeah... do you watch?"],
      [ME, "i do! mostly old school ones... like naruto"],
      [ME, "my friends keep saying to watch boku no hero academia"],
      [ME, "but haven't gotten around to it :o"],
      [ZACK, "that anime is hella good"],
      [ME, "recommend?"],
      [ZACK, "hell yeah"],
    ],
    options: [
      "iWillWatch",
      "letsWatchTogether",
    ],
  },

  iWillWatch: {
    messages: [
      [ME, "i will watch :)"],
      [ZACK, "yeah same"],
      [ME, "haha! cool~"],
      [ME, "well, it's my bedtime now"],
      [ME, "talk to you later"],
      [ZACK, "good nite"],
    ],
    options: [],
    result: DATE,
  },

  letsWatchTogether: {
    messages: [
      [ME, "let's watch together"],
      [ZACK, "haha maybe - text me?"],
      [ME, "ok!"],
    ],
    options: [],
    result: DATE,
  },

  ohAnimeDotDotDot: {
    messages: [
      [ME, "oh... anime?"],
      [ZACK, "u must not be a fan haha"],
      [ME, "i watched in like, middle school. high school."],
      [ZACK, "haha"],
      [ME, "naruto? sailor moon?"],
      [ZACK, "oh haha i didnt watch those"],
      [ZACK, "more like, my hero academia"],
      [ME, "oh, is that a new one?"],
      [ME, "im old school"],
      [ZACK, "yeah same"],
      [ME, "haha! cool~"],
      [ME, "well, it's my bedtime now"],
      [ME, "talk to you later"],
      [ZACK, "good nite"],
    ],
    options: [],
    result: DATE,
  },

  // ending
  gottaGoBye: {
    messages: [
      [ME, "i gotta go sleep now - bye"],
      [ZACK, "good nite"],
    ],
    options: [],
    result: NO_DATE,
  },
}
