function loopThroughAllLEDs () {
    for (let index = 0; index <= 15; index++) {
        RainbowSparkleUnicorn.Light.turnAllOff()
        basic.pause(500)
        if (index == 0) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P0)
        } else if (index == 1) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P1)
        } else if (index == 2) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P2)
        } else if (index == 3) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P3)
        } else if (index == 4) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P4)
        } else if (index == 5) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P5)
        } else if (index == 6) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P6)
        } else if (index == 7) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P7)
        } else if (index == 8) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P8)
        } else if (index == 9) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P9)
        } else if (index == 10) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P10)
        } else if (index == 11) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P11)
        } else if (index == 12) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P12)
        } else if (index == 13) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P13)
        } else if (index == 14) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P14)
        } else if (index == 15) {
            RainbowSparkleUnicorn.Light.turnOn(lightPins.P15)
        }
        basic.showNumber(index)
        basic.pause(5000)
    }
}
comment.comment("To use the board you must add this block below as the first block")
RainbowSparkleUnicorn.start()
basic.showNumber(3)
basic.showNumber(2)
basic.showNumber(1)
loopThroughAllLEDs()
basic.showIcon(IconNames.Heart)
