(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t){e.exports={screens:{MATCH_SCREEN:"match",PASSAGE_SCREEN:"passage",ENDING_SCREEN:"ending"},shouldDelayMessage:!0,defaultMessageDelay:2e3,messageDelayAfterClick:500,endConversationDelay:5e3,fadeOutDelay:3e3,names:{ME:"me",MONA:"Mona",ZACK:"Zack",ELI:"Eli"},startId:"start",message:{NAME_INDEX:0,TEXT_INDEX:1},result:{DATE:"date",NO_DATE:"noDate"}}},,,function(e,t,o){},,,function(e,t,o){e.exports=o(26)},,,,,,function(e,t,o){},function(e,t){e.exports=[{name:"Zack",age:"24",gender:"Male",occupation:"Entrepreneur",blurb:["Just a chill guy."],lookingFor:"someone who makes me laugh, has a nice smile, not judgmental",hobbies:"dance. Fortnite. Reddit. parties. anime. BTS."},{name:"Mona",age:"22",gender:"Female",occupation:"Barista",blurb:["so I wait for you like a lonely house","till you will see me again and live in me.","Till then my windows ache."],lookingFor:"someone who can share the same dream with me.",hobbies:"walking, drinking, writing"}]},function(e,t,o){var a={"./MonaScript":22,"./ZackScript":23};function n(e){var t=s(e);return o(t)}function s(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=21},function(e,t,o){var a=o(7),n=a.names,s=n.ME,i=n.MONA,r=a.result,l=r.DATE,h=r.NO_DATE;e.exports={start:{messages:[[i,"Hey, nice to meet you!"],[s,"hey mona! nice to meet u as well :)"],[s,"how\u2019s ur day giong?"],[i,"It's been productive!"],[s,"good to hear"],[s,"what are you producing?"],[i,"haha I produce coffee at work ;)"]],options:["coffeeBeans","barista"]},coffeeBeans:{messages:[[s,"...like producing coffee beans??"],[i,"Exactly"],[i,"I live in the forest"],[i,"and I hunt for fun"],[s,"Now youre joking for sure"],[i,"Haha, you caught me."],[i,"I'm just a barista"]],options:["barista"]},barista:{messages:[[s," Yeah I saw you're a barista, right?"],[i,"Yup, been at my barista job the whole day."],[s,"nice! i love coffee"],[i,"Me too. I can't live without it."],[i,"What kind of coffee do you like?"],[s,"hmm I'm not really picky as long as it's coffee haha"],[s,"how bout u?"],[i,"I prefer full city roast most of the time, but when I need ideas, I get Viennese"]],options:["impressive","theBest"]},impressive:{messages:[[s,"whoa, that's impressive"]],options:["canDefSeeBarista"]},theBest:{messages:[[s,"viennese is the best!"],[i,"Oh! Most people don't know Viennesse"],[s,"i just know my coffee :)"]],options:["canDefSeeBarista"]},canDefSeeBarista:{messages:[[s,"can def see the barista now"],[i,"Haha! I'm glad :)"],[s,"when did you start making coffee?"],[i,"I actually started drinking since middle school, haha..."],[i,"I'd make coffee for my mom every morning"],[s,"oh wow!"]],options:["yourMomClose","yourMomBusyALot"]},yourMomClose:{messages:[[s,"are u and ur mom close?"],[i,"Hm, yes and no?"],[i,"A bit of a complicated relationship, like every other"],[i,"I haven't actually talked to her in a few months now"],[s,"oh really?"],[i,"Yeah... you know, family"]],options:["enoughAboutMe"]},yourMomBusyALot:{messages:[[s,"was ur mom rly busy a lot?"],[i,"I guess you could say that"],[i,"It was something I enjoyed doing"],[i,"how it could bring a smile to someone's face!"],[i,"Especially early in the morning"],[i,"So... I guess... that's kinda where I am today!"]],options:["enoughAboutMe"]},enoughAboutMe:{messages:[[i,"But enough about me!"],[i,"What's going on with you?"]],options:["hrTechCompany","careerSwitch"]},hrTechCompany:{messages:[[s,"working in hr at a tech company rn"],[i,"HR! Do you like it?"],[s,"that's arguable..."],[s,"i'm not really into tech in general, i guess"],[i,"Haha, same"],[s,"kinda feels like u have to be in tech to survive here"],[i,"Lol, don't remind me!"],[s,"well i have to go to sleep now. work tmrw"],[s,"good night!"],[i,"Oh okay, good night!"]],options:[],result:h},careerSwitch:{messages:[[s,"im actually trying to do a career switch!"],[i,"Oh really! What are you trying to switch to?"],[s,"im not actually sure! just trying to feel things out"],[s,"just feel like the corporate life isn't for me"],[i,"Oh yeah, I definitely feel that too"],[i,"People ask me if I'm happy as a barista"],[i,"As if they're looking down on me"],[i,"But a part of me *is* happy, you know"],[i,"There are different paths to happiness"],[s,"yeah"],[i,"It's also great inspiration for writing"],[i,"All the different people you meet in a day"]],options:["writeAboutWho","publishBook"]},writeAboutWho:{messages:[[s,"what do u like to write about?"],[i,"I actually like to write about people I know"],[i,"Which some people don't like"],[s,"oh really?"],[i,"Yeah... haha"],[i,"People perceive themselves differently than how others see them"],[i,"I realize..."],[s,"haha, must be fun to be friends with a writer!"],[i,"Sure is! :)"],[s,"maybe you can show me your writing sometime"],[s,"over some coffee? ;)"],[i,"Haha, I can brew you some"],[s,"sounds good!"]],options:[],result:l},publishBook:{messages:[[s,"do u want to publish a book?"],[i,"Haha, maybe.."],[i,"I know someone who published a book"],[i,"And honestly, life as a famous writer"],[i,"Isn't really... what I'd want for myself"],[s,"oh, never thought about that"],[i,"We'll see what happens!"],[s,":)"],[i,"Gotta go now - talk to you later?"],[s,"yeah!"]],options:[],result:l}}},function(e,t,o){var a=o(7),n=a.names,s=n.ME,i=n.ZACK,r=a.result,l=r.DATE,h=r.NO_DATE;e.exports={start:{messages:[[i,"heyy"],[s,"hi :) "],[s,"hows it going "],[i,"good. had dance practice today. new set was fun"],[i,"u?"]],options:["matchedWithYou","doYouLikeDancing"]},matchedWithYou:{messages:[[s,"great cuz i matched w u"],[i,";)"],[s,"do u like dancing?"]],options:["dreamIsGoPro"]},doYouLikeDancing:{messages:[[s,"nice! do u like dancing?"]],options:["dreamIsGoPro"]},dreamIsGoPro:{messages:[[i,"yeah the dream is to go pro"]],options:["thatsSoCool","butEngineer"]},thatsSoCool:{messages:[[s,"that's so cool!"],[i,"are u into dancing?"],[s,"yeah!"],[i,"what kind?"]],options:["hipHop","contempoary"]},butEngineer:{messages:[[s,"wait, but you're an engineer?"],[i,"oh yeah haha..."],[s,"i get it, engineering isn't your passion"]],options:["gottaGoBye"]},contempoary:{messages:[[s,"contemporary"],[i,"oh i never got into contemp"],[i,"but that cool"],[s,"fun~"],[i,"haha"]],options:["whatElseDoYouLike"]},hipHop:{messages:[[s,"hip-hop"],[s,"yea, im in a crew called fsx"],[i,"o never heard of it"],[s,"we're small & new. broke off from afx"],[i,"what... im in AFX"],[i,"when did a new group start?"],[s,"oh... it was rly low key"],[i,"hm i guess. i do hip-hop."],[i,"but fuck there are some dancers on AFX who are monsters"],[s,"talking about yourself?"],[i,"lol i guess"],[i,"if you were in afx, we must have mutual friends?"],[s,"oh i wasn't in afx... i joined super recently. after the split."],[i,"still wouldn't be surprised if we had mutual friends"]],options:["movedRecently"]},whatElseDoYouLike:{messages:[[i,"u didn't say much on ur profile so i was curious about u"],[i,"what else do u like to do?"]],options:["intoGardening","exporingCity"]},exporingCity:{messages:[[s,"just exploring the city outside of work"],[i,"that's fun"],[s,"yeah i'm new to the city, so still getting used to it"]],options:["whereDidYouMoveFrom"]},intoGardening:{messages:[[s,"i've been really into gardening recently"],[i,"that's fun"],[s,"yeah have you tried before?"],[i,"no, i dont think i have the patience for that haha"],[i,"but it seems cool"],[s,"yeah it's fun!"]],options:["gottaGoBye"]},movedRecently:{messages:[[s,"oh i moved here very recently"],[s,"dont know ppl in the bay!"]],options:["whereDidYouMoveFrom"]},whereDidYouMoveFrom:{messages:[[i,"oh really"],[i,"where did you move from?"],[s,"LA"],[i,"oh yeah i moved from la a few years ago too"]],options:["cool","whyMove"]},cool:{messages:[[s,"cool"],[i,"do you miss la?"],[s,"oh yeah... the vibe"],[i,"the beaches?"],[s,"that too"]],options:["whyMove"]},whyMove:{messages:[[s,"why did you move here?"],[i,"for work"],[i,"all the tech jobs are here, you know"],[s,"tell me about it"],[i,"do you work in tech?"]],options:["canTalkTomorrow","yeaInHr"]},canTalkTomorrow:{messages:[[s,"its getting late. we can talk tmrw. bye!"],[i,"good nite"]],options:[],result:h},yeaInHr:{messages:[[s,"yeah in hr"],[s,"but i'm not really into recruiting"],[s,"trying to find a way out"],[i,"what do you want to do? "],[s,"im not entirely sure. maybe ill move to a diff country."],[i,"where?"]],options:["asia","canada"]},canada:{messages:[[s,"canada"],[i,"lol we should all just move to canada"],[s,"haha"],[s,"gonna sleep now. good nite!"]],options:["goodNiteNoDate"]},asia:{messages:[[s,"asia"],[s,"it would be hard tho since i don't know other languages"],[i,"u could always learn"],[i,"i learned some japanese from anime"]],options:["mustWatchLots","ohAnimeDotDotDot"]},mustWatchLots:{messages:[[s,"you must watch a lot of anime! "],[i,"haha yeah... do you watch?"],[s,"i do! mostly old school ones... like naruto"],[s,"my friends keep saying to watch boku no hero academia"],[s,"but haven't gotten around to it :o"],[i,"that anime is hella good"],[s,"recommend?"],[i,"hell yeah"]],options:["iWillWatch","letsWatchTogether"]},iWillWatch:{messages:[[s,"i will watch :)"],[i,"yeah same"],[s,"haha! cool~"],[s,"well, it's my bedtime now"],[s,"talk to you later"],[i,"good nite"]],options:[],result:l},letsWatchTogether:{messages:[[s,"let's watch together"],[i,"haha maybe - text me?"],[s,"ok!"]],options:[],result:l},ohAnimeDotDotDot:{messages:[[s,"oh... anime?"],[i,"u must not be a fan haha"],[s,"i watched in like, middle school. high school."],[i,"haha"],[s,"naruto? sailor moon?"],[i,"oh haha i didnt watch those"],[i,"more like, my hero academia"],[s,"oh, is that a new one?"],[s,"im old school"],[i,"yeah same"],[s,"haha! cool~"],[s,"well, it's my bedtime now"],[s,"talk to you later"],[i,"good nite"]],options:[],result:l},gottaGoBye:{messages:[[s,"i gotta go sleep now - bye"],[i,"good nite"]],options:[],result:h}}},function(e,t,o){"use strict";o.r(t),function(e){var t,a,n,s=o(8),i=o(7),r=i.names,l=r.MONA,h=r.ZACK,c=i.result,u=c.DATE,m=c.NO_DATE;e.exports=(n={},Object(s.a)(n,l,(t={},Object(s.a)(t,u,[['"I met with Mona on a sunny afternoon at her cafe. We sat down and chatted about her writing project.'],["Her writing style was unique. It somehow reminded me of a NY times best-seller I'd read a while ago."],["I mentioned that to her, as a compliment."],['However, she got upset, and murmured: "I can never escape from her..."'],["It turned out that her mom was the author of that best-seller. Under her mom's influence, Mona grew up love writing. But having a famous mom was stressing her out in school, as everyone around her couldn't help compare her to her mom."],["As a creative writing major in college, Mona was hit by those kinds of comparison more and more often. Mona started to fear that she could never be as good as her mom."],["The voices inside of her, and the voices around her, were driving Mona crazy."],["Mona gave up, and decided to take a break from college."],["She wanted some quiet space, where people don't know about her famous mom, to keep writing."]]),Object(s.a)(t,m,[]),t)),Object(s.a)(n,h,(a={},Object(s.a)(a,u,[["Zack and I had set up time to meet for coffee, in the middle of a work day. I arrived at the cafe a bit early, and watched throngs of people come in and out as I waited. The cafe was in downtown, and the majority of people looked like tech workers."],["Twenty minutes passed, and no sign of Zack. I began to feel tense. Maybe I'd come to the wrong Blue Bottle? Granted, there were several in the city..."],['"Hi, are you...?" I turned my head at the sound of my name, and looked up.'],['"Hi Zack," I said, extending a hand, though my voice caught in my throat.'],["He... looked like his pictures, but there was something a bit off. "],['"Are you wearing... a uniform?" There was a clear insignia on his collared shirt. It looked a little familiar...'],["I did a double take. \"Wait... I've seen that before. A friend's younger sister goes to that same... high school?!\""],["It turned out that Zack was actually not a fellow tech worker, but in fact a high school student. "]]),Object(s.a)(a,m,[]),a)),n)}.call(this,o(25)(e))},,function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),s=o(12),i=o.n(s),r=(o(19),o(9)),l=o(1),h=o(2),c=o(4),u=o(3),m=o(6),d=o(5),g=(o(10),o(7)),p=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"showChatHistory",value:function(e){console.log("no-op for now")}},{key:"getMeetWithPeopleButtons",value:function(){var e=this;return n.a.createElement("div",{className:"meetWith"},this.props.profiles.map(function(t,o){return n.a.createElement(n.a.Fragment,{key:o},n.a.createElement("button",{className:"button",onClick:function(o){return e.props.meetWithPerson(t)}},"Meet with ",t.name))}))}},{key:"getSeeMyMatchButton",value:function(){var e=this;return n.a.createElement("button",{className:"match button",onClick:function(t){return e.props.showScreen(g.screens.PASSAGE_SCREEN)}},"See my match for today")}},{key:"render",value:function(){var e=this.props.chatHistory;return n.a.createElement(n.a.Fragment,null,e.length<this.props.profiles.length?this.getSeeMyMatchButton():this.getMeetWithPeopleButtons(),e.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("hr",{className:"match underline"}),n.a.createElement("div",{className:"chatHistory"},n.a.createElement("b",null,"Your recent match"),e.map(function(e,t){return n.a.createElement("div",{className:"option",key:t},"> ",e.profile.name)}))))}}]),t}(n.a.Component),y=o(7),f=function(e){function t(e){var o;return Object(l.a)(this,t),(o=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={displayedMessages:[]},o.props.isDisplaying?o.displayNextMessage(o.props.firstMessageDelay):o.props.doneDisplaying(),o}return Object(d.a)(t,e),Object(h.a)(t,[{key:"displayNextMessage",value:function(e){var t=this,o=this.state.displayedMessages,a=this.props.messages;if(o>=a)this.props.doneDisplaying();else{var n=e||y.defaultMessageDelay;setTimeout(function(){var e=a[o.length];t.setState({displayedMessages:[].concat(Object(r.a)(o),[e])}),t.displayNextMessage()},n)}}},{key:"componentDidMount",value:function(){this.props.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.props.scrollToBottom()}},{key:"render",value:function(){var e=this.props.isDisplaying?this.state.displayedMessages:this.props.messages;return n.a.createElement("div",null,e.length>0&&e.map(function(e,t){var o=e[0]===y.names.ME?"mine":"theirs",a=e[1];return n.a.createElement("div",{className:"message ".concat(o),key:t},a)}),n.a.createElement("br",null))}}]),t}(n.a.PureComponent),w=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"onOptionClick",value:function(e){this.props.onOptionClick(e)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"mine"},this.props.options.map(function(t,o){return n.a.createElement("button",{className:"option message",key:o,onClick:function(o){return e.onOptionClick(t.id)}},"> ",n.a.createElement("span",{className:"optionText"},t.message))}))}}]),t}(n.a.Component),v=o(7),b=function(e){function t(e){var o;return Object(l.a)(this,t),(o=Object(c.a)(this,Object(u.a)(t).call(this,e))).onOptionClick=o.onOptionClick.bind(Object(m.a)(o)),o.doneDisplaying=o.doneDisplaying.bind(Object(m.a)(o)),o.scrollToBottom=o.scrollToBottom.bind(Object(m.a)(o)),o.state={dialogueIds:[v.startId],options:[],firstMessageDelay:v.messageDelayAfterClick},o}return Object(d.a)(t,e),Object(h.a)(t,[{key:"doneDisplaying",value:function(){var e=this.getCurrentDialogue().options;e.length>1?this.showOptions(e):1===e.length?this.displayNewDialogue(e[0]):this.props.endConversation(this.state.dialogueIds)}},{key:"onOptionClick",value:function(e){this.displayNewDialogue(e,v.messageDelayAfterClick)}},{key:"displayNewDialogue",value:function(e,t){this.setState({dialogueIds:[].concat(Object(r.a)(this.state.dialogueIds),[e]),options:[],firstMessageDelay:t})}},{key:"getCurrentDialogue",value:function(){var e=this.state.dialogueIds,t=e[e.length-1];return this.props.script[t]}},{key:"getDialogue",value:function(e){return this.props.script[e]}},{key:"showOptions",value:function(e){var t=this;setTimeout(function(){var o=e.map(function(e){return{id:e,message:t.getDialogue(e).messages[0][v.message.TEXT_INDEX]}});t.setState({options:o})},v.messageOptionDelay)}},{key:"scrollToBottom",value:function(){this.messagesEnd&&this.messagesEnd.scrollIntoView({behavior:"smooth"})}},{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this,t=this.state.dialogueIds;return n.a.createElement("div",{className:"conversation"},t.map(function(o,a){var s=e.getDialogue(o).messages;return n.a.createElement(f,{messages:s,isDisplaying:v.shouldDelayMessage&&t.length===a+1,firstMessageDelay:e.state.firstMessageDelay,doneDisplaying:e.doneDisplaying,scrollToBottom:e.scrollToBottom,key:a})}),this.state.options.length>0&&n.a.createElement(w,{options:this.state.options,onOptionClick:this.onOptionClick}),n.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}}))}}]),t}(n.a.Component),k=function(e){function t(e){var o;return Object(l.a)(this,t),(o=Object(c.a)(this,Object(u.a)(t).call(this,e))).showConversation=o.showConversation.bind(Object(m.a)(o)),o.state={shouldShowChatButton:!0},o}return Object(d.a)(t,e),Object(h.a)(t,[{key:"showConversation",value:function(){this.setState({shouldShowChatButton:!1}),this.props.showConversation()}},{key:"render",value:function(){var e=this,t=this.props.profile,o="Chat with ".concat(t.name);return n.a.createElement("div",{className:"profile"},n.a.createElement("div",{className:"profileName profileBottomSmall"},t.name),n.a.createElement("div",{className:"profileBottomLarge"},t.gender," \xb7 ",t.age," \xb7 ",t.occupation),n.a.createElement("div",{className:"profileBlurb profileBottomLarge"},t.blurb.map(function(e,o){var a=0===o?'"':"",s=o===t.blurb.length-1?'"':"";return n.a.createElement("div",{key:o},a,e,s)})),n.a.createElement("div",null,"Looking for"),n.a.createElement("hr",{className:"underline"}),n.a.createElement("div",{className:"profileBottomLarge"},t.lookingFor),n.a.createElement("div",null,"Hobbies"),n.a.createElement("hr",{className:"underline"}),n.a.createElement("div",{className:"profileBottomLarge"},t.hobbies),n.a.createElement("button",{className:this.state.shouldShowChatButton?"button":"hidden",onClick:function(t){return e.showConversation()}},o))}}]),t}(n.a.Component),E=o(7),C=function(e){function t(e){var o;return Object(l.a)(this,t),(o=Object(c.a)(this,Object(u.a)(t).call(this,e))).showConversation=o.showConversation.bind(Object(m.a)(o)),o.state={shouldShowConversation:!1,transitionCSS:""},o}return Object(d.a)(t,e),Object(h.a)(t,[{key:"showConversation",value:function(){this.setState({shouldShowConversation:!0})}},{key:"endConversation",value:function(e){var t=this;setTimeout(function(){t.setState({transitionCSS:"fadeOut"}),setTimeout(function(){t.props.endConversation({dialogueIds:e,profile:t.props.profile})},E.endConversationDelay)},E.fadeOutDelay)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"conversationContainer ".concat(this.state.transitionCSS)},n.a.createElement(k,{profile:this.props.profile,showConversation:this.showConversation}),this.state.shouldShowConversation&&n.a.createElement(b,{script:this.props.script,endConversation:function(t){return e.endConversation(t)}}))}}]),t}(n.a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"endingScreen"},this.props.texts.map(function(e,t){return n.a.createElement("div",{className:"paragraph",key:t},e)}),n.a.createElement("button",{className:"button",onClick:function(t){return e.props.goBack()}},"Go back"))}}]),t}(n.a.Component),S=o(7),D=S.screens,j=S.result,I=o(20),N=function(e){function t(e){var o;return Object(l.a)(this,t),(o=Object(c.a)(this,Object(u.a)(t).call(this,e))).showScreen=o.showScreen.bind(Object(m.a)(o)),o.state={screen:D.MATCH_SCREEN,chatHistory:[],endingScreenProfile:null},o}return Object(d.a)(t,e),Object(h.a)(t,[{key:"getScript",value:function(e){return o(21)("./".concat(e,"Script"))}},{key:"showScreen",value:function(e){this.setState({screen:e})}},{key:"getMatchScreen",value:function(){var e=this;return n.a.createElement(p,{chatHistory:this.state.chatHistory,showScreen:this.showScreen,profiles:I,meetWithPerson:function(t){return e.meetWithPerson(t)}})}},{key:"getResult",value:function(e){var t=this.state.chatHistory.filter(function(t){return t.profile.name===e.name})[0].dialogueIds,o=t[t.length-1];return this.getScript(e.name)[o].result}},{key:"meetWithPerson",value:function(e){this.setState({endingScreenProfile:e,screen:D.ENDING_SCREEN})}},{key:"goBack",value:function(){this.showScreen(D.MATCH_SCREEN)}},{key:"getEndingTexts",value:function(e){return this.getResult(e)===j.NO_DATE?["You asked ".concat(e.name," out a few times, but there was no response."),"You are ghosted."]:o(24)[e.name][j.DATE]}},{key:"getEndingScreen",value:function(){var e=this;return n.a.createElement(O,{texts:this.getEndingTexts(this.state.endingScreenProfile),goBack:function(){return e.goBack()}})}},{key:"getPassageScreen",value:function(){var e=this,t=this.state.chatHistory.length;if(t>=I.length)throw new Error("Can't show new passage screen. No more profile");var o=I[t];return n.a.createElement(C,{script:this.getScript(o.name),profile:o,endConversation:function(t){return e.endConversation(t)}})}},{key:"endConversation",value:function(e){this.setState({screen:D.MATCH_SCREEN,chatHistory:[].concat(Object(r.a)(this.state.chatHistory),[e])})}},{key:"getScreenComponent",value:function(){switch(this.state.screen){case D.MATCH_SCREEN:return this.getMatchScreen();case D.PASSAGE_SCREEN:return this.getPassageScreen();case D.ENDING_SCREEN:return this.getEndingScreen();default:throw new Error("No screen defined for ".concat(this.state.screen))}}},{key:"render",value:function(){return n.a.createElement("div",{className:"gameContainer"},this.getScreenComponent())}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,1,2]]]);
//# sourceMappingURL=main.f9daaebf.chunk.js.map