let runIt = document.getElementById('start-btn');
let menu = document.getElementById('coldOpen'); 
let bottom = document.getElementById('bikiniBottom'); 
let quizOpen = document.getElementById('quizOpen');
let time = document.getElementById('timer');
let pregunta = document.getElementById('pregunta');
let choice1 = document.getElementById('choice1');
let choice2 = document.getElementById('choice2');
let choice3 = document.getElementById('choice3');
let choice4 = document.getElementById('choice4');
let gameStop = document.getElementById('gameOver');
let tally = document.getElementById('tally');
let unForm = document.getElementById('unForm');
let username = document.getElementById('username');


let bikes = [
    {
        que: "WHAT WOULD BE USED FOR AN ARRAY IN JAVASCRIPT?",
        a: "A) {}",
        b: "B) <>",
        c: "C) []",
        d: "D) ()",
        answer: "c",
    },
    {
        que: "WHAT SYMBOL IS USED TO IDENTIFY AN ID IN CSS?",
        a: "A) !",
        b: "B) <",
        c: "C) .",
        d: "D) #",
        answer: "d",
    },
    {
        que: "WHAT SYMBOL IS USED TO IDENTIFY A CLASS IN CSS?",
        a: "A) $",
        b: "B) .",
        c: "C) No Symbol",
        d: "D) #",
        answer: "b",
    },
    {
        que: "Who is the best footballer to ever live?",
        a: "Lionel Messi",
        b: "R9 Ronaldo",
        c: "David Beckham",
        d: "Zinedine Zidane",
        answer: "b",
    },
];


timeLeft = 10;
whichQuest = 0;
score = 0;  
let storedRiders;

function coldOpen() {
    quizOpen.style.display = "none";
    gameStop.style = 'display: none';
    if(JSON.parse(localStorage.getItem("highscores")) === null) {
        storedRiders = [];
    } else {
        storedRiders = JSON.parse(localStorage.getItem("highscores"));
    }
    console.log(storedRiders);
};

function startGame() {
    if (whichQuest === 3) {
        return gameOver();
    }
    pregunta.innerHTML = bikes[whichQuest].que;
    choice1.innerHTML = bikes[whichQuest].a;
    choice2.innerHTML = bikes[whichQuest].b;
    choice3.innerHTML = bikes[whichQuest].c;
    choice4.innerHTML = bikes[whichQuest].d;
};

coldOpen();


runIt.addEventListener('click', function() {
    startTimer();
    menu.style = "display: none";
    bottom.style = "display: none";
    quizOpen.style = "display: grid";
    gameStop.style ="display: none";
    startGame();
});

function startTimer() {
    let doomsday = setInterval( function() {
        timeLeft --;
        time.innerHTML = "Time Left: " + timeLeft;
        if(timeLeft === 0) {
            clearInterval(doomsday);
        }
    }, 1000);
};

function dealWithA() {
    if(bikes[whichQuest].answer === "a") {
        whichQuest++;
        score+= 10;
        console.log('uwu');
    }
    else {
        whichQuest++
        timeLeft-= 5;
        console.log('wrong');
    }
    startGame();
}

function dealWithB() {
    if(bikes[whichQuest].answer === "b") {
        whichQuest++;
        score+= 10;
        console.log('uwu');
    }
    else {
        whichQuest++
        timeLeft-= 5;
        console.log('wrong');
    }
    startGame();
}

function dealWithC() {
    if(bikes[whichQuest].answer === "c") {
        whichQuest++;
        score+= 10;
        console.log('uwu');
    }
    else {
        whichQuest++
        timeLeft-= 5;
        console.log('wrong');
    }
    startGame();
}

function dealWithD() {
    if(bikes[whichQuest].answer === "d") {
        whichQuest++;
        score+= 10;
        console.log('uwu');
    }
    else {
        whichQuest++
        timeLeft-= 5;
        console.log('wrong');
    }
    startGame();
}

choice1.addEventListener('click', dealWithA);
choice2.addEventListener('click', dealWithB);
choice3.addEventListener('click', dealWithC);
choice4.addEventListener('click', dealWithD);

function gameOver() {
    quizOpen.style = "display: none";
    gameStop.style = "display: grid";
    console.log(score);
    gameStop.style.display = "flex";
};

function saveTally (e) {
    e.preventDefault();
    newScore = {
        rider: username.value,
        riderScore: score,
    };
    localStorage.setItem("highscores", JSON.stringify(storedRiders));
    window.location.href = "halloffame.html";
};

unForm.addEventListener("submit", saveTally);