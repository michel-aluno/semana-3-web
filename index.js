console.log("=== BLOCO 1: FUNDAMENTOS E VARIÁVEIS ===\n");

let pontos = 50;
pontos += 10;
console.log("1. Pontos atualizados:", pontos);

const MAX_PONTOS = 100;
console.log("2. MAX_PONTOS:", MAX_PONTOS);

try {
  MAX_PONTOS = 200;
} catch (erro) {
  console.error("2. Erro ao tentar reatribuir MAX_PONTOS:", erro.message);
}

const texto = "Olá, JS!";
const numero = 42;
const booleano = true;
let naoDefinido;
const nulo = null;

console.log("\n3. Verificação de tipos primitivos:");
console.log("texto:", typeof texto);
console.log("numero:", typeof numero);
console.log("booleano:", typeof booleano);
console.log("naoDefinido:", typeof naoDefinido);
console.log("nulo:", typeof nulo);

const nome = "Michel";
const linguagem = "JavaScript";

const fraseTemplate = `Olá, meu nome é ${nome} e estou estudando ${linguagem}.`;
const fraseConcatenacao = "Olá, meu nome é " + nome + " e estou estudando " + linguagem + ".";

console.log("\n4. Comparação de Strings:");
console.log("Template Literal:", fraseTemplate);
console.log("Concatenação +  :", fraseConcatenacao);


console.log("\n==================================================");
console.log("=== BLOCO 2: FUNÇÕES ===");
console.log("==================================================\n");

console.log("1. Teste de Hoisting com Função Declarada:");
console.log("ehMaiorDeIdade(20):", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

console.log("\n2. Teste de Hoisting com Função de Expressão:");
try {
  console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
  console.error("Erro ao chamar expressão antes de declarar:", erro.message);
}

const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};

function dobroDeclarado(n) {
  return n * 2;
}

const dobroExpressao = function (n) {
  return n * 2;
};

const dobroArrow = (n) => n * 2;

console.log("\n3. Função Dobro nas três formas:");
console.log("Declarada (5):", dobroDeclarado(5));
console.log("Expressão (5):", dobroExpressao(5));
console.log("Arrow (5)    :", dobroArrow(5));

const dobroComPadrao = (n = 1) => n * 2;

console.log("\n4. Parâmetro com valor padrão:");
console.log("Chamada com argumento (7) :", dobroComPadrao(7));
console.log("Chamada sem argumento ()  :", dobroComPadrao());


console.log("\n==================================================");
console.log("=== BLOCO 3: CONTROLE DE FLUXO ===");
console.log("==================================================\n");

function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log("1. Classificação de notas:");
console.log("Nota 7.5:", classificarNota(7.5));
console.log("Nota 4.0:", classificarNota(4.0));

const corSemaforo = "Amarelo";

console.log("\n2. Estado do Semáforo:");
switch (corSemaforo.toLowerCase()) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida");
}

console.log("\n3. Tabuada do 5 (laço for):");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n4. Contagem regressiva (laço while):");
let contador = 5;
while (contador >= 1) {
  console.log(contador);
  contador--;
}

console.log("\n5. Par ou Ímpar (1 a 20) com laço for:");
for (let i = 1; i <= 20; i++) {
  const tipo = i % 2 === 0 ? "par" : "ímpar";
  console.log(`${i} é ${tipo}`);
}

console.log("\n5. Par ou Ímpar (1 a 20) com laço while:");
let j = 1;
while (j <= 20) {
  const tipo = j % 2 === 0 ? "par" : "ímpar";
  console.log(`${j} é ${tipo}`);
  j++;
}

function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda-feira";
    case 3:
      return "Terça-feira";
    case 4:
      return "Quarta-feira";
    case 5:
      return "Quinta-feira";
    case 6:
      return "Sexta-feira";
    case 7:
      return "Sábado";
    default:
      return "Dia inválido (digite um número de 1 a 7)";
  }
}

console.log("\n6. Verificação do dia da semana:");
console.log("Dia 1:", diaDaSemana(1));
console.log("Dia 5:", diaDaSemana(5));
console.log("Dia 9:", diaDaSemana(9));