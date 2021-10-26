const chaptersObj = {
  chapter0: {
    subtitle: "start",
    text: "You're a wizard and today is your first schoolday! Shenaningans better not happen!",
    img: "BPXTPdU.png",
    options: [
      {
        text: "Begin",
        action: 'goToChapter("chapter1")'
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
        action: 'goToChapter("chapter2")',
      },
      { 
           text: "Sleep more", 
           action: 'goToChapter("chapter0")' 
          }
    ],
  },

  chapter2: {
    subtitle: "funny_whole_hole",
    text: "Hey look! There a funny looking hole...of void? Who knows!",
    img: "chapter2.png",
    options: [
      {
        text: "Jump in the hole!",
        action: 'goToChapter("chapter0")'
      },
      {
        text: "Stare in the hole...",
        action: 'goToChapter("chapter0")'
      },
      {
        text: "Ignore the hole",
        action: 'goToChapter("chapter3")'
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
        action: 'goToChapter("chapter4")'
      },
      {
        text: "Nah...",
        action: 'goToChapter("chapter4")'
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
        action: 'goToChapter("chapter0")'
      },
      {
        text: "leave...the cake",
        action: 'goToChapter("chapter5")'
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
        action: 'goToChapter("chapter0")'
      },
      {
        text: "Ignore,ignore,ignore...",
        action: 'goToChapter("chapter6")'
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
        action: 'goToChapter("chapter7")'
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
        action: 'goToChapter("chapter0")'
      },
      {
        text: "Put on the water school hat! There even a fish in it!",
        action: 'goToChapter("chapter0")'
      },
      {
        text: "Put on the...plant?...school hat!",
        action: 'goToChapter("chapter0")'
      },
      {
        text: "Put on the...evil school hat?",
        action: 'goToChapter("chapter8")'
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
        action: 'goToChapter("chapter9")'
      }
    ]
  },

  chapter9: {
    subtitle: "what_you_really_were",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    img: "chapter9.png",
    options: [
      {
        text: "Ignore the...hug",
        action: ""
      },
      {
        text: "Hug",
        action: ""
      },
      {
        text: "kill",
        action: ""
      }
    ]
  }
};

let bagTaken = false;

function whenbagTaken() {
  if (bagTaken == true) {
    goToChapter(chapitre.options.text["kill"]);
  }
}

function goToChapter(chapterName) {
  let chapitre = chaptersObj[chapterName];

  const ShowTitre = document.querySelector(".title");
  ShowTitre.innerHTML = chapitre.subtitle;

  const ShowSummary = document.querySelector(".summary");
  ShowSummary.innerHTML = chapitre.text;

  const ShowImg = document.querySelector(".image");
  ShowImg.innerHTML = `<img src="assets/${chapitre.img}">`;

  const ShowOptions = document.querySelector(".options");
  let buttonsCode = "";
  chapitre.options.forEach(function (option) {
     buttonsCode += `<button onclick='${option.action}''>${option.text}</button>`;
  });
  ShowOptions.innerHTML = buttonsCode;
}

goToChapter('chapter0');
