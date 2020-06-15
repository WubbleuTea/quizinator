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
var timer = 10;




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
        collectData();
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
      <input type="text" placeholder="Enter Initials Here" id="textbox" class="jusify-center" name="initials"></input>
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
};

startGame.addEventListener("click", gameBegin);








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