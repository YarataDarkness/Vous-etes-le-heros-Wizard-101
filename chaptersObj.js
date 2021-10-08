
const chaptersObj = {

     chapter0: {
          subtitle: "start",
          text: "You're a wizard and today is your first schoolday! Shenaningans better not happen!",
          img: "BPXTPdU.png",
          options: [
               {
            text: "Begin",
            action: 'goTochapter("awakening")'
          }
     ]
     },
       
     chapter1: {
        subtitle: "awakening",
        text: "WAKE UP! We don't want to be late for school now do we?",
        img: "chapter1.png",
        options: [
             {
          text: "Wake Up",
          action:  'goTochapter("funny_whole_hole")'
        },
          {text: "Sleep more",
          action: 'goTochapter("start")'
          }
     ]
   },
   
   chapter2: {
        subtitle: "funny_whole_hole",
        text: "Hey look! There a funny looking hole...of void? Who knows!",
        img: "chapter2.png",
        options: [
             {
               text: "Jump in the hole!",
               action: 'goTochapter("start")'
             },
             {
               text: "Stare in the hole...",
               action: 'goTochapter("start")'
             },
             {
               text: "Ignore the hole",
               action: 'goTochapter("important_stuff")'
             }
        ]
   },
   
   chapter3: {
        subtitle: "important_stuff",
        text: "Don't forget to bring your awesome totally not weird demonic red bag!",
        img: "chapter3.png",
        options: [
             {
               text: "Take the red Bag",
               action: 'goTochapter("im_stuffed!")'
              },
             {
               text: "Nah...",
               action: 'goTochapter("im_stuffed!")'
              }
     ]
   },
   
   chapter4: {
        subtitle: "im_stuffed!",
        text: "Alright! No we can go...outside....and there this...delicious looking cake...with funny looking...nevermind....We sould leave, right?",
        img: "chapter4.png",
        options: [
          {
               text: "Stay a bit...for the cake!",
               action: 'goTochapter("start")'
          },
          {
               text: "leave...the cake",
               action: 'goTochapter("explo?")'
          }
        ]
   },
   
   chapter5: {
        subtitle: "explo?",
        text: "HU...Did yar hear that? I think it was a BIG explosion...",
        img: "chapter5.png",
        options: [
             {
               text: "Turn around to see the pretty flames then!!",
               action: 'goTochapter("start")'
             },
             {
               text: "Ignore,ignore,ignore...",
               action: 'goTochapter("sion?")'
             }
        ]
   },
   
   chapter6: {
        subtitle: "sion?",
        text: "Oh my! It your rival! Looking at you like you were supposed to be dead the whole time! What a creep! A weirdo! An absolute waste of air!",
        img: "chapter6.png",
        options: [
             {
               text: "Just walk away...",
               action: 'goTochapter("choose_your_hats")'
             }
        ]
   },
   
   chapter7: {
        subtitle: "choose_your_hats",
        text: "OH BOY! and girl! Since this is your first day in this official wizard school(very real!) you gotta pick your element hat!",
        img: "chapter7.png",
        options: [
             {
               text: "Put on the fire school hat!",
               action: 'goTochapter("start")'
             },
             {
               text: "Put on the water school hat! There even a fish in it!",
               action: 'goTochapter("start")'
             },
             {
               text: "Put on the...plant?...school hat!",
               action: 'goTochapter("start")'
             },
             {
               text: "Put on the...evil school hat?",
               action: 'goTochapter("awwwweeeeh??")'
             }
        ]
   },
   
   chapter8: {
        subtitle: "awwwweeeeh??",
        text: "Wow...heum...that....hum...well your rival is looking at you...blushing?",
        img: "chapter8.png",
        options: [
             {
               text: "Well...that was unexpceted",
               action: 'goTochapter("what_you_really_were")'
             }
        ]
   },
   
   chapter9: {
        subtitle: "what_you_really_were",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img: "chapter9.png",
        options: [
             {
               text: "Ignore the...hug"

             },
             {
               text: "Hug"

             },
             {
               text: "kill",
             }
        ]
   },
};


let chapitre = chaptersObj;

function goToChapter(chapterName){

const ShowTitre = document.querySelector('.title');

ShowTitre.innerHTML = "WIZARD 101";

const ShowSummary = document.querySelector('.summary');

ShowSummary.innerHTML = "WIZARD 101";

const ShowOptions = document.querySelector('div .options');

ShowOptions.innerHTML = "<button>Begin!</button>";

console.log(chapitre);

};