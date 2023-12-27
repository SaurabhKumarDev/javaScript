// Player Detail
const player1Name = prompt('Player Name [0]');
const player2Name = prompt('Player Name [X]');

const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

if (player1Name == '' && player2Name == '') {
    player1Name = 'O';
    player2Name = 'X';
    player1.innerHTML = `<b>Player 1 : </b>${player1Name}`;
    player2.innerHTML = `<b>Player 2 : </b>${player2Name}`;
} else if (player1Name == '' && player2Name != '') {
    player1Name = 'O';
    player1.innerHTML = `<b>Player 2 : </b>${player1Name}`;
    player2.innerHTML = `<b>Player 2 : </b>${player2Name}`;
} else if (player2Name == '' && player1Name != '') {
    player2Name = 'X';
    player2.innerHTML = `<b>Player 2 : </b>${player2Name}`;
    player1.innerHTML = `<b>Player 1 : </b>${player1Name}`;
} else {
    player1.innerHTML = `<b>Player 1 : </b>${player1Name}`;
    player2.innerHTML = `<b>Player 2 : </b>${player2Name}`;
}

// Pattern for tic tac toe : 2D array used to store the pattern
const gamePattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]

// Turn O either X
let turn = true;

// buttons
const userClicked = document.querySelectorAll('.btn');

userClicked.forEach(function (current) {
    console.log(current);
    current.addEventListener('click', () => {
        if (turn) {
            current.innerText = '0';
            turn = false;
        } else {
            current.innerHTML = 'X';
            turn = true;
        }
        checkPattern();
        current.disabled = true;
    })
})

// Checking the pattern
function checkPattern() {
    for (let pattern of gamePattern) {
        let pos1val = userClicked[pattern[0]].innerText;
        let pos2val = userClicked[pattern[1]].innerText;
        let pos3val = userClicked[pattern[2]].innerText;

        if (pos1val !== '' && pos2val !== '' && pos3val !== '') {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log('win', pos1val);
                userClicked.forEach((btn) => {
                    if (btn.innerText == '') {
                        btn.disabled = true;
                    }
                })
                let result = document.querySelector('#msg');
                result.style.display = 'block';

                if (pos1val == '0') {
                    result.innerText = `${player1Name} Win this match, AND ${player2Name} Take a revenge`;
                } else {
                    result.innerText = `${player2Name} Win this match, AND ${player1Name} Take a revenge`;
                }
            }
        }
    }
}

// Reset all entry Except user Name
const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', () => {
    userClicked.forEach((cur) => {
        cur.innerText = '';
        cur.disabled = false;
    })
    let result = document.querySelector('#msg');
    result.style.display = 'none';
})