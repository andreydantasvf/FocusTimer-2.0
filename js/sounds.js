export default function () {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    let bgAudio = new Audio("../assets/Chuva.wav")

    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function changeSound(urlSound) {
        bgAudio.load()
        bgAudio = new Audio(urlSound)

        bgAudio.play()
        bgAudio.loop = true
    }

    return {
        pressButton,
        timeEnd,
        changeSound,
        bgAudio
    }
}