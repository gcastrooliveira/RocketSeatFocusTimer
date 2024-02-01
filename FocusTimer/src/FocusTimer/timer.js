import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js';
import { kitchenTimer } from './sounds.js';

export function countdown(){

    if(!state.isRunning)
        return

    //reseta o timeout de cada iteração recursiva, para não criar um countdown a cada click,
    //acelerando o timer
    clearTimeout(state.countdownId)

    //**minha lógica**
    // if(state.seconds <= 0){
    //     if(state.minutes > 0){
    //         state.minutes--
    //         state.seconds = 59
    //         updateDisplay(state.minutes, state.seconds)
    //     }else{
    //         reset();
    //         return
    //     }
    // }else{
    //     state.seconds--
    //     updateDisplay(state.minutes, state.seconds)
    // }
    //não funciona o reset, porque mexe diretamente com o state

    //**lógica da rocketseat**
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if(seconds < 0){
        seconds = 59
        minutes--
    }

    if(minutes < 0){
        reset();
        kitchenTimer.play()
        return
    }

    updateDisplay(minutes, seconds)
    //**Fim Rocketseat
           
    state.countdownId = setTimeout(() => countdown(), 1000);
}

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    el.minutes.textContent = String(minutes).padStart(2, "0");
    el.seconds.textContent = String(seconds).padStart(2, "0");
}