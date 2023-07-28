grove.onGesture(GroveGesture.Right, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
input.onPinPressed(TouchPin.P2, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Wedding), music.PlaybackMode.InBackground)
})
grove.onGesture(GroveGesture.Left, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.InBackground)
})
input.onPinPressed(TouchPin.P1, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
})
