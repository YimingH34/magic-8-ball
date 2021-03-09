let the_outcome = 0
// When you press A, everything will be reset.
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    the_outcome = 0
})
// When you shake something, it will set the outcome to 0,1,2 and it will act accordingly.
input.onGesture(Gesture.Shake, function () {
    // Make the code to choose either 0,1,2
    the_outcome = randint(0, 2)
    // If the number is one then it will show yes, if the number is 1 then it will show no otherwise it will show maybe
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
