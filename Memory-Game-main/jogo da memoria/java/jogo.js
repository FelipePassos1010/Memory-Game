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
  'https://midiateca.es.gov.br/museucolono/wp-content/uploads/tainacan-items/732/2861/74.2.9-001-scaled.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763876235011353_0451b54d-a826-4550-a429-8841834a8540_integracao_files_DEC.2.1.13-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763876383974625_f1b5eec1-021f-4459-afaf-a9a2d16fbe77_integracao_files_DEC.2.1.24-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763876642356527_5485a60b-0d2b-4126-aaba-c7971b061ae0_integracao_files_DEC.2.2.7-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763877164175406_1e4934e9-50cb-4a6b-8967-6f9c4f4319ee_integracao_files_DEC.2.2.47-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763876442087771_bd935f0c-bc09-4fd1-adb3-a6d33e3b5479_integracao_files_DEC.2.2.45-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763876840476213_a45bffff-7db3-4a93-b38a-85b220eff79a_integracao_files_DEC.2.2.21-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763877089906057_74a0f653-ddc3-42bd-9c67-6a21c8ab9257_integracao_files_DEC.2.2.43-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763877020608139_698198e9-0cbf-4fd3-ae47-2d10a2687a22_integracao_files_DEC.2.2.71-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763877125235845_b5ec57b2-40db-473e-98ee-8cf868a7cfd9_integracao_files_DEC.2.2.79-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763876956385505_e924876e-18e8-4da0-9b52-9176b15e8faf_integracao_files_DEC.2.5.20-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763877282166763_d655105c-db6b-441b-a203-04c1b57b27dd_integracao_files_DEC.2.4.2-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763876980841754_b6f58866-a51f-457b-94d2-63db6bf48ce2_integracao_files_DEC.2.5.22-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763877298215593_8dbe4651-0b1c-4ccb-bfaa-df803f3ed550_integracao_files_DEC.2.4.3-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763877319008544_6a85062e-5f67-4f7f-8f2c-a468be779435_integracao_files_DEC.2.4.5-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763877078781344_2b831097-683a-43ac-bdd5-6dbcf62f8ca4_integracao_files_DEC.2.5.31-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763877400092794_3d779c89-0e1c-4b78-80f1-ed4fde216330_integracao_files_DEC.2.4.11.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763877099636583_bd0db3af-3099-4ad5-9bb8-ba84ef32db0c_integracao_files_DEC.2.5.33-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763877264881547_f6315bdb-52e5-451f-924b-af8eb5c371a9_integracao_files_DEC.2.5.43.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763877211468341_059c8069-4abd-4feb-b210-330d2a152d80_integracao_files_DEC.2.5.92-scaled-1.jpg',
  'https://midiateca.es.gov.br/site/wp-content/uploads/2023/04/1763877313517010_d6176b79-8284-45ef-86d2-bc70e9a51cf7_integracao_files_DEC.2.5.98-scaled-1.jpg'

];

function pegarItemAleatorio(lista) {
  const indiceAleatorio = Math.floor(Math.random() * lista.length);
  return lista.splice(indiceAleatorio, 1)[0];
}

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
  const embaralhar = [];
  const figurasDisponiveis = figuras.slice(); // Cria uma cópia da lista original

  for (let i = 0; i < numCartas; i++) {
    const figuraAleatoria = pegarItemAleatorio(figurasDisponiveis);
    embaralhar.push(figuraAleatoria);
    embaralhar.push(figuraAleatoria);
  }
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
