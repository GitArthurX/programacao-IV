/*Constante para o alerta do formulario*/ 
const botaoEnviar = document.getElementById('botao');
const inputnome = document.getElementById('nome');
const inputemail = document.getElementById('EMAIL');
const inputtextarea = document.getElementById('caixa');

/*Constante para a animação dos cards dos personagens*/
const cardanimacao = document.querySelectorAll('.Info_Personagens, .Personagens_Jovens')

botaoEnviar.addEventListener('click', function(){
    if(inputnome.value.trim() == '' || inputemail.value.trim() == '' || inputtextarea.value.trim() == ''){
        alert("Erro! algum dos campos obrigatórios não foi preenchido");
    }
    else{
        alert("Sugestão enviado com SUCESSO");

        inputnome.value = '';
        inputemail.value = '';
        inputtextarea.value = '';
    }
});

cardanimacao.forEach(function(card){
    card.addEventListener('mouseenter', function(){
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseleave', function(){
        card.style.transform = 'scale(1)';
    });
})
