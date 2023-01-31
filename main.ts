function updatecoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player a; " + PA)
    OLED.newLine()
    OLED.writeStringNewLine("Player B; " + PB)
    OLED.newLine()
    OLED.writeStringNewLine("ties; " + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds; " + Rounds)
}
input.onGesture(Gesture.Shake, function () {
	
})
function reset () {
    OLED.init(128, 64)
    Rounds = 0
    Ties = 0
    PA = 0
    PB = 0
    OLED.writeStringNewLine("Shall We play a game ")
    basic.pause(2000)
    updatecoreboard()
}
let Rounds = 0
let Ties = 0
let PB = 0
let PA = 0
reset()
