const lightBlue = document.getElementById('light-Blue')
const violet = document.getElementById('violet')
const oragen = document.getElementById('orange')
const green = document.getElementById('green')
const btnStart = document.getElementById('start')

class game {
    constructor() {
        this.setUp()
    }

    setUp() {
        btnStart.classList.add('hide')
    }
}

function startGame() {
    var playing = new game()
}
