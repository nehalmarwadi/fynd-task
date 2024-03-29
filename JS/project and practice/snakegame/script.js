import { update as updateSnake, draw as drawSnake, SNAKE_SPEED , getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime=0;
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime){
    if(gameOver){
       if(confirm('You LOST. Press OK to Restart.')){
        window.location = '/'
       }
       return
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return


    // console.log('RENDER')
    lastRenderTime = currentTime
    // console.log(currentTime)

    update()
    draw()
}
window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}