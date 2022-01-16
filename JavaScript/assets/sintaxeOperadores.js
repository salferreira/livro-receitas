/*
    Crie uma função que recebe dois números como parâmetros.

    Confira se os números são iguais.

    Confira se a soma dos números é maior que 10 ou menor que 20.

    Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
*/



function compNum(n1,n2){
    const compf1 = frase1(n1,n2);
    const compf2 = frase2(n1,n2);

    return `${compf1} ${compf2}`;
}

function frase1(n1,n2){
    let comparaF1= `Os número ${n1} e ${n2}`;
    let simNao = 'não';

    if (n1 === n2){
        simNao='';
    }

    return `${comparaF1} ${simNao} são iguais`;
    }

function frase2 (n1,n2){
    let soma = n1+n2;
    maior10 = 'menor que';
    maior20 = 'menor que';

    if (soma > 10){
        maior10 = 'maior que';}
    if (soma === 10){
        maior10 = 'igual a';}

    if (soma > 20){
        maior20 = 'maior que';}
    if (soma === 20){
        maior20 = 'igual a';}

    return `e o resultado da soma dos números é ${maior10} 10 e ${maior20} 20`;
    }

console.log (compNum(15,15))