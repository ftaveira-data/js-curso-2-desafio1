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

//7  Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
//let peso = parseFloat(prompt("Digite seu peso:"));
//let altura = parseFloat(prompt("Digite sua altura:"));
//
//function calcularImc(peso, altura) {    
//    return peso/(Math.pow(altura, 2));
//};
//
//let resultadoImc = calcularImc(peso, altura);
//alert(`O teu IMC é ${resultadoImc.toFixed(2)}`);

//8 Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(n) {
    console.log("n:", n); 
    if (n <= 1) return 1;
    return n * calcularFatorial(n - 1);
}

console.log("Resultado da Fatorial:", calcularFatorial(8));


//9 Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

//let valorConverter = parseFloat(prompt("Digite o valor que gostaria de converter: "));
//
//function calcularCambio(valorConverter) {    
//    return parseFloat(valorConverter * 4.80);
//}
//
//let valorConvertido = calcularCambio(valorConverter);
//alert(`O total final convertido será de R$${valorConvertido.toFixed(2)}`);

//10 Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularSala(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`A área da sala é: ${area} m²`);
    console.log(`O perímetro da sala é: ${perimetro} metros`);
}
calcularSala(3, 5);


//11 Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14

let raio = parseFloat(prompt("Digite o raio da sala circular (em metros):"));

function calcularSalaCircular(raio) {
    const pi = 3.14;
    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;

    alert(`Área: ${area.toFixed(2)} m²\nPerímetro: ${perimetro.toFixed(2)} metros`);
}

calcularSalaCircular(raio);


//12 Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

let tabuada = parseInt(prompt("Qual tabuada você gostaria de calcular?"));

function calcularTabuada(numero) {
    console.log(`Tabuada do ${numero}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

calcularTabuada(tabuada);
