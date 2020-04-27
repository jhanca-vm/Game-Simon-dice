const skyBlue = document.getElementById('skyBlue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const btnStart = document.getElementById('start')

class game {
    constructor() {
        this.setUp()
        this.generateSequence()
        this.nextLevel()
    }

    setUp() {
        btnStart.classList.add('hide')
        this.level = 10
        this.colors = {
            skyBlue,
            violet,
            orange,
            green
        }
    }

    generateSequence() {
        this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel() {
        this.iluminateSequence()
    }

    transformNumberToColor(number) {
        switch (number) {
            case 0:
                return 'skyBlue'
            case 1:
                return 'violet'
            case 2:
                return 'orange'
            case 3:
                return 'green'
        }
    }

    iluminateSequence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.transformNumberToColor(this.sequence[i])
            setTimeout(() => this.iluminateColor(color), 1000 * i)
        }
    }

    iluminateColor(color) {
        this.colors[color].classList.add('light')
        setTimeout(() => this.turnOfColor(color), 350)
    }

    turnOfColor(color) {
        this.colors[color].classList.remove('light')
    }
}

function startGame() {
    var playing = new game()
}
