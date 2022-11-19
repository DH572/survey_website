const start_btn = document.getElementById("start");
const start_message = document.getElementById("start_message");
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
let athletic = 0;
let strategic = 0;
let creative = 0;
let relaxing = 0;
let cri_1 = 0;
let cri_2 = 0;
let cri_3 = 0;
let cri_4 = 0;
let x = 0;
var z;
var z_s;
const activities = [
  ["Swimming", "Hiking", "Rock Climbing", "Dancing"],
  ["Chess", "Poker", "Video Games", "Puzzles"],
  ["Painting", "Creative Writing", "Sculpting", "Sewing"],
  ["Reading", "Meditating", "Listening to Music", "Stargazing"],
];
const links = [
  [
    "https://www.britannica.com/sports/swimming-sport",
    "https://www.rei.com/learn/expert-advice/hiking-for-beginners.html",
    "https://www.rei.com/learn/series/intro-to-rock-climbing",
    "https://www.britannica.com/art/dance",
  ],
  [
    "https://www.chess.com/learn-how-to-play-chess",
    "https://easy.poker/how-to-play-poker/",
    "https://www.bhphotovideo.com/explora/computers/features/general-introduction-video-games-medium",
    "https://www.nytimes.com/2020/12/12/at-home/jigsaw-puzzle-guide.html",
  ],
  [
    "https://drawpaintacademy.com/painting-for-beginners/",
    "https://english.duke.edu/courses/introduction-creative-writing#:~:text=Introduction%20to%20Creative%20Writing%20is,poems%2C%20plays%2C%20and%20prose.",
    "https://flippednormals.com/downloads/introduction-to-sculpting/",
    "https://crazylittleprojects.com/sewing-for-beginners-learn-to-sew/",
  ],
  [
    "https://www.hmhco.com/programs/into-reading",
    "https://www.mindful.org/how-to-meditate/",
    "https://en.wikiversity.org/wiki/Introduction_to_music",
    "https://skyandtelescope.org/astronomy-resources/stargazing-basics/",
  ],
];
const q_a = [
  [
    "At the end of the day how would you like to feel?",
    ["Vigorous", "Absorbed", "Inspired", "Relaxed"],
  ],
  [
    "If you go anywhere for a day where would it be?",
    ["The Beach", "The Casino", "An Art Museum", "A Concert"],
  ],
  [
    "How would your friends describe you?",
    ["Athletic", "Strategic", "Creative", "Easygoing"],
  ],
  [
    "Which of these was your favorite subject in school?",
    ["PE", "History", "Art", "Music"],
  ],
  [
    "What is your favorite genre of show/movie?",
    ["Sports", "Drama", "Musical Film", "Comedy"],
  ],
  [
    [
      "Out of these famous figures who would you be most interested in meeting?",
      ["Michael Phelps", "Grandma Gatewood", "Alex Honnold", "Michael Jackson"],
    ],
    [
      "Out of these famous figures who would you be most interested in meeting?",
      ["Magnus Carlsen", "Justin Bonomo", "TenZ", "Nagendra Raina"],
    ],
    [
      "Out of these famous figures who would you be most interested in meeting?",
      ["Leonardo da Vinci", "Virginia Woolf", "Michelangelo", "Edith Head"],
    ],
    [
      "Out of these famous figures who you be most interested in meeting?",
      ["Rick Riordan", "Mahatma Gandhi", "Taylor Swift", "Galilieo Galilei"],
    ],
  ],
  [
    [
      "What environment do you enjoy the most?",
      ["Underwater", "Outdoors", "Indoors and Outdoors", "Indoors"],
    ],
    [
      "Do you enjoy interacting with other people?",
      [
        "Sometimes but I don't mind either way.",
        "Yes, I find activies more fun that way.",
        "Only through a computer screen.",
        "No, I enjoy my alone time.",
      ],
    ],
    [
      "How do you like to express your creativity",
      ["Through drawing", "Through writing", "Through DIY", "Through sewing"],
    ],
    [
      "What is your ideal date?",
      [
        "Heading to the library",
        "Chilling together",
        "Going to a concert",
        "Looking at the stars",
      ],
    ],
  ],
  [
    [
      "If you had to work on something what would you work on?",
      ["Breathing", "Endurance", "Muscle Strength", "Flexibility"],
    ],
    [
      "Do you enjoy competition",
      [
        "Yes, especially if it is mostly a show of skill.",
        "Yes, if there is incentive for me to compete.",
        "Yes, as long as the competition is fun.",
        "No.",
      ],
    ],
    [
      "Do you believe ideas are best conveyed through words or pictures?",
      [
        "Pictures because a picture is worth a thousand words",
        "Words because I like to do my own imagination",
        "Pictures because only then can the expressions of an object truly be captured",
        "They are both valid ways of telling a story",
      ],
    ],
    [
      "What best describes your safe space?",
      [
        "A homey cafe",
        "Somewhere with a calming, naturalistic view",
        "My room",
        "Any place high up",
      ],
    ],
  ],
  [
    [
      "What attire do you feel most comfortable in?",
      ["Swim Suit", "Light Clothes", "Climbing Gear", "Dancewear"],
    ],
    [
      "Do you ever lie?",
      [
        "If necessary.",
        "All the time I am good at it.",
        "I try to avoid it.",
        "I'm not good with people so I find it hard to.",
      ],
    ],
    [
      "How important do you believe colors are to us?",
      [
        "They help paint a picture of the world.",
        "Words provide more meaning than visuals.",
        "The shape is more important.",
        "They are useful in complementing human beauty.",
      ],
    ],
    [
      "How do you like your coffee?",
      [
        "With a little cream and sugar",
        "I don't drink coffee",
        "With a lot of sugar and cream",
        "Black",
      ],
    ],
  ],
  [
    [
      "If you have experienced these, which one have you had the most fun doing?",
      [
        "Splashing around in a pool",
        "Taking walks along trails",
        "Scaling rocks",
        "Moving to the beat of the music",
      ],
    ],
    [
      "If you have experienced these, which one have you had the most fun doing?",
      [
        "Playing board games",
        "Playing card games",
        "Playing video games",
        "Solving puzzles",
      ],
    ],
    [
      "If you have experienced these, which one have you had the most fun doing?",
      [
        "Drawing",
        "Telling stories",
        "Creating 3D models of any kind",
        "Crocheting",
      ],
    ],
    [
      "If you have experienced these, which one have you enjoyed the most?",
      [
        "Enjoying a nice book",
        "Clearing your mind",
        "Vibing to music",
        "Staring out at the sky",
      ],
    ],
  ],
];

function next_question() {
  if (x == 4) {
    let temp = [athletic, strategic, creative, relaxing];
    z = temp.indexOf(Math.max.apply(Math, temp));
    x += 1;
  } else {
    x += 1;
  }
}

start_btn.addEventListener("click", function start() {
  start_btn.remove();
  start_message.remove();

  var text = document.createElement("text");
  text.id = "text";
  text.innerHTML = q_a[x][0];
  document.body.appendChild(text);

  var div_options = document.createElement("div");
  div_options.className = "container";
  document.body.appendChild(div_options);
  var option_1 = document.createElement("text");
  option_1.innerHTML = "A: " + q_a[x][1][0];
  document.body.appendChild(option_1);
  var lb2 = document.createElement("br");
  document.body.appendChild(lb2);
  var option_2 = document.createElement("text");
  option_2.innerHTML = "B: " + q_a[x][1][1];
  document.body.appendChild(option_2);
  var lb3 = document.createElement("br");
  document.body.appendChild(lb3);
  var option_3 = document.createElement("text");
  option_3.innerHTML = "C: " + q_a[x][1][2];
  document.body.appendChild(option_3);
  var lb4 = document.createElement("br");
  document.body.appendChild(lb4);
  var option_4 = document.createElement("text");
  option_4.innerHTML = "D: " + q_a[x][1][3];
  document.body.appendChild(option_4);

  function next_question2() {
    if (x < 5) {
      text.innerHTML = q_a[x][0];
      option_1.innerHTML = "A: " + q_a[x][1][0];
      option_2.innerHTML = "B: " + q_a[x][1][1];
      option_3.innerHTML = "C: " + q_a[x][1][2];
      option_4.innerHTML = "D: " + q_a[x][1][3];
    } else if (x < 10) {
      text.innerHTML = q_a[x][z][0];
      option_1.innerHTML = "A: " + q_a[x][z][1][0];
      option_2.innerHTML = "B: " + q_a[x][z][1][1];
      option_3.innerHTML = "C: " + q_a[x][z][1][2];
      option_4.innerHTML = "D: " + q_a[x][z][1][3];
    } else {
      text.remove();
      option_1.remove();
      option_2.remove();
      option_3.remove();
      option_4.remove();

      _btn.remove();
      _btn2.remove();
      _btn3.remove();
      _btn4.remove();

      let temp = [cri_1, cri_2, cri_3, cri_4];
      z_s = temp.indexOf(Math.max.apply(Math, temp));

      var result_text = document.createElement("text");
      result_text.innerHTML = "Congrats we recommend you try: ";
      document.body.appendChild(result_text);

      var results = document.createElement("a");
      results.href = links[z][z_s];
      results.innerHTML = activities[z][z_s];
      document.body.appendChild(results);
    }
  }
  var line_break1 = document.createElement("br");
  document.body.appendChild(line_break1);

  var div = document.createElement("div");
  div.className = "container";
  document.body.appendChild(div);

  var _btn = document.createElement("button");
  _btn.innerHTML = "A";
  _btn.id = "btna";
  div.appendChild(_btn);
  const a = document.getElementById("btna");
  a.addEventListener("click", function onClick() {
    a.style.backgroundColor = "blue";
    athletic += 1;
    if (x > 4) {
      cri_1 += 1;
    }
    next_question();
    setTimeout(() => {
      next_question2();
      a.style.backgroundColor = "black";
    }, 200);
    event.preventDefault();
  });

  var _btn2 = document.createElement("button");
  _btn2.innerHTML = "B";
  _btn2.id = "btnb";
  div.appendChild(_btn2);
  const b = document.getElementById("btnb");
  b.addEventListener("click", function onClick() {
    b.style.backgroundColor = "red";
    strategic += 1;
    if (x > 4) {
      cri_2 += 1;
    }
    next_question();
    setTimeout(() => {
      next_question2();
      b.style.backgroundColor = "black";
    }, 200);
    event.preventDefault();
  });

  var line_break2 = document.createElement("br");
  div.appendChild(line_break2);

  var _btn3 = document.createElement("button");
  _btn3.innerHTML = "C";
  _btn3.id = "btnc";
  div.appendChild(_btn3);
  const c = document.getElementById("btnc");
  c.addEventListener("click", function onClick() {
    c.style.backgroundColor = "green";
    creative += 1;
    if (x > 4) {
      cri_3 += 1;
    }
    next_question();
    setTimeout(() => {
      next_question2();
      c.style.backgroundColor = "black";
    }, 200);
    event.preventDefault();
  });

  var _btn4 = document.createElement("button");
  _btn4.innerHTML = "D";
  _btn4.id = "btnd";
  div.appendChild(_btn4);
  const d = document.getElementById("btnd");
  d.addEventListener("click", function onClick() {
    d.style.backgroundColor = "yellow";
    relaxing += 1;
    if (x > 4) {
      cri_4 += 1;
    }
    next_question();
    setTimeout(() => {
      next_question2();
      d.style.backgroundColor = "black";
    }, 200);
    event.preventDefault();
  });
});
