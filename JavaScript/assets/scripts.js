var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0;

/*

let count = 0;
const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}

*/

/*function increment (){
   currentNumber++;
        currentNumberWrapper.innerHTML = currentNumber;
}   */

function increment (){
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber
}

function decrement (){
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber
}
/*
function cor (){
    if currentNumber < 0;
        
    if currentNumber > 0;
        pintar de azul;
    else
        pintar de preto;
}
*/
/*
    1. Tente implementar os eventos usando o método addEventListener.
    2. Crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor (ex.: 0 <= count =< 10).
    3. Mude a cor do texto em CURRENT_NUMBER para vermelho quando o número for negativo.

*/