basic.forever(function () {
    let read = 0
        pins.i2cReadNumber(0x1E, NumberFormat.UInt8LE, true)
    pins.i2cReadNumber(0x1E, NumberFormat.UInt8LE, false)
    basic.showNumber(read)

})
