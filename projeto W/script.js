/*alterador de texto*/

const textoAlternavel = document.getElementById('texto-alternavel');
const alternarTextoBtn = document.getElementById('alterar-texto-btn');

const textos = ['Go! Go! Zeppeli!', 'Dojyaa~n!', 'ZA WARUDO! TOKI WO TOMARE!', 'SPIN!'];
let indiceTexto = 0;

alternarTextoBtn.addEventListener('click', function() {
    indiceTexto = (indiceTexto + 1) % textos.length;
    textoAlternavel.textContent = textos[indiceTexto];
});

/*alterar imagem*/

const imagem = document.getElementById('imagem');
const alternarImagemBtn = document.getElementById('alterar-imagem-btn');

const urlsimagens = ["imagem1.jpg", 'imagem2.jpg', 'imagem3.jpg', "imagem5.jpg"];
let indiceImagem = 0;

alternarImagemBtn.addEventListener('click', function() {
    indiceImagem = (indiceImagem + 1) % urlsimagens.length;
    imagem.src = urlsimagens[indiceImagem];
});

/*Alterar tema*/

const alterarTemaBtn = document.getElementById('alterar-tema-btn')
let temaAtual = 'claro';

alterarTemaBtn.addEventListener('click', function() {
    const body = document.body;
    if (temaAtual == 'claro') {
        body.classList.remove('tema-claro');
        body.classList.add('tema-escuro');
        alterarTemaBtn.textContent = 'Ativar tema Claro';
        temaAtual = 'escuro';
    } else {
        body.classList.remove('tema-escuro');
        body.classList.add('tema-claro');
        alterarTemaBtn.textContent = 'Ativar tema Escuro';
        temaAtual = 'claro';
    }
});

document.body.classList.add('tema-claro');

/*Contador de Clicks*/

const contadorDisplay = document.getElementById('contador');
const contadorBtn = document.getElementById('contador-btn');
let contador = 0;

contadorBtn.addEventListener('click', function() {
    contador+=21;
    contadorDisplay.textContent = contador;

    if (contador >= 150) {
        window.location.assign('https://i.pinimg.com/originals/03/51/2a/03512a517c0777ad5cd0f1a0257b3a24.gif');
    }
});

/*Barra de progresso*/

const progressoAtual = document.getElementById('progresso-atual');
const avancarProgressoBtn = document.getElementById('avancar-progresso-btn');
let progresso = 0;

avancarProgressoBtn.addEventListener('click', function() {
    progresso += 40;
    if (progresso > 100) {
        progresso = 100;
    }
    progressoAtual.style.width = progresso + '%';

    if (progresso == 100) {
        window.location.assign('https://youtu.be/4GEexKSrpRk');
    }
});