var seconds = 00;
var minutes = 00;
var hours = 00;

var interval;

    /**
    *    Função pra padronizar os cronometros
    * 
    *    Function to standardize the timer
    */

function validate(digits) {

    if(digits < 10) {
        return('0' + digits);
    }

    else {
        return(digits);
    }

}

    /**
    *  Função pra inicar o cronometro
    * 
    *  Function to start timer
    */

function start() {
    timerCounter();
    interval = setInterval(timerCounter, 1000);
}

    /**
    * Função pra pausar o cronometro
    * 
    * Function to pause timer    
    */

function pause() {
    clearInterval(interval);
}

    /**
     * Função pra parar o cronometro
     * 
     * Function to stop timer
     */

function stop() {
    clearInterval(interval);
    minutes = 00;
    seconds = 00;

    document.getElementById('counter').innerText = '00:00:00';
}

    /**
     * Função pra configurar segundos, minutos e 
     * 
     * Function to configure seconds, minutes and hours
     */

function timerCounter() {

    /**
     * seconds ++:
     * 
     * Adiciona 1 segundo quando inicia a contagem
     * 
     * Adds 1 second when starting countdown
     */

    seconds++

    /**
     * Se segundo for igual a 60, adiciona 1 minuto ao cronometro
     * e os segundos ficam iguais a 0
     * 
     * If second is equal to 60, add 1 minute to the timer
     * and seconds are equal to 0
     */

    if(seconds == 60) {
        minutes++;
        seconds = 00;

        if(minutes == 60) {
            minutes = 00;
            hours++;
        }
    }

    /**
     * Se o minuto for igual a 60, adiciona 1 hora ao cronometro
     * e os minutos ficam iguais a 0
     * 
     * If the minute equals 60, add 1 hour to the timer
     * and the minutes are equal to 0
     */

    document.getElementById('counter').innerText = validate(hours)+':'+validate(minutes)+':'+validate(seconds);
}