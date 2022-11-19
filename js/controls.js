export default function Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace
}) {
    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
        buttonIncrease.classList.add('hide')
        buttonDecrease.classList.add('hide')
    }

    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        buttonIncrease.classList.remove('hide')
        buttonDecrease.classList.remove('hide')
    }

    function reset() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
        buttonIncrease.classList.remove('hide')
        buttonDecrease.classList.remove('hide')
    }

    function getMinutes() {
        let newMinutes = prompt("Quantos minutos?")
        if (!newMinutes) {
            return false
        }

        return newMinutes
    }

    function soundForest() {
        buttonSoundForest.classList.add('selected')
        buttonSoundRain.classList.remove('selected')
        buttonSoundCoffeeShop.classList.remove('selected')
        buttonSoundFireplace.classList.remove('selected')
    }

    function soundRain() {
        buttonSoundRain.classList.add('selected')
        buttonSoundForest.classList.remove('selected')
        buttonSoundCoffeeShop.classList.remove('selected')
        buttonSoundFireplace.classList.remove('selected')
    }

    function soundCoffeeShop() {
        buttonSoundCoffeeShop.classList.add('selected')
        buttonSoundRain.classList.remove('selected')
        buttonSoundForest.classList.remove('selected')
        buttonSoundFireplace.classList.remove('selected')
    }

    function soundFireplace() {
        buttonSoundFireplace.classList.add('selected')
        buttonSoundRain.classList.remove('selected')
        buttonSoundCoffeeShop.classList.remove('selected')
        buttonSoundForest.classList.remove('selected')
    }

    return {
        reset,
        play,
        pause,
        getMinutes,
        soundForest,
        soundRain,
        soundCoffeeShop,
        soundFireplace
    }
}