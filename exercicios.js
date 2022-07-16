// 1) Dado um vetor de números, como poderia ser realizada a soma
// de todos os valores utilizando reduce
const numeros = [5, 1, 8, 7, 2, 4]

const somador = (acumulador, atual) => acumulador + atual;
const somaDosValores = numeros.reduce(somador)

console.log('Soma total dos numeros:', somaDosValores);

// 2) Dado um vetor de números, como poderia ser realizada a soma 
// de todos os valores pares utilizando reduce e filter.
const numerosPares = item => item % 2 === 0
const somaDosPares = numeros.filter(numerosPares).reduce(somador)

console.log('Soma dos numeros pares:', somaDosPares);

// 3) Dado um vetor de números, como poderia ser
// realizada a soma de todos os valores ímpares
// utilizando reduce e filter.
const numerosImpares = item => item % 2
const somaDosImpares = numeros.filter(numerosImpares).reduce(somador);

console.log('Soma dos números impares:', somaDosImpares);

// 4) Dado um vetor de valores, retorne um objeto 
// com quantas vezes cada valor está presente no vetor 
// - Dica: utilize reduce
const quantidadeDeVezes = numeros.reduce((acumulador, atual) => {
    console.log(acumulador);
    let existeNumero = numeros.includes(atual)

    if (existeNumero) {
        return {
            numero: atual,
            vezes: acumulador
        }
    }
}, 1)

console.log(quantidadeDeVezes);
