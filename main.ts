let Schritte = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + convertToText(Schritte) + "S")
})
input.onButtonPressed(Button.AB, function () {
    Schritte = 0
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
    basic.showString("0")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + 0.3 * Schritte + "m")
})
input.onGesture(Gesture.ThreeG, function () {
    Schritte += 1
    if (Schritte % 100 == 0) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            # # # # #
            # # . # #
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
    if (Schritte % 10 == 0) {
        basic.showString("" + convertToText(Schritte) + "S")
    }
})
