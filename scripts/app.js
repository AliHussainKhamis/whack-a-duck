
function init(){

  function createGrid(){
    // for every cell create a div
    // append this cell to our grid
    const gridElem = document.querySelector('.grid')

    const cells = []
    const gridWidth = 10
    const numberOfCells = gridWidth*gridWidth


    for(let i =0; i<numberOfCells; i++){

        const cell = document.createElement('div')
        cell.classList.add('duck') // **** ADDS DUCKS TO THE CLASS LIST (cell(div))
        cell.textContent = i
        cells.push(cell)

        gridElem.appendChild(cell)
    }
    console.log(cells)
  }

  createGrid()
}

document.addEventListener('DOMContentLoaded',init);