const chaptersObj = {

     chapter0: {
          subtitle: "start",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img: "chapter5.png",
        options: [
             {
               text: "Turn around to see the pretty flames!!",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
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
               text: "";
               action: ;
             },
             {
               text: ;
               action: ;
             },
             {
               text: ;
               action: ;
             }
        ]
   },
};


let chapitre = chaptersObj;

function goToChapter(chapterName){
    console.log(`${chapitre}`);
};