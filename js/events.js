import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    minutesDisplay,
    secondsDisplay,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace,
    buttonDarkMode,
    buttonLightMode
} from "./elements.js"

export default function ({ controls, timer, sound }) {
    buttonPlay.addEventListener('click', () => {
        controls.play()
        timer.countDown()
        sound.pressButton()
    })

    buttonPause.addEventListener('click', () => {
        controls.pause()
        timer.hold()
        sound.pressButton()
    })

    buttonStop.addEventListener('click', () => {
        controls.reset()
        timer.reset()
        sound.pressButton()
    })

    buttonSet.addEventListener('click', () => {
        let newMinutes = controls.getMinutes()

        if (!newMinutes) {
            timer.reset()
            return
        }

        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })

    buttonIncrease.addEventListener('click', () => {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        if (minutes + 5 > 90) {
            return alert("Limite máximo de 90 minutos")
        }

        minutes += 5

        timer.updateDisplay(minutes, seconds)
        timer.updateMinutes(minutes)
        sound.pressButton()
    })

    buttonDecrease.addEventListener('click', () => {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        if (minutes - 5 < 0) {
            return alert("Limite minimo de 1 minuto")
        }

        minutes -= 5

        timer.updateDisplay(minutes, seconds)
        timer.updateMinutes(minutes)
        sound.pressButton()
    })

    buttonSoundForest.addEventListener('click', () => {
        const forestSound = "../assets/Floresta.wav"
        controls.soundForest()
        sound.changeSound(forestSound)
    })

    buttonSoundRain.addEventListener('click', () => {
        const rainSound = "../assets/Chuva.wav"
        controls.soundRain()
        sound.changeSound(rainSound)

    })

    buttonSoundCoffeeShop.addEventListener('click', () => {
        const coffeeShopSound = "../assets/Cafeteria.wav"
        controls.soundCoffeeShop()
        sound.changeSound(coffeeShopSound)
    })

    buttonSoundFireplace.addEventListener('click', () => {
        const lareiraSound = "../assets/Lareira.wav"
        controls.soundFireplace()
        sound.changeSound(lareiraSound)
    })

    buttonLightMode.addEventListener('click', () => {
        buttonDarkMode.classList.remove('hide')
        buttonLightMode.classList.add('hide')

        document.querySelector('body').classList.add('dark')
    })

    buttonDarkMode.addEventListener('click', () => {
        buttonDarkMode.classList.add('hide')
        buttonLightMode.classList.remove('hide')

        document.querySelector('body').classList.remove('dark')
    })
}