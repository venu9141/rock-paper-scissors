const computerchoicedisplay = document.getElementById("computer-choice")
const userchoicedisplay = document.getElementById("user-choice")
const resultdisplay = document.getElementById("result")
const possiblechoices = document.querySelectorAll('button')
let userchoice

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    userchoice = e.target.id
    userchoicedisplay.innerHTML = userchoice
    generatecomputerchoice()
    getresult()
}))


function generatecomputerchoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerchoice = 'rock'
    }
    if (randomNumber === 2) {
        computerchoice = 'paper'
    }
    if (randomNumber === 3) {
        computerchoice = 'scissors'
    }

    computerchoicedisplay.innerHTML = computerchoice

}

function getresult() {
    if (computerchoice === userchoice) {
        result = 'its a draw'
    }
    if (computerchoice === 'rock' && userchoice === 'paper') {
        result = 'you win'
    }
    if (computerchoice === 'rock' && userchoice === 'scissors') {
        result = 'you lost'
    }

    if (computerchoice === 'paper' && userchoice === 'rock') {
        result = 'you lost'
    }
    if (computerchoice === 'paper' && userchoice === 'scissors') {
        result = 'you win'
    }

    if (computerchoice === 'scissors' && userchoice === 'rock') {
        result = 'you win'
    }

    if (computerchoice === 'scissors' && userchoice === 'paper') {
        result = 'you lost'
    }
    resultdisplay.innerHTML = result

}