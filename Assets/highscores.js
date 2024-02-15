const highScoresList = document.getElementById('highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
highScoresList.innerHTML = highScores
// console.log(
.map( score =>{
    return`<li class="high-score">${score.name}-${score.score}</li>`;})
    .join(" ");
// );
console.log(highScores);