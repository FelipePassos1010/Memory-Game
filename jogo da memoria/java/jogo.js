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

const checkfim = () => {
    const desativarcartas = document.querySelectorAll('.desativar_carta');

    if( desativarcartas.length === 20) {
        alert('Parabéns, você ganhou!!!');
    }
}


const checkCartas = () => {
    const primeiraFigura = primeiraCarta.getAttribute('data-figura');
    const segundaFigura = segundaCarta.getAttribute('data-figura');

    if(primeiraFigura === segundaFigura){

        primeiraCarta.firstChild.classList.add('desativar_carta');
        segundaCarta.firstChild.classList.add('desativar_carta');
        primeiraCarta = '';
        segundaCarta = '';

        checkfim();

    } else {
        
        setTimeout(() => {
            primeiraCarta.classList.remove('reveal_carta');
            segundaCarta.classList.remove('reveal_carta');
            
            primeiraCarta = '';
            segundaCarta = '';
        }, 500);
        
    }


}

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
  carta.setAttribute('data-figura', figura)

  return carta;
};

const Jogo = () => {
  const duplicar = [...figuras, ...figuras];
  const embaralhar = duplicar.sort(() => Math.random() - 0.5);

  embaralhar.forEach((figura) => {
    const card = criarcarta(figura);
    grid.appendChild(card);
  });
};

const tempo = () => {

  setInterval(() => {

    const atualtimer =Number(timer.innerHTML);
    timer.innerHTML = atualtimer + 1

  }, 1000)
}

window.onload = () => {
  const nomejogador = localStorage.getItem('jogador');
  spanJogador.innerHTML = nomejogador

  tempo();
  Jogo();
}


