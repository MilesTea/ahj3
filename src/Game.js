import Field from "./Field";
import Points from "./Points";

export default class Game {
    constructor(field, cells) {
        this.field = field

        this.pointsField = document.createElement('div');
        this.pointsField.classList.add('game_field')
        this.gameField = document.createElement('div');
        this.gameField.classList.add('game_field')
        this.field.appendChild(this.pointsField)
        this.field.appendChild(this.gameField)
        this.pointsField = new Points(this.pointsField)
        this.gameField = new Field(this.gameField, cells)

        this.goblinClick = this.goblinClick.bind(this)
        this.game = this.initiateGame()
        
    }

    initiateGame() {
        this.lastRandomNumber = this.gameField.randomCellNumber()

        this.putGoblin()
        this.gameCycle()

    }

    restartGame() {
        clearInterval(this.currentInterval)
        this.pointsField.reset()
        this.gameField.clearAll()
        this.initiateGame()
    }

    putGoblin() {
        this.gameField.clear(this.lastRandomNumber)
        this.gameField.clearPrevious()
        this.gameField.cells[this.lastRandomNumber].cell.removeEventListener('click', this.goblinClick)
        this.lastRandomNumber = this.gameField.randomEmptySpot()
        this.gameField.fill(this.lastRandomNumber)
        this.gameField.cells[this.lastRandomNumber].cell.addEventListener('click', this.goblinClick)
    }

    gameCycle() {
        this.currentInterval = setInterval(() => {
            this.pointsField.damage()
            this.putGoblin()
            if(this.pointsField.health == 0) {
                alert('Вы проиграли')
                this.restartGame()
                
                }
        }, 1000)


    }

    goblinClick() {
        clearInterval(this.currentInterval)
        this.putGoblin()
        this.gameCycle()
        this.pointsField.addPoints()
    }
}