var questionTitle = document.getElementById("question");
var answerTitle = document.getElementById("answer-choices");
var accuracyTitle = document.getElementById("accuracy");
var getInitials = document.getElementById("initials");
var savedScore = document.getElementById("saved-score")
var questionNumber = 0;
var finalScore = 0;
var currentQuestion = {};
var startCountdown;
//timer

var timer = 10;
var countdown = function() {
    var timerEl = document.getElementById('timer');
    timerEl.textContent = timer + " seconds remaining";
       
    if(timer <= 0) {
        timer = 0;
        clearInterval(startCountdown);
        timerEl.textContent = timer + " seconds remaining";
        questionTitle.remove();
        answerTitle.remove();
        accuracyTitle.remove();
        getInitials.style.visibility = "visible";
        savedScore.appendChild(timer);
        console.log("your final score is " + finalScore);
    };
    timer--;
};


// array of questions
    
var questionsTotal = [
    {
        question: "Here is my first question",
        choices:  ["1-1", "1-2", "1-3", "1-4"],
        trueStatement: "1-4"
    },
    {
        question: "Here is my second question",
        choices:  ["2-1", "2-2", "2-3", "2-4"],
        trueStatement: "2-2"
    },
 
];


//gameBegin function
gameBegin = function() {
    startCountdown = setInterval(countdown, 1000);
    nextQuestion();
}

//nextQuestion Function
nextQuestion = function() {
    if (questionNumber < questionsTotal.length) {
        accuracyTitle.textContent = "";
        var gameQuestion = questionsTotal[questionNumber];
            questionTitle.textContent = gameQuestion.question; 
            answerTitle.textContent = "";
            gameQuestion.choices.forEach(function(choice) {
                var answerButton = document.createElement("button");
                answerButton.textContent = choice;
                answerButton.setAttribute("value", choice);
                answerButton.setAttribute("class", "answer-container");
                answerButton.onclick = chosenAnswer;
                answerTitle.appendChild(answerButton);
            });
    } else {   
        clearInterval(startCountdown);
        if (timer < 0) {
            timer = 0;
        } else {
            timer++;
        }
        //timer reads one second higher then the final score without the timer++
        finalScore = timer;
        questionTitle.remove();
        answerTitle.remove();
        accuracyTitle.remove();
        getInitials.style.visibility = "visible";
        savedScore.appendChild(finalScore);
        console.log("your final score is " + finalScore);
    }
};

function chosenAnswer() {
    console.log(this.value);
    //convert their choice to text and then check if choice = trueStatment  if/else
    if (this.value === questionsTotal[questionNumber].trueStatement) {
        var correctAnswer = document.createElement("div");
        correctAnswer.textContent = "Correct!";
        correctAnswer.setAttribute("class", "yesorno");
        accuracyTitle.appendChild(correctAnswer);
        questionNumber++;
        setTimeout(nextQuestion, 500);
    } 
    else {
        var wrongAnswer = document.createElement("div");
        wrongAnswer.textContent = "WRONG!";
        wrongAnswer.setAttribute("class", "yesorno");
        accuracyTitle.appendChild(wrongAnswer);
        timer = timer -5;
        questionNumber++;
        setTimeout(nextQuestion, 500);
    };
};


gameBegin();






// if(questionNumber === questionsTotal.length) {
    //     alert("Game is over");
    //     clearInterval(startCountdown);
    //     finalScore = timer;
    //     localStorage.setItem("intials", prompt("Please enter your initaials"));
    //     localStorage.setItem("score", finalScore);
    // } else if(questionNumber < questionsTotal.length) {
    //     currentQuestion = questionsTotal;
    //     questionsTotal.innerText = currentQuestion.question;
    // }

    // localStorage.setItem("player", prompt("Please enter your initials"));
    //     localStorage.setItem("score", finalScore);