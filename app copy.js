//1 Criar uma função que exibe "Olá, mundo!" no console.
function exibirOlaMundo() {
    console.log("Olá, Mundo!");
};
exibirOlaMundo();


//2 Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function receberNome(nome) {
    console.log("Olá, " + nome +"!" );    
};
receberNome("José");


//3 Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrarNumero(numero) {
    return numero * 2;
};

let resultado = dobrarNumero(10);
console.log(resultado);


//4 Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaSimples(a, b, c) {
    return (a + b + c)/3; 
};

let resultadoMedia = mediaSimples(5, 7, 9);
console.log(resultadoMedia)


//5 Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumero(a, b) {
    if (a < b) {
        return(b);
    } else if (a > b) {
        return(a);        
    } else {
        return "Os números são iguais";
    }
}

let resultadoMaiorNumero = maiorNumero(15, 10);
console.log(resultadoMaiorNumero);


//6 Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function numeroQuadrado(a) {
    return Math.pow(a, 2);
};

let resultadoNumeroQuadrado = numeroQuadrado(8);
console.log(resultadoNumeroQuadrado);