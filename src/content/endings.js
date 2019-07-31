const constants = require("../lib/constants")

const {
  MONA,
  ZACK,
} = constants.names

const {
  DATE,
  NO_DATE,
} = constants.result

const endings = {
  [MONA]: {
    [DATE]: [
      [`"I met with Mona on a sunny afternoon at her cafe. We sat down and chatted about her writing project.`],
      [`Her writing style was unique. It somehow reminded me of a NY times best-seller I'd read a while ago.`],
      [`I mentioned that to her, as a compliment.`],
      [`However, she got upset, and murmured: "I can never escape from her..."`],
      [`It turned out that her mom was the author of that best-seller. Under her mom's influence, Mona grew up love writing. But having a famous mom was stressing her out in school, as everyone around her couldn't help compare her to her mom.`],
      [`As a creative writing major in college, Mona was hit by those kinds of comparison more and more often. Mona started to fear that she could never be as good as her mom.`],
      [`The voices inside of her, and the voices around her, were driving Mona crazy.`],
      [`Mona gave up, and decided to take a break from college.`],
      [`She wanted some quiet space, where people don't know about her famous mom, to keep writing.`],
    ],
    [NO_DATE]: [],
  },

  [ZACK]: {
    [DATE]: [
      [`Zack and I had set up time to meet for coffee, in the middle of a work day. I arrived at the cafe a bit early, and watched throngs of people come in and out as I waited. The cafe was in downtown, and the majority of people looked like tech workers.`],
      [`Twenty minutes passed, and no sign of Zack. I began to feel tense. Maybe I'd come to the wrong Blue Bottle? Granted, there were several in the city...`],
      [`"Hi, are you...?" I turned my head at the sound of my name, and looked up.`],
      [`"Hi Zack," I said, extending a hand, though my voice caught in my throat.`],
      [`He... looked like his pictures, but there was something a bit off. `],
      [`"Are you wearing... a uniform?" There was a clear insignia on his collared shirt. It looked a little familiar...`],
      [`I did a double take. "Wait... I've seen that before. A friend's younger sister goes to that same... high school?!"`],
      [`It turned out that Zack was actually not a fellow tech worker, but in fact a high school student. `],
    ],
    [NO_DATE]: [],
  },
}

export default endings
