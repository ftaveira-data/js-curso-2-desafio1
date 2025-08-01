let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";


function verificarChute() {
    console.log("O botão foi clicado!");
};

function verificarAlerta() {
    alert("Eu amo JS");
};
window.verificarAlerta = verificarAlerta;

function verificarCidade() {
let cidade = prompt("Fale uma cidade do Brasi:");
    alert(`Estive em ${cidade} e lembrei de você!`);
};

function verificarSoma() {

let primeiroNumero = parseInt(prompt("Vamos fazer uma soma, digite o primeiro numero inteiro:"));
let segundoNumero = parseInt(prompt("digite o segundo numero inteiro:"));
let soma = (primeiroNumero + segundoNumero); 

alert(`A soma de ${primeiroNumero} + ${segundoNumero} deu o total de ${soma}!`);
};

    
