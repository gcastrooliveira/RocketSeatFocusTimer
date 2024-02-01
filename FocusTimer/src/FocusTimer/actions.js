import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){

    state.isRunning = document.documentElement.classList.toggle('running');

    //inicia o timer
    timer.countdown();

    //tocar o som dos botões
    sounds.buttonPressAudio.play()
}

export function reset(){
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();

    sounds.buttonPressAudio.play()
}

export function set(){

    //torna os minutos editáveis pelo usuário
    el.minutes.setAttribute('contenteditable', true)

    //ao clicar para setar o tempo, foca nos minutos
    el.minutes.focus()
}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle('music-on');

    if(state.isMute)
        sounds.bgAudio.play()
    else
        sounds.bgAudio.pause()
    
}