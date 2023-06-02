const grid = document.querySelector('.grid');
const spanJogador = document.querySelector('.jogador');
const timer = document.querySelector('.timer');

const figuras = [
  'https://midiateca.es.gov.br/museucolono/wp-content/uploads/tainacan-items/732/845/72.1.446-001-scaled.jpg',
  'https://midiateca.es.gov.br/palacioanchieta/wp-content/uploads/tainacan-items/77/161/61.jpg',
  'https://midiateca.es.gov.br/palacioanchieta/wp-content/uploads/tainacan-items/77/199/DSF3518-Homero-Massena-Paisagem-com-arvore-em-primeiro-plano-143.jpg',
  'https://midiateca.es.gov.br/palacioanchieta/wp-content/uploads/tainacan-items/77/278/DSF6313-Marian-Rabello-Romaria-dos-Homens-e-Mulheres-162.jpg',
  'https://midiateca.es.gov.br/museucolono/wp-content/uploads/tainacan-items/732/3426/72.1.318-003-scaled.jpg',
  'https://midiateca.es.gov.br/museucolono/wp-content/uploads/tainacan-items/732/2272/72.1.29-009-scaled.jpg',
  'https://midiateca.es.gov.br/museucolono/wp-content/uploads/tainacan-items/732/2304/72.1.16-e-72.1.15-002-scaled.jpg',
  'https://midiateca.es.gov.br/museucolono/wp-content/uploads/tainacan-items/732/4873/2022.218-001-scaled.jpg',
  'https://midiateca.es.gov.br/museucolono/wp-content/uploads/tainacan-items/732/4886/2022.223-Cartaz-Dialogos-sobre-o-Patrimonio-scaled.jpg',
  'https://midiateca.es.gov.br/museucolono/wp-content/uploads/tainacan-items/732/2861/74.2.9-001-scaled.jpg'
];

let primeiraCarta = '';
let segundaCarta = '';
let timerInterval;
let seconds = 0;
let cartasViradas = 0;
let nivelDificuldade = '';

const checkfim = () => {
  let numCartasNecessarias;

  if (nivelDificuldade === 'facil') {
    numCartasNecessarias = 10;
  } else if (nivelDificuldade === 'medio') {
    numCartasNecessarias = 14;
  } else if (nivelDificuldade === 'dificil') {
    numCartasNecessarias = 20;
  } else {
    numCartasNecessarias = figuras.length;
  }

  if (cartasViradas === numCartasNecessarias) {
    clearInterval(timerInterval);
    const nomejogador = localStorage.getItem('jogador');
    alert(`Parabéns, ${nomejogador}! Você ganhou em ${seconds} segundos.`);
  }
};

const checkCartas = () => {
  const primeiraFigura = primeiraCarta.getAttribute('data-figura');
  const segundaFigura = segundaCarta.getAttribute('data-figura');

  if (primeiraFigura === segundaFigura) {
    primeiraCarta.firstChild.classList.add('desativar_carta');
    segundaCarta.firstChild.classList.add('desativar_carta');
    primeiraCarta = '';
    segundaCarta = '';

    cartasViradas += 2;

    checkfim();
  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove('reveal_carta');
      segundaCarta.classList.remove('reveal_carta');

      primeiraCarta = '';
      segundaCarta = '';
    }, 500);
  }
};

const mostrarCarta = ({ target }) => {
  if (target.parentNode.classList.contains('reveal_carta')) {
    return;
  }

  if (primeiraCarta === '') {
    target.parentNode.classList.add('reveal_carta');
    primeiraCarta = target.parentNode;
  } else if (segundaCarta === '') {
    target.parentNode.classList.add('reveal_carta');
    segundaCarta = target.parentNode;

    checkCartas();
  }
};

const criarcarta = (figura) => {
  const carta = document.createElement('div');
  const frente = document.createElement('div');
  const tras = document.createElement('div');

  frente.style.backgroundImage = `url(${figura})`;
  frente.style.backgroundSize = 'cover';
  frente.style.backgroundPosition = 'center';

  carta.className = 'carta';
  frente.className = 'carta face frente';
  tras.className = 'carta face tras';

  carta.appendChild(frente);
  carta.appendChild(tras);
  grid.appendChild(carta);

  carta.addEventListener('click', mostrarCarta);
  carta.setAttribute('data-figura', figura);

  return carta;
};

const Jogo = (numCartas) => {
  const embaralhar = figuras.slice(0, numCartas).concat(figuras.slice(0, numCartas));
  embaralhar.sort(() => Math.random() - 0.5);

  embaralhar.forEach((figura) => {
    const card = criarcarta(figura);
    grid.appendChild(card);
  });
};

const startTimer = () => {
  timerInterval = setInterval(() => {
    seconds++;
    timer.innerHTML = seconds;
  }, 1000);
};

window.onload = () => {
  const nomejogador = localStorage.getItem('jogador');
  nivelDificuldade = localStorage.getItem('dificuldade');
  spanJogador.innerHTML = nomejogador;

  let numCartas;

  if (nivelDificuldade === 'facil') {
    numCartas = 5;
  } else if (nivelDificuldade === 'medio') {
    numCartas = 7;
  } else if (nivelDificuldade === 'dificil') {
    numCartas = 10;
  } else {
    numCartas = figuras.length;
  }

  startTimer();
  Jogo(numCartas);
};
