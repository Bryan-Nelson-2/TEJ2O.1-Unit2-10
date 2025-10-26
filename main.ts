/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Alex
 * Created on: Oct 2025
 * This program determines the light level and lights up the corresponding neopixels
*/

// variables
let lightLevel = input.lightLevel()
let neopixelStrip: neopixel.Strip = null

// determines the light level and lights up the corresponding neopixels
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
if (lightLevel > 208) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
}
else if (lightLevel > 156) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
}
else if (lightLevel > 104) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
}
else if (lightLevel > 52) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
}
else if (lightLevel <= 51) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
}
neopixelStrip.show()
