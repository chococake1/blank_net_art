document.body.style.margin   = 0
document.body.style.overflow = `hidden`

function setup () {
   createCanvas (innerWidth, innerHeight)
   rectMode (CENTER)
   fill (`deeppink`)
   noStroke ()
   noLoop ()
}

function  draw () {
   background (`turquoise`)
   square (width / 2, height / 2, 100)
}