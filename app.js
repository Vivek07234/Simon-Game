let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game is Started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove(" flash");
    }, 250);
}

function userflash (btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}


function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;


    //random btn choose
    // btnFlash();

    let randIdx = Math.floor(Math.random() *4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
   
    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("current level :", level);
    // let idx = level-1;

    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000); 
        }
    } else{
        h3.innerHTML = `Game over! your score was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    // console.log(this);  
    let btn = this;
    userflash (btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}