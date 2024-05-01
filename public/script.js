document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const cnv = document.getElementById (`cnv_element`)
cnv.width = innerWidth
cnv.height = innerHeight

const ctx = cnv.getContext (`2d`)

const draw_frame = () => {
   ctx.fillStyle = `turquoise`
   ctx.fillRect (0, 0, innerWidth, innerHeight)

   requestAnimationFrame (draw_frame)
}

draw_frame ()

window.onresize = () => {
   cnv.width = innerWidth
   cnv.height = innerHeight   
}

<canvas id="recursive_squares"></canvas>

<script type="module">
    const cnv = document.getElementById (`recursive_squares`)
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width
    
    const ctx = cnv.getContext (`2d`)

    function rand_col () {
        return `hsl(${ Math.random () * 360 }, 100%, 66%)`
    }

    function draw_square (size) {
        const x = (cnv.width - size) / 2
        const y = (cnv.height - size) / 2

        ctx.fillStyle = rand_col ()
        ctx.fillRect (x, y, size, size)
    }

    function draw_squares (start_size) {
        draw_square (start_size)

        if (start_size > 0) {
            draw_squares (start_size - 20)
        }
    }

    draw_squares (cnv.height)

</script>
