// Função para executar o aúdio recebendo de paramêtro o Id da página HTML
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();      
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}
// Traz os elementos presentes no HTML que tenham a classe com início em "tecla" e 
// cria uma lista como retorno.
// Esse retorno é salvo na const listaDeTeclas para fácil manuseio adiante.

const listaDeTeclas = document.querySelectorAll('.tecla');

// Início da estrutura de repetição com a geração do contador.
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    // Como será uma linha mais utilizada, é interessante a utilização da atribuição 
    // para uma constante para facilitar o uso.
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // Recebe os valores da tecla para realizar a pesquisa do parâmetro que será 
    // utilizado para realizar a ação e tocar o som desejado.
    tecla.onclick = function () {
        tocaSom(`#som_${instrumento}`);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa')    
        }
    }

    tecla.onkeyup = function (evento) {
        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.remove('ativa')
        }    
    }
}