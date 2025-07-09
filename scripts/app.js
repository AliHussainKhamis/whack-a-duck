function init(){
    // All code goes here
    const gridElem = document.querySelector('.grid')
    const scoreElem = document.querySelector('#score-display')

    const cells = []
    const gridWidth = 10
    const numberOfCells = gridWidth * gridWidth

    let duckPosition = 3
    let score = 0


// 2
    function addDuck(){
        cells[duckPosition].classList.add('duck')
    }
// 3
    function removeDuck(){
        cells[duckPosition].classList.remove('duck')
    }
// 4
    function play(){
        setInterval(() => {
            removeDuck()
            duckPosition = Math.floor(Math.random() * numberOfCells)
            addDuck()
        }, 3000)
    }
// 5 add event listener to the cells & Handle click to add  to score
    
    function handleClick(event){
        console.log('Handle Click has run!')
        // handleClick(event)
        if(event.target.classList.contains('duck')){
            score += 10
            scoreElem.textContent = `Your score is ${score}`
            console.log(score)
        }
    }
// 1
    function createGrid(){
        // for every cell that we require create a div
        // append this cell to our grid
        for (let i = 0; i < numberOfCells; i++){
            const cell = document.createElement('div')
            // cell.classList.add('duck')
            cell.textContent = i
            cells.push(cell)
            cell.addEventListener('click', handleClick)
            gridElem.appendChild(cell)
        }
        console.log(cells)
    }
    // result
    createGrid()
    play()

}

document.addEventListener('DOMContentLoaded', init)