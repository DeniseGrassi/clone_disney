document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');  //selecionando todos os botoes! se fosse um em especifico, botaria data-tab-button=em_breve 
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
        
    }); 



// objetivo: remover a funcao active dos botoes e add-lá ao botao clicado! para q apenas ele abra! 
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener ('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;  //aq vai dar de retorno o valor do atributo: embreve, populares ou star_plus.
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`); //linkando p q tenham o mesmo valor (embreve, populares ou star_plus.)
            
            escondeTodasAbas(); //chamando a funcao q remove o active das abas
            aba.classList.add('shows__list--is-active');  //apenas a aba correspondente do botao clicado recebe a classe shows__list--is-active, tornando-a visível.
            
            removeBotaoAtivo(); //chamando a funcao q remove a borda embaixo dos botoes! todos sem a borda!
            botao.target.classList.add('shows__tabs__button--is-active'); //dar ao botao clicado o active, aparecendo a borda embaixo! botao.target = botao clicado!
        })
    }

    for (let i = 0; i < questions.length; i++) { 
        questions[i].addEventListener ('click', abreOuFechaResposta);
    }
});


function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}


function abreOuFechaResposta (elemento) {
    const classe = 'faq__questions__item--is-open'; /*bota a classe q sera add ou removida em uma constante */
    const elementoPai = elemento.target.parentNode;  /* elemento.target é a pergunta q foi clicada e parentNode é o seu pai*/
    elementoPai.classList.toggle(classe);           /* elementopai é o elemento pai do que foi clicado. toggle é add ou removendo a classe desse elementopai.*/
}

//construcao das Funções Auxiliares
function escondeTodasAbas() {  // Esta função seleciona todas as abas e remove a classe shows__list--is-active de cada uma, escondendo todas as abas.
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); //selecionando todos os itens das abas!

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');  //removendo a class 'shows__list--is-active' de tdos os data-tab-id
    }
}

function removeBotaoAtivo() {   //Esta função seleciona todos os botões e remove a classe shows__tabs__button--is-active de cada um, garantindo que nenhum botão esteja marcado como ativo.
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');  //removendo a classe do botao ativo!
    }
}

// Este código implementa uma funcionalidade de abas em que, ao clicar em um botão, 
// a aba correspondente é exibida e o botão é destacado como ativo, 
// enquanto todas as outras abas e botões são redefinidos para o estado inativo.


