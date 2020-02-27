const canvas = document.getElementsByTagName('canvas')[0]
const _ = canvas.getContext('2d')

const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight
const { PI } = Math
const TAU = 2 * PI

_.fillStyle = 'black'
_.strokeStyle = 'white'
_.lineWidth = 3

const firstCircleRadius = 256
const elevation = 3

function draw() {
  _.fillRect(0, 0, width, height)
  _.translate(width / 2, height / 2)

  let circleRadius = firstCircleRadius
  let squareSideLength = Math.sqrt(PI * circleRadius * circleRadius)

  for (let i = 0; i < elevation; i++) {
    _.beginPath()
    _.arc(0, 0, circleRadius, 0, TAU)
    _.closePath()
    _.stroke()

    _.rect(-squareSideLength / 2, -squareSideLength / 2, squareSideLength, squareSideLength)
    _.stroke()

    circleRadius = Math.sqrt(2) * squareSideLength / 2
    squareSideLength = Math.sqrt(PI * circleRadius * circleRadius)
  }
}

draw()
