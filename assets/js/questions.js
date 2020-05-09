// list of all questions, choices, and answers
function Question(title, choices, answer){
  this.title = title;
  this.choices = [...choices];
  this.answer = answer;
}

const q1 = new Question("Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], 'alerts');
const q2 = new Question("The condition in an if / else statement is enclosed within ____.", ["quotes", "curly brackets", "parentheses", "square brackets"], "parentheses");
const q3 = new Question("Arrays in JavaScript can be used to store ____.", ["numbers and strings", "other arrays", "booleans", "all of the above"])
const q4 = new Question("String values must be enclosed within ____ when being assigned to variables.", ["commas", "quotes", "curly brackets", "parentheses"], "quotes");
const q5 = new Question("A very useful tool used during development and debugging for printing content to the debugger is ____", ["JavaScript", "terminal / bash", "for loops", "console.log"], "console.log");


let questions = [q1, q2, q3];

questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"
    ],
    answer: "quotes"
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"
    ],
    answer: "console.log"
  }
];
