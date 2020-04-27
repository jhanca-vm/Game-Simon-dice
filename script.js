const skyBlue = document.getElementById('skyBlue')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const btnStart = document.getElementById('start')
const lastLevel = 10

class game {
    constructor() {
        this.setUp()
        this.setUp = this.setUp.bind(this)
        this.generateSequence()
        setTimeout(this.nextLevel, 500)
    }

    setUp() {
        this.toggleBtnEmpezar()
        this.level = 1
        this.nextLevel = this.nextLevel.bind(this)
        this.chooseColor = this.chooseColor.bind(this)
        this.colors = {
            skyBlue,
            violet,
            orange,
            green
        }
    }

    toggleBtnEmpezar() {
        if (btnStart.classList.contains('hide')) {
            btnStart.classList.remove('hide')
        } else {
            btnStart.classList.add('hide')
        }
    }

    generateSequence() {
        this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel() {
        this.iluminateSequence()
        this.addEventClick()
        this.sublevel = 0
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

    transformColorToNumber(color) {
        switch (color) {
            case 'skyBlue':
                return 0
            case 'violet':
                return 1
            case 'orange':
                return 2
            case 'green':
                return 3
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

    addEventClick() {
        this.colors.skyBlue.addEventListener('click', this.chooseColor)
        this.colors.violet.addEventListener('click', this.chooseColor)
        this.colors.orange.addEventListener('click', this.chooseColor)
        this.colors.green.addEventListener('click', this.chooseColor)
    }

    removeEventClick() {
        this.colors.skyBlue.removeEventListener('click', this.chooseColor)
        this.colors.violet.removeEventListener('click', this.chooseColor)
        this.colors.orange.removeEventListener('click', this.chooseColor)
        this.colors.green.removeEventListener('click', this.chooseColor)
    }

    chooseColor(ev) {
        const nameColor = ev.target.dataset.color
        const numberColor = this.transformColorToNumber(nameColor)
        
        this.iluminateColor(nameColor)

        if (numberColor === this.sequence[this.sublevel]) {
            this.sublevel++
            if (this.sublevel === this.level) {
                this.level++
                this.removeEventClick()
                if (this.level === (lastLevel + 1)) {
                    this.wonTheGame()
                } else {
                    setTimeout(this.nextLevel, 1500) 
                }
            }
        } else {
            this.lostTheGame()
        }
    }

    wonTheGame() {
        swal('Felicitacions!', 'Ganaste', 'success')
        .then(this.setUp)
    }

    lostTheGame() {
        swal('Lo siento :(', 'Perdiste', 'error')
        .then(() => {
            this.removeEventClick()
            this.setUp()
        })
    }
}

function startGame() {
    var playing = new game()
}
