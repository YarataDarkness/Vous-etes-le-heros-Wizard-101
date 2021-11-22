
const chaptersObj = {
  chapter0: {
    subtitle: "start",
    text: "You're a wizard and today is your first schoolday! Shenaningans better not happen!",
    img: "BPXTPdU.png",
    options: [
      {
        text: "Begin",
        action: 'goToChapter("chapter1")',
      },
    ],
  },

  chapter1: {
    subtitle: "awakening",
    text: "WAKE UP! We don't want to be late for school now do we?",
    img: "chapter1.png",
    options: [
      {
        text: "Wake Up",
        action: 'goToChapter("chapter2")',
      },
      {
        text: "Sleep more",
        action: 'isrestart()',
      },
    ],
  },

  chapter2: {
    subtitle: "funny_whole_hole",
    text: "Hey look! There a funny looking hole...of void? Who knows!",
    img: "chapter2.png",
    options: [
      {
        text: "Jump in the hole!",
        action: 'isrestart()',
      },
      {
        text: "Stare in the hole...",
        action: 'isrestart()',
      },
      {
        text: "Ignore the hole",
        action: 'goToChapter("chapter3")',
      },
    ],
  },

  chapter3: {
    subtitle: "important_stuff",
    text: "Don't forget to bring your awesome totally not weird demonic red bag!",
    img: "chapter3.png",
    options: [
      {
        text: "Take the red Bag",
        action: 'isbagTaken()',
      },
      {
        text: "Nah...",
        action: 'notbagTaken()',
      },
    ],
  },

  chapter4: {
    subtitle: "im_stuffed!",
    text: "Alright! No we can go...outside....and there this...delicious looking cake...with funny looking...nevermind....We sould leave, right?",
    img: "chapter4.png",
    options: [
      {
        text: "Stay a bit...for the cake!",
        action: 'isrestart()',
      },
      {
        text: "leave...the cake",
        action: 'goToChapter("chapter5")',
      },
    ],
  },

  chapter5: {
    subtitle: "explo?",
    text: "HU...Did yar hear that? I think it was a BIG explosion...",
    img: "chapter5.png",
    options: [
      {
        text: "Turn around to see the pretty flames then!!",
        action: 'isrestart()',
      },
      {
        text: "Ignore,ignore,ignore...",
        action: 'goToChapter("chapter6")',
      },
    ],
  },

  chapter6: {
    subtitle: "sion?",
    text: "Oh my! It your rival! Looking at you like you were supposed to be dead the whole time! What a creep! A weirdo! An absolute waste of air!",
    img: "chapter6.png",
    options: [
      {
        text: "Just walk away...",
        action: 'goToChapter("chapter7")',
      },
    ],
  },

  chapter7: {
    subtitle: "choose_your_hats",
    text: "OH BOY! and girl! Since this is your first day in this official wizard school(very real!) you gotta pick your element hat!",
    img: "chapter7.png",
    options: [
      {
        text: "Put on the fire school hat!",
        action: 'isrestart()',
      },
      {
        text: "Put on the water school hat! There even a fish in it!",
        action: 'isrestart()',
      },
      {
        text: "Put on the...plant?...school hat!",
        action: 'isrestart()',
      },
      {
        text: "Put on the...evil school hat?",
        action: 'goToChapter("chapter8")',
      },
    ],
  },

  chapter8: {
    subtitle: "awwwweeeeh??",
    text: "Wow...heum...that....hum...well your rival is looking at you...blushing?",
    img: "chapter8.png",
    options: [
      {
        text: "Well...that was unexpceted",
        action: 'goToChapter("chapter9")',
      },
    ],
  },

  chapter9: {
    subtitle: "what_you_really_were",
    text: "So, they're opening their arms to you...what now?",
    img: "chapter9.png",
    options: [
      {
        text: "Ignore the...hug",
        action: 'goToChapter("chapter101")',
      },
      {
        text: "Hug",
        action: "",
      },
      {
        text: "kill",
        action: 'whenbagTaken()',
      },
    ],
  },

  chapter101: {
    subtitle: "Of course...",
    text: "I mean yeah...a hug from somoene who tried to kill you is kind of weird...",
    video: "video101.mp4",
    options: [
      {
        text: "Restart?",
        action: 'isrestart()',
      },
    ],
  },

  chapter102: {
    subtitle: "Of course?",
    text: "Really? We're going for this? Fine...Have fun pretending you're honest",
    options: [
      {
        text: "Restart?",
        action: 'isrestart()',
        
      },
    ],
  },


  chapter103: {
    subtitle: "Of course!",
    text: "Great job! You've got a medal for your evil deed! Why would you want to be friend with that thing anyway?",
    video: "video103.mp4",
    options: [
      {
        text: "Restart?",
        action: 'isrestart()',
      },
    ],
  },
};

//code pour letape 4 du 4.1
let isaudio = new Audio("assets/swoosh.wav");


function goToChapter(chapterName) {

  let chapitre = chaptersObj[chapterName];
  //code pour letape 1 du 4.2
  localStorage.setItem("chapitre", chapterName);

  const ShowTitre = document.querySelector(".title");
  ShowTitre.innerHTML = chapitre.subtitle;

  const ShowSummary = document.querySelector(".summary");
  ShowSummary.innerHTML = chapitre.text;

  const ShowImg = document.querySelector(".image");
  ShowImg.innerHTML = `<img src="assets/${chapitre.img}">`;

  const ShowVideo = document.querySelector(".image");

//code pour letape 3 du 4.1

  if (chapitre.img != undefined) {ShowImg.innerHTML = `<img src="assets/${chapitre.img}">`} else if (chapitre.video != undefined){ShowVideo.innerHTML = `<video width="1000" height="1000" src="assets/${chapitre.video}" loop muted autoplay>`};

  const ShowOptions = document.querySelector(".options");
  let buttonsCode = "";
  chapitre.options.forEach(function (option) {
    buttonsCode += `<button onclick='${option.action}''>${option.text}</button>`;
  });
  ShowOptions.innerHTML = buttonsCode;

  isaudio.play();

}

let bagTaken = false;
localStorage.setItem("bagTaken", bagTaken);
//
function isbagTaken() {
  bagTaken = true;
  goToChapter("chapter4");
  localStorage.setItem("bagTaken", bagTaken);
}

function notbagTaken() {
  bagTaken = false;
  goToChapter("chapter4");
  localStorage.setItem("bagTaken", bagTaken);
}

function isbagTaken2() {
  bagTaken = true;
  localStorage.setItem("bagTaken", bagTaken);
}

function notbagTaken2() {
  bagTaken = false;
  localStorage.setItem("bagTaken", bagTaken);
}
 
 //to make chapter 103 accessible
 function whenbagTaken() {
   if (bagTaken = true) {
     goToChapter("chapter103");
   }
 };
//

//the restart default thingy
function isrestart(){
  goToChapter("chapter0");
  bagTaken = false;
}
//it all about the monkey way
 
//code pour letape 2 4.2
const iscurrentchapter = localStorage.getItem("chapitre");

if(iscurrentchapter != undefined){
  goToChapter(iscurrentchapter);
}else if(iscurrentchapter == undefined){
  localStorage.clear("chapitre");
  goToChapter("chapter0");
}else if(iscurrentchapter == chapter0){
  localStorage.clear("chapitre");
  localStorage.clear("bagTaken");
};

//code pour letape 3 4.2
const iscurrentobject = localStorage.getItem("bagTaken");

if(iscurrentobject != undefined){
  isbagTaken2();
}else if(iscurrentobject == undefined){
  notbagTaken2()
  localStorage.clear("bagTaken");
};
