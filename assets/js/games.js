var startGame = document.getElementById("start-game");
var firstPage = document.getElementById("first-page");
var questionTitle = document.getElementById("question");
var answerTitle = document.getElementById("answer-choices");
var accuracyTitle = document.getElementById("accuracy");
var getInitials = document.getElementById("initials");
var quizContainer = document.getElementById("quiz");
var textboxInitials = document.getElementById("textbox");
var highscore = [];


var questionNumber = 0;
var finalScore = 0;
var startCountdown;

//timer
var timer = 60;




// array of questions
    
var questionsTotal = [
    {
        question: "What HTML element houses Javascript code",
        choices:  ["head", "header", "body", "script"],
        trueStatement: "script"
    },
    {
        question: "What part of the script should global variables be declared?",
        choices:  ["Top", "Right", "Bottom", "Left"],
        trueStatement: "Top"
    },
    {
        question: "What part of the HTML document should you insert your Javascript?",
        choices:  ["Top", "Head", "Bottom", "Body"],
        trueStatement: "Body"
    },
    {
        question: "What is one way to insert code into the DOM?",
        choices:  ["Push", "innerHTML", "Shove", "bodyDeclaration"],
        trueStatement: "innerHTML"
    },
    {
        question: "What is something you can do in Javascript?",
        choices:  ["Style text", "Eat a sandwich", "Create Timer functons", "Add HTML"],
        trueStatement: "Eat a sandwich"
    },
];

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
        endQuiz();
    };
    timer--;
};



//gameBegin function
var gameBegin = function() {
    startCountdown = setInterval(countdown, 1000);
    firstPage.remove();
    quizContainer.style.visibility = "visible";
    nextQuestion();
}

//nextQuestion Function
var nextQuestion = function() {
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
        console.log("your final score is " + finalScore);
        endQuiz();
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

function endQuiz(event) {
    initials.innerHTML = `
		<p class="form-title jusify-center"> You got final score of ${finalScore}!</p>
		<br><br>
    <form onsubmit="savedData(event)">
      <input type="text" placeholder="Enter Initials Here" id="textbox" class="jusify-center initials-input" name="initials"></input>
      <input type="submit" class="btn jusify-center" value="Save Score"></input>
        </form>
  `;
}
function savedData(event){
    event.preventDefault();
    console.log(event.target[0].value);
    var nameInput = event.target[0].value;
    var savedInfo = {
            name: nameInput,
            score: finalScore,
    }
    highscore.push(savedInfo);
    localStorage.setItem("highscore", JSON.stringify(highscore));
    window.location.href = "highscore.html";
};

startGame.addEventListener("click", gameBegin);



// display-highscores.innerHTML = `
// <p class="form-title jusify-center"> Here are the highscores!</p>`;
