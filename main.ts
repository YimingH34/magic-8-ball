let the_outcome = 0
// When you press A, everything will be reset.
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    the_outcome = 0
})
// When you shake something, it will set the outcome to 0,1,2 and it will act accordingly.
input.onGesture(Gesture.Shake, function () {
    the_outcome = randint(0, 2)
    if (the_outcome == 2) {
        basic.showString("YES")
    } else if (the_outcome == 1) {
        basic.showString("NO")
    } else {
        basic.showString("MAYBE")
    }
})
// This will always run ASK A QUESTION until you shake it
basic.forever(function () {
    basic.showString("ASK A QUESTION")
})
