const telaLogin = document.getElementById('tela-login');
const appPrincipal = document.getElementById('app-principal');
const formLogin = document.getElementById('form-login');
const msgErro = document.getElementById('msg-erro');

const formPersonagem = document.getElementById('form-personagem');
const listaProfessores = document.getElementById('lista-professores');
const listaMutantes = document.getElementById('lista-mutantes');
const listaViloes = document.getElementById('lista-viloes');

const API_URL = 'http://localhost:3000/personagens'; 
const AUTH_URL = 'http://localhost:3000/auth/login';

let tokenJWT = '';

formLogin.addEventListener('submit', async function(evento) {
    evento.preventDefault(); 
    
    const usuarioDigitado = document.getElementById('username').value;
    const senhaDigitada = document.getElementById('password').value;

    try {
        const resposta = await fetch(AUTH_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: usuarioDigitado, password: senhaDigitada })
        });
        
        if (resposta.ok) {
            const dados = await resposta.json();
            tokenJWT = dados.access_token; 
            console.log("✅ Login realizado! Sistema destrancado.");
            
            telaLogin.style.display = 'none';
            appPrincipal.style.display = 'block';
            
            carregarPersonagens();
        } else {
            console.error("❌ Falha no login. Verifique o usuário e senha.");
            msgErro.style.display = 'block'; 
        }
    } catch (erro) {
        console.error("Erro ao tentar logar:", erro);
        alert("Erro de conexão. O servidor do NestJS está ligado?");
    }
});

async function carregarPersonagens() {
    try {
        const resposta = await fetch(API_URL);
        const personagens = await resposta.json();
        renderizarCards(personagens);
    } catch (erro) {
        console.error("Erro ao buscar personagens na API:", erro);
    }
}

function criarElementoCard(personagem) {
    const card = document.createElement('div');
    card.classList.add('Card_Mutante');

    card.innerHTML = `
        <h1>${personagem.titulo}</h1>
        <img src="${personagem.imagem}" alt="Foto ${personagem.titulo}">
        <p>${personagem.conteudo}</p>
        <p class="info-extra"><strong>Ordem:</strong> ${personagem.ordem}</p>
        <button onclick="deletarPersonagem(${personagem.id})" style="background: darkred; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 5px; margin-top: 10px;">Excluir</button>
    `;

    card.addEventListener('mouseenter', function(){
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', function(){
        card.style.transform = 'scale(1)';
    });

    return card;
}

function renderizarCards(personagens) {
    listaProfessores.innerHTML = ''; 
    listaMutantes.innerHTML = '';
    listaViloes.innerHTML = '';

    personagens.forEach(personagem => {
        const card = criarElementoCard(personagem);

        if (personagem.categoria === 'Professor') {
            listaProfessores.appendChild(card);
        } else if (personagem.categoria === 'Mutante') {
            listaMutantes.appendChild(card);
        } else if (personagem.categoria === 'Vilao') {
            listaViloes.appendChild(card);
        }
    });
}

formPersonagem.addEventListener('submit', async function(evento) {
    evento.preventDefault(); 

    const novoPersonagem = {
        titulo: document.getElementById('titulo').value,
        conteudo: document.getElementById('conteudo').value,
        imagem: document.getElementById('imagem').value,
        ordem: Number(document.getElementById('ordem').value),
        categoria: document.getElementById('categoria').value 
    };

    try {
        const resposta = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenJWT}`
            },
            body: JSON.stringify(novoPersonagem)
        });

        if (!resposta.ok) {
            const erroDoServidor = await resposta.json();
            console.error("Motivo da recusa do servidor:", erroDoServidor);
            alert("O servidor recusou o cadastro! Abra o Console (F12) para ver o motivo.");
            return; 
        }

        alert(`Sucesso! ${novoPersonagem.titulo} foi cadastrado.`);
        formPersonagem.reset(); 
        carregarPersonagens(); 
        
    } catch (erro) {
        console.error("Erro crítico ao salvar personagem:", erro);
        alert("Erro de conexão. O servidor caiu?");
    }
});

async function deletarPersonagem(id) {
    const confirmacao = confirm("Tem certeza que deseja excluir este personagem do banco de dados?");
    
    if (confirmacao) {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${tokenJWT}`
                }
            });
            carregarPersonagens(); 
        } catch (erro) {
            console.error("Erro ao deletar personagem:", erro);
            alert("Erro ao tentar excluir.");
        }
    }
}