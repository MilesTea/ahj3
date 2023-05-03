export default class Cell {
    constructor() {
        this.cell = document.createElement('div');
        this.cell.classList.add('cell')
    }
    clear() {
        this.cell.classList.remove('goblin')
    }
    fill() {
        this.cell.classList.add('goblin')
    }
}