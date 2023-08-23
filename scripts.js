//scripts.js
// alert("Funcionou...");

// VARIÁVEIS: int, float, string, boolean, function, null, undefined
// CASE SENSITIVE -> diferencia maiúsculas de minúsculas
// JAVASCRIPT DINAMICAMENTE TIPADO -> variáveis podem mudar de tipo 
let nome = "Aline";
let idade = 17;
let presente = false;
let sobrenome = "Siqueira";

imprime (nome);
imprime (nome + " tem " + idade + " anos de idade.")
imprime ("O nome completo da aluna é" + " " + nome + " " + sobrenome + ".")

let anoAtual = 2023;
let anoNascimento = 2006;
let anosDeVida = anoAtual - anoNascimento;
imprime (anosDeVida);

// ESTRUTURAS CONDICIONAIS
// OPERADORES CONDICIONAIS: >, <, >=, <=, == (igual a), !=
// OPERADORES LÓGICOS: && (E), || (OU), ! (NEGAÇÃO)
imprime("                    ");
imprime ("-------- IF --------");
if (idade < 18) {
    imprime("É menor de idade")
} else if (idade < 70){
    imprime("É adulto.")
} else {
    imprime("É idoso.")
}

if (idade < 16) {
    imprime("Não pode votar.")
} else if (idade < 18 || idade > 65){
    imprime("Voto Facultativo.")
} else {
    imprime("Voto Obrigatório.")
}

imprime("                    ");
imprime("-------- WHILE --------");
let cont = 1;
while (cont < 10) {
    imprime( cont );
    cont = cont + 1;
}

let dinheiro = 43;
let preco = 6;

while (dinheiro >= preco) {
    imprime( "Comprei um salgado");
    dinheiro = dinheiro - preco;
}

imprime("                    ");
imprime("-------- FOR --------");
for (let i = 1; i < 10; i++) {
    imprime (i);
}

// FUNÇÕES
imprime("                    ");
imprime("-------- FUNÇÕES --------");
function somar(num1, num2) {
    let resultado = num1 + num2;

    return resultado;
}

// chamando a função

let conta = somar(10,30);
conta = somar(conta, 21)
imprime(conta);

// FRUTAS
imprime("                    ");
imprime("-------- VETORES --------");
let frutas = ["abacate", "bergamota", "carambola", "damasco"];

console.log(frutas);

let primeiro = frutas[0];
console.log( "Primeiro:", primeiro)
let segundo = frutas[1];
console.log( "Segundo:", segundo)
let tam = frutas.length;
console.log(tam);
let ultimo = frutas[tam - 1];
console.log( "Ultimo:", terceiro)



//  Imprime uma mensagem na caixa

function imprime (msg, limpar) {
    let caixa = document.querySelector("#caixa");

    if (limpar)
        caixa.innerHTML = " ";

    caixa.innerHTML += msg + "<br />";
}
