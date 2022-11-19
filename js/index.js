import Controls from './controls.js';
import Timer from './timer.js';
import Sound from './sounds.js';
import Events from './events.js';
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    minutesDisplay,
    secondsDisplay,
    buttonIncrease,
    buttonDecrease,
    buttonSoundForest,
    buttonSoundRain,
    buttonSoundCoffeeShop,
    buttonSoundFireplace
} from './elements.js';

const controls = Controls({
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
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})