let p1Field = document.getElementById("p1");
let p2Field = document.getElementById("p2");
const optionsP1 = document.querySelectorAll(".p1btn");
const optionsP2 = document.querySelectorAll(".p2btn");
let msg = document.getElementById("text");

let playerOneChoice = "";
let playerTwoChoice = "";

optionsP1.forEach(optionP1 => optionP1.addEventListener("click", player1));
optionsP2.forEach(optionP2 => optionP2.addEventListener("click", player2));

function player1(e) {
    p1Field.style.display = "none";
    p2Field.style.display = "block";
    playerOneChoice = e.target.innerText;
    result(playerOneChoice);
}

function player2(f) {
    p2Field.style.display = "none";
    playerTwoChoice = f.target.innerText;
    result(playerTwoChoice);
    msg.style.display = "block";
}

function result() {
    if (playerOneChoice == playerTwoChoice) {
        msg.innerText = "Het is gelijkspel";
    } else if (playerOneChoice == "Rock") {
        if (playerTwoChoice == "Paper") {
            msg.innerText = "speler 2 wint";
        } else {
            msg.innerText = "speler 1 wint";
        }
    } else if (playerOneChoice == "Paper") {
        if (playerTwoChoice == "Scissors") {
            msg.innerText = "speler 2 wint";
        } else {
            msg.innerText = "speler 1 wint";
        }
    } else if (playerOneChoice == "Scissors") {
        if (playerTwoChoice == "Rock") {
            msg.innerText = "speler 2 wint";
        } else {
            msg.innerText = "speler 1 wint";
        }
    }
}
result();