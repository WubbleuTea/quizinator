var question = document.getElementById("question")

var finalScore = 0;

var time = 6000;

//timer
var timer = 10;
var countdown = function() {
    var timerEl = document.getElementById('timer');
    timerEl.textContent = timer + " seconds remaining";
    console.log(timer);
   
    if(timer === 0) {
        alert("Game is over");
        finalScore = 0;
        clearInterval(startCountdown);
        //then this becomes the final score
    };
    timer--;
};

var startCountdown = setInterval(countdown, 1000);

// array of questions
    //with answers and possibility of correct answer
var questionsTotal = [
    {
        question: "Here is my first question",
        answer1: "answer #1-1",
        answer2: "answer #1-2",
        answer3: "answer #1-3",
        answer4: "answer #1-4",
    },
    {
        question: "Here is my second question",
        answer1: "answer #2-1",
        answer2: "answer #2-2",
        answer3: "answer #2-3",
        answer4: "answer #2-4",
    },
    {
        question: "Here is my third question",
        answer1: "answer #3-1",
        answer2: "answer #3-2",
        answer3: "answer #3-3",
        answer4: "answer #3-4",
    },
    {
        question: "Here is my fourth question",
        answer1: "answer #4-1",
        answer2: "answer #4-2",
        answer3: "answer #4-3",
        answer4: "answer #4-4",
    },
    
]
//gameBegin function

//nextQuestion Function