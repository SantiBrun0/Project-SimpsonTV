let estadoProducto = 'apagada'
let sonidoTv = document.getElementById('sound')
let visor = document.getElementById('visor')

let controlarProducto = () => {
    if (estadoProducto == 'apagada') {
        estadoProducto = 'encendido';
        prenderTV()
        visor.classList.add('active')
        console.log('prendiste');
    } else {
        estadoProducto = 'apagada'
        prenderTV()
        visor.classList.remove('active')
        console.log('apagaste');
    }
}

let prenderTV = () => {
    if (sonidoTv.paused) {
        sonidoTv.play()
    } else {
        sonidoTv.pause()
        sonidoTv.currentTime = 0
    }
}