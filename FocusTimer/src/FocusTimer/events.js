import {controls} from './elements.js';
import * as actions from './actions.js'
import * as el from './elements.js'
import state from './state.js'
import * as timer from './timer.js'

export function registerControls(){
    controls.addEventListener('click', (event) => {

        //pega o valor do atributo 'data-action' lá do HTML
        const action = event.target.dataset.action;

        if(typeof actions[action] != "function")
            return

        //executa a função cujo nome foi puxado do dataset acima
        actions[action]();

    })
}

export function setMinutes(){

    el.minutes.addEventListener('focus', () => {
        el.minutes.textContent = ''
    })

    //testa com regex se a tecla apertada é numero, apenas permitindo escrever, se for.
    //deprecated??
    el.minutes.onkeypress = (event) => /\d/.test(event.key)

    el.minutes.addEventListener('blur', (event) => {
        
        //se o tempo digitado for maior que 60, fixa em 60
        state.minutes = 
            event.currentTarget.textContent > 60 ? 60 : event.currentTarget.textContent
        
        state.seconds = 0
    
        timer.updateDisplay()
    
        el.minutes.removeAttribute('contenteditable')
    })

    
}