export default class Points {
    constructor(field) {
        this.field = field
        this.baseHealth = 5
        this.basePoints = 0
        this.health = this.baseHealth
        this.points = this.basePoints


        this.scoreDesc = document.createElement('div');
        this.customiseField(this.scoreDesc)
        this.scoreDesc.textContent = 'Очки:'
        this.field.appendChild(this.scoreDesc)

        this.scoreField = document.createElement('div');
        this.customiseField(this.scoreField)
        this.scoreField.textContent = this.points
        this.field.appendChild(this.scoreField)

        this.healthDesc = document.createElement('div');
        this.customiseField(this.healthDesc)
        this.healthDesc.textContent = 'Жизни:'
        this.field.appendChild(this.healthDesc)

        this.healthField = document.createElement('div');
        this.customiseField(this.healthField)
        this.healthField.textContent = this.health
        this.field.appendChild(this.healthField)
    }

    customiseField(field) {
        field.style.width = '25%'
        field.style.backgroundColor = 'white'
        field.style.fontSize = '50px'
    }

    damage() {
        this.health -= 1
        this.healthField.textContent = this.health

    }

    addPoints() {        
        this.points += 1
        this.scoreField.textContent = this.points
    }

    reset() {
        this.health = this.baseHealth
        this.points = this.basePoints
        this.scoreField.textContent = this.points
        this.healthField.textContent = this.health
    }
    
}