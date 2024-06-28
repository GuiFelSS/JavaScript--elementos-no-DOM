const html = document.querySelector('html');
const botaoInicial = document.querySelector('app__card-primary-button')
const focBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

focBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
});

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
});

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
});

const duracaoFoco = 1500;
const duracaoDescansoCurto = 300;
const duracaoDescansoLongo = 900;
