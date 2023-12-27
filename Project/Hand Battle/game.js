const choices = document.querySelectorAll('img');

let compChoice = () => {
    let random = Math.floor((Math.random() * 3) + 1);
    switch (random) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissor';
            break;
        default:
            return 'Value defected';
            break;
    }
}

function gamePlay(userChoice) {
    let computer = compChoice();
    console.table([`User : ${userChoice}`, `Computer : ${computer}`]);
    conditionChecker(userChoice, computer);
}

let tResultUser = 0;
let tResultComp = 0;

const btn = document.querySelector('button');
const resUser = document.querySelector('#user');
const resComp = document.querySelector('#computer');
const userHelper = document.querySelector('#help');


function win(user, comp) {
    btn.innerText = 'Game win!';
    btn.style.backgroundColor = 'green';
    userHelper.innerHTML = `<b>You :</b> ${user} <b>Computer : </b>${comp}`;
    tResultUser += 1;
    resUser.innerText = tResultUser;
}

function loose(user, comp) {
    btn.innerText = 'Game looser!';
    btn.style.backgroundColor = 'red';
    userHelper.innerHTML = `<b>You :</b> ${user} <b>Computer : </b>${comp}`;
    tResultComp += 1;
    resComp.innerText = tResultComp;
}

function draw(user, comp) {
    btn.innerText = 'Game draw!';
    btn.style.backgroundColor = 'blue';
    userHelper.innerHTML = `<b>You :</b> ${user} <b>Computer : </b>${comp}`;
}

function conditionChecker(user, comp) {
    if (user === comp) {
        draw(user, comp);
    } else if (comp === 'paper' && user === 'rock') {
        loose(user, comp);
    } else if (user === 'rock' && comp === 'scissor') {
        win(user, comp);
    } else if (user === 'paper' && comp === 'rock') {
        win(user, comp);
    } else if (user === 'paper' && comp === 'scissor') {
        loose(user, comp);
    } else if (user === 'scissor' && comp === 'rock') {
        loose(user, comp);
    } else if (user === 'scissor' && comp === 'paper') {
        win(user, comp);
    }
}

choices.forEach(function (e) {
    console.log(e);
    e.addEventListener('click', () => {
        userChoice = e.getAttribute('id');
        gamePlay(userChoice);
    })
})