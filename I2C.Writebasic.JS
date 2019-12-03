basic.forever(function () {
    pins.i2cWriteNumber(33, 19, NumberFormat.Int32BE, true);
    pins.i2cWriteNumber(33, 87, NumberFormat.Int32BE, false);

})
