var  displayHS = document.getElementById("display-hs");
var resetScores = document.getElementById("reset-scores");

var storageScores ;

function displayScores() {
   
  var storageScores = JSON.parse(localStorage.getItem("highscore"));
    storageScores.forEach(function(score) {
      var initials = document.createElement("p");
      initials.setAttribute("class", "high-score");
      var viewedScore = document.createElement("p");
      viewedScore.setAttribute("class", "high-score");
      initials.textContent = score.name + " - ";
      viewedScore.textContent = " " + score.score + "!"; 
      displayHS.appendChild(initials, viewedScore);
      displayHS.appendChild(viewedScore);
    });
   

};

function resetStorage() {
    localStorage.clear();
    window.location.href = "index.html";
};



displayScores();
resetScores.addEventListener("click", resetStorage);


   