let leaderboardNumber = document.getElementById('highscores');

function getLeaderboardNum () {
    let storedRiders = JSON.parse(localStorage.getItem('highscores'));
    console.log(storedRiders);
    for (let i = 0; i < storedRiders.length; i++) {
        let scoresTable = document.createElement('div');
        scoresTable.innerHTML = "Rider: " + storedRiders[i].rider + " Score: " + storedRiders[i].riderScore;
        scoresTable.style.fontSize = "30px";
        leaderboardNumber.append(scoresTable);
    }
};

getLeaderboardNum();