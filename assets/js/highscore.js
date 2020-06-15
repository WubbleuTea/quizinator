var  displayHS = document.getElementById("display-hs");
var resetScores = document.getElementById("reset-scores");

var storageScores;

function displayScores() {
   
  var storageScores = JSON.parse(localStorage.getItem("highscore"));
    storageScores.innerHTML = "<h1 class='title'>" + storageScores.name + "</h3><span class='title'>" + storageScores.score + "</span>";
    displayHS.appendChild(storageScores);
   //could not get the scores to append they are in the local storge which can be reset by the button just not displaying on page.

};

function resetStorage() {
    localStorage.clear();
    window.location.href = "index.html";
};



displayScores();
resetScores.addEventListener("click", resetStorage);


   