import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from "./snake.js"
import {update as updateFood, draw as drawFood} from "./food.js"
import {outSideGrid} from "./grid.js"

let lastRendarTime = 0
const gameBoard =  document.getElementById('game-bord')
let gameOver = false

function main(currentTime) {
    if(gameOver) {
        if(confirm('YOU LOSE......... PRESS OK TO RESTART')){
            window.location = '/'
        }
        return
    }



    window.requestAnimationFrame(main)
    const secondsSicnceLastRender = (currentTime - lastRendarTime) / 1000
    if (secondsSicnceLastRender < 1 / SNAKE_SPEED) return



    lastRendarTime = currentTime
    // console.log('Render')


    update()
    draw()
}

window.requestAnimationFrame(main)


function update() {
    updateSnake()
    updateFood()
    checkDeath()
}


function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outSideGrid(getSnakeHead()) || snakeIntersection()
}