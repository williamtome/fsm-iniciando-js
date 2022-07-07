const valor = {
    chave: 100,
    nome: 'xablau'
}

valor.nome = 'William'

console.log(valor.nome);

const notas = [1, 2, 3, 4, 5]

const dobrado = notas.map(function(item) {
    return {
        original: item,
        dobrado: item * 2
    }
})

console.log(dobrado);

const dobrar = item => item * 2
const somentePares = item => item % 2 == 0
const somar = (acumulado, atual) => acumulado + atual

const paresDobrados = notas.filter(somentePares).map(dobrar)
console.log(paresDobrados);

const somatorio = paresDobrados.reduce(somar);
console.log(somatorio);
