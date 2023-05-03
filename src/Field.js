import Cell from "./Cell"

export default class Field {
    constructor(field, cells) {
        this.cellsCount = cells
        this.field = field
        this.rowLength = Math.sqrt(this.cellsCount)
        if(!Number.isInteger(this.rowLength)) {throw "can't create square"}

        this.elementLength = Math.floor(100 / Math.sqrt(this.cellsCount))
        this.cells = []
        for(let i = 0; i < this.cellsCount;i++) {
            const newCell = new Cell()
            this.field.appendChild(newCell.cell)
            newCell.cell.style.width = `${this.elementLength}%`
            this.cells.push(newCell)
        }
    }

    randomCellNumber() {
        return Math.floor( Math.random() * (this.cellsCount - 1))
    }

    randomEmptySpot() {
        if(typeof this.lastFilledCell == undefined) {return this.randomCellNumber()}
        let number = Math.floor( Math.random() * (this.cellsCount - 1))
        number = number >= this.lastFilledCell ? number + 1 : number
        return number
    }

    clearPrevious() {
        if(typeof this.lastFilledCell === 'undefined') {return}
        this.cells[this.lastFilledCell].clear()
    }
    
    clearAll() {
        this.cells.forEach(cell => {
            cell.clear
        });
    }

    fill(cell) {
        this.lastFilledCell = cell
        this.cells[cell].fill()
    }

    clear(cell) {
        this.cells[cell].clear()
    }
}