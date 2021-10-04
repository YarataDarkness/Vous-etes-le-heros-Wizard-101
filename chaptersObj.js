const chaptersObj = {

     chapter0: {
          subtitle: "start",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
          img: "BPXTPdU.png",
          options: []
     },
       
     chapter1: {
        subtitle: "awakening",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img: "chapter1.png",
        options: [{
          text: "Wake Up",
          action:  'goTochapter("funny_whole_hole")'
        },
          {text: "Sleep more",
          action:  "bruh"
          }
     ]
   },
   
   chapter2: {
        subtitle: "funny_whole_hole",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img: "chapter2.png",
        options: []
   },
   
   chapter3: {
        subtitle: "important_stuff",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img: "chapter3.png",
        options: []
   },
   
   chapter4: {
        subtitle: "im_stuffed!",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img: "chapter4.png",
        options: []
   },
   
   chapter5: {
        subtitle: "explo?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img: "chapter5.png",
        options: []
   },
   
   chapter6: {
        subtitle: "sion?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img: "chapter6.png",
        options: []
   },
   
   chapter7: {
        subtitle: "choose_your_hats",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img: "chapter7.png",
        options: []
   },
   
   chapter8: {
        subtitle: "awwwweeeeh??",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img: "chapter8.png",
        options: []
   },
   
   chapter9: {
        subtitle: "what_you_really_were",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        img: "chapter9.png",
        options: []
   },
};


let chapitre = chaptersObj;

function goToChapter(chapterName){
    console.log(`${chapitre}`);
};