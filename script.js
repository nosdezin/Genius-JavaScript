const pSEQ = document.getElementById("seq");
const pPQ = document.getElementById("pq");
const plSEQ = document.getElementById("va");

let posSequencia = 0;
let valorAtual = 0;
let sequencia = [];

function getRandomInt() {
  return Math.floor(Math.random() * (4 - 1 + 1) + 1);
}

const reset = () => {
  alert("ERROU, TENTE NOVAMENTE");

  posSequencia = 0;
  valorAtual = 0;
  sequencia = [];

  inicio();
};

const inicio = () => {
  sequencia.push(getRandomInt());

  pSEQ.innerText = `Sequencia:${sequencia}`;
  pPQ.innerText = `posição da sequencia:${posSequencia}`;
  plSEQ.innerText = `Tamanho da sequencia: ${sequencia.length}`;
};

const naSequencia = () => {
  if (valorAtual == sequencia[posSequencia]) {
    posSequencia++;
    valorAtual = 0;
  } else {
    reset();
  }
};

const fimSequencia = () => {
  if (valorAtual == sequencia[posSequencia]) {
    if (sequencia.length == 3) {
      alert("Parabéns, você ganhou");

      posSequencia = 0;
      valorAtual = 0;
      sequencia = [];

      inicio();
    } else {
      posSequencia = 0;
      valorAtual = 0;

      sequencia.push(getRandomInt());
    }
  } else {
    reset();
  }
};

const verificacao = () => {
  if (posSequencia == sequencia.length - 1) {
    fimSequencia();
  } else {
    naSequencia();
  }
};

const red = () => {
  valorAtual = 1;
  verificacao();

  pSEQ.innerText = `Sequencia:${sequencia}`;
  pPQ.innerText = `posição da sequencia:${posSequencia}`;
  plSEQ.innerText = `Tamanho da sequencia: ${sequencia.length}`;
};
const green = () => {
  valorAtual = 2;
  verificacao();

  pSEQ.innerText = `Sequencia:${sequencia}`;
  pPQ.innerText = `posição da sequencia:${posSequencia}`;
  plSEQ.innerText = `Tamanho da sequencia: ${sequencia.length}`;
};
const blue = () => {
  valorAtual = 3;
  verificacao();

  pSEQ.innerText = `Sequencia:${sequencia}`;
  pPQ.innerText = `posição da sequencia:${posSequencia}`;
  plSEQ.innerText = `Tamanho da sequencia: ${sequencia.length}`;
};
const yellow = () => {
  valorAtual = 4;
  verificacao();

  pSEQ.innerText = `Sequencia:${sequencia}`;
  pPQ.innerText = `posição da sequencia:${posSequencia}`;
  plSEQ.innerText = `Tamanho da sequencia: ${sequencia.length}`;
};

inicio();
