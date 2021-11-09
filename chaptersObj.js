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
        action: 'goToChapter("chapter0")',
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
        action: 'goTochapter("chapter0")',
      },
      {
        text: "Stare in the hole...",
        action: 'goTochapter("chapter0")',
      },
      {
        text: "Ignore the hole",
        action: 'goTochapter("chapter3")',
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
        action: 'goTochapter("chapter4")',
      },
      {
        text: "Nah...",
        action: 'goTochapter("chapter4")',
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
        action: 'goTochapter("chapter0")',
      },
      {
        text: "leave...the cake",
        action: 'goTochapter("chapter5")',
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
        action: 'goTochapter("chapter0")',
      },
      {
        text: "Ignore,ignore,ignore...",
        action: 'goTochapter("chapter6")',
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
        action: 'goTochapter("chapter7")',
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
        action: 'goTochapter("chapter0")',
      },
      {
        text: "Put on the water school hat! There even a fish in it!",
        action: 'goTochapter("chapter0")',
      },
      {
        text: "Put on the...plant?...school hat!",
        action: 'goTochapter("chapter0")',
      },
      {
        text: "Put on the...evil school hat?",
        action: 'goTochapter("chapter8")',
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
        action: 'goTochapter("chapter9")',
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
        action: 'goTochapter("chapter101")',
      },
      {
        text: "Hug",
        action: "",
      },
      {
        text: "kill",
        action: 'goTochapter("chapter103")',
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
        action: 'goTochapter("chapter0")',
      },
    ],
  },

  chapter102: {
    subtitle: "Of course?",
    text: "Really? We're going for this? Fine...Have fun pretending you're honest",
    options: [
      {
        text: "Restart?",
        action: 'goTochapter("chapter0")',
        
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
        action: 'goTochapter("chapter0")',
      },
    ],
  },
};

let bagTaken = false;

function isbagTaken() {
  bagTaken = true;
}

function whenbagTaken() {
  if (bagTaken == true) {
    goToChapter("chapter103");
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

  const ShowVideo = document.querySelector(".image");

//code pour letape 3 du 4.1
  if (chapitre.img != undefined) {ShowImg.innerHTML = `<img src="assets/${chapitre.img}">`} else if (chapitre.video != undefined){ShowVideo.innerHTML = `<video width="1000" height="1000" src="assets/${chapitre.video}">`};

 // ShowVideo.innerHTML = `<video width="1000" height="1000" src="assets/${chapitre.video}">`;


console.log(chapitre.video);

  const ShowOptions = document.querySelector(".options");
  let buttonsCode = "";
  chapitre.options.forEach(function (option) {
    buttonsCode += `<button onclick='${option.action}''>${option.text}</button>`;
  });
  ShowOptions.innerHTML = buttonsCode;
}

goToChapter("chapter0");
