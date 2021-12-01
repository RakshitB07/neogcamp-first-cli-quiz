var readlineSync = require ("readline-sync");

var userName = readlineSync.question ("What is your name? ")

console.log ("Hi! " + userName + " Do you know RAKSHIT?")

var score = 0;

//Play function

function play (question, answer) {
    var userAnswer = readlineSync.question(question);
  
    if (userAnswer === answer) {
      console.log ("You are right!");
      score = score + 1;
  
    } else {
      console.log ("You are wrong!");
      score = score - 1;
    }
  
    console.log ("Current score: " , score);
    console.log ("------------------");
}

var question = [{
    question: "What graphics card does he have? ",
    answer: "nvidia"
}, {
    question: "What CPU does he have? ",
    answer: "intel"
}, {
    question: "What headphone does he have? ",
    answer: "razer"
}, {
    question: "Does he have a laptop? ",
    answer: "yes"
}]

//loop
for (var i = 0; i < question.length; i++){
    var currentQuestion = question [i];
    play (currentQuestion.question, currentQuestion.answer)
}


//print final score
console.log ("                         ")
console.log ("Your final score is: ", score);