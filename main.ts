basic.forever(function () {
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            led.toggle(x, y)
            basic.pause(10)
        }
    }
})
