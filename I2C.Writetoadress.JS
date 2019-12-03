basic.forever(function () {
    pins.i2cWriteNumber(0x1E, 19, NumberFormat.Int32BE, true);
    pins.i2cWriteNumber(0x1E, 87, NumberFormat.Int32BE, false);
