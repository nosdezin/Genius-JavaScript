const btnverm = document.getElementById("verm");
const btnverd = document.getElementById("verd");
const btnazul = document.getElementById("azul");
const btnamarelo = document.getElementById("amarelo");

let posSequencia = 0;
let valorAtual = 0;
let lista = [];
let sequencia = [];
let QuantidadePartidas = 7;

function getRandomInt() {
  return Math.floor(Math.random() * (4 - 1 + 1) + 1);
}

const reset = () => {
  alert("ERROU, TENTE NOVAMENTE");

  posSequencia = 0;
  valorAtual = 0;
  sequencia = [];
  lista = [];

  inicio();
};

const inicio = () => {
  sequencia.push(getRandomInt());
  intervalo();
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
    if (sequencia.length == QuantidadePartidas) {
      alert("Parabéns, você ganhou");
      console.log(lista);

      posSequencia = 0;
      valorAtual = 0;
      sequencia = [];
      lista = [];

      inicio();
    } else {
      posSequencia = 0;
      valorAtual = 0;

      sequencia.push(getRandomInt());
      intervalo();
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

const Btn = (valor) => {
  valorAtual = valor;
  verificacao();
};

//===================================

const brilho = (btn) => {
  btn.style.opacity = 0.6;
  setTimeout(() => {
    btn.style.opacity = 1;
  }, 1000);
};

const intervalo = () => {
  let LastSeq = sequencia.length - 1;
  switch (sequencia[LastSeq]) {
    case 1:
      lista.push(btnverm);
      break;
    case 2:
      lista.push(btnverd);
      break;
    case 3:
      lista.push(btnazul);
      break;
    case 4:
      lista.push(btnamarelo);
      break;
    default:
      console.error("Erro na função intervalo, elemento:", sequencia[LastSeq]);
      break;
  }

  for (let index = 0; index <= lista.length - 1; index++) {
    setTimeout(() => {
      brilho(lista[index]);
    }, 820 * index);
  }
};

inicio();
