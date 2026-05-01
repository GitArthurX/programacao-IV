const btnIniciar = document.getElementById("btn-iniciar");
const spanPontos = document.getElementById("pontos");
const spanTempo = document.getElementById("tempo");
const alvo = document.getElementById("alvo");

let pontos = 0;
let tempo = 15;
let loopTempo;
let loopMovimento;

btnIniciar.addEventListener("click", () => {
    pontos = 0;
    tempo = 15;
    spanPontos.textContent = pontos;
    spanTempo.textContent = tempo;

    btnIniciar.classList.add("escondido");
    alvo.classList.remove("escondido");

    loopTempo = setInterval(() => {
        tempo--;
        spanTempo.textContent = tempo;

        if (tempo <= 0) {
            encerrarJogo();
        }
    }, 1000);

    loopMovimento = setInterval(moverAlvo, 800); 
    moverAlvo();
});

alvo.addEventListener("click", () => {
    pontos++;
    spanPontos.textContent = pontos;
    moverAlvo();
});

function moverAlvo() {
    const maxLargura = window.innerWidth - 100; 
    const maxAltura = window.innerHeight - 100;

    const x = Math.floor(Math.random() * maxLargura);
    const y = Math.floor(Math.random() * (maxAltura - 120)) + 120; 

    alvo.style.left = x + "px";
    alvo.style.top = y + "px";
}

function encerrarJogo() {
    clearInterval(loopTempo);
    clearInterval(loopMovimento);

    alvo.classList.add("escondido");
    btnIniciar.classList.remove("escondido");
    btnIniciar.textContent = "Jogar Novamente";

    setTimeout(() => {
        alert("Fim de Jogo! Você conseguiu " + pontos + " pontos!");
    }, 50);
}