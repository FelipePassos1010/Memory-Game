const input = document.querySelector('.login_input');
const buttons = document.querySelectorAll('.login_button');
const form = document.querySelector('.login_form');

const validateInput = ({ target }) => {
    if (target.value.length >= 3) {
        buttons.forEach(button => button.removeAttribute('disabled'));
        return;
    }

    buttons.forEach(button => button.setAttribute('disabled', ''));
}

const handleSubmit = (event) => {
    event.preventDefault();

    const selectedButton = event.submitter;
    const nivelDificuldade = selectedButton.getAttribute('data-dificuldade');

    localStorage.setItem('jogador', input.value);
    localStorage.setItem('dificuldade', nivelDificuldade);
    window.location = 'pages/jogo.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
