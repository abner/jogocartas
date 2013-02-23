/***
Dojo no DESDR =>  Javascript + jQuery + Jasmine

Jasmine: http://pivotal.github.com/jasmine/
jQuery: http://api.jquery.com/

Jogo da Memória

 - Especificação
     - jogo da memória com 6 imagens
     - tabuleiro começa vazio e a ordem das peças deve ser definida. 
     - ao clicar na carta a mesma é virada e exibida ao usuário, e seu sequencial deve ser armazenadao
     - no clique subsequente, se a imagem da carta for a mesma do elemento anterior, então as duas permanecem exibidas
     - caso a imagem na segunda carta virada não coincida com a carta anterior, as duas são desviradas
     - o jogo acaba quando todas as cartas estiverem viradas
     - o usuário deve ser notificado de que o jogo finalizou
     - ao encontrar um par, as cartas do par terão um efeito de realcce(highlight) como feedback para o usuário
     
Recomendações

    - Prioridade para a parte lógica do jogo. Vamos implementar os requisitos através de Desenvolvimento Orientado a Testes, usando o framework jasmine
    - Após a implementação da lógica faremos a finalização da interface com o usuário. E vamos seguir a mesma metodologia de Teste em primeiro lugar para essa etapa.
    - Vamos trabalhar em pares, com piloto e co-piloto. A dupla deve verbalizar o trabalho executado.
    - A audiência deve observar em silêncio e ajudar apenas quando solicitada pela dupla no comando. 
***/

var host_images = "./images/";

var images = [
    { id:'boy', filename: 'Character%20Boy.png' },
    { id: 'bug', filename: 'Enemy%20Bug.png'},
    { id: 'gem-blue', filename: 'Gem%20Blue.png'},
    { id: 'gem-green', filename: 'Gem%20Green.png'},
    { id: 'gem-orange', filename: 'Gem%20Orange.png'},
    { id: 'rock', filename: 'Rock.png'}
    ];


var tabuleiro = [];

//for para ilustrar como iterar no array
for(index in images) {
    //console.log(images[index].id);
    //console.log(images[index].filename);
}

function obterUrlImagem(imagem) {
    return host_images + imagem.filename;
}

jQuery(function($) {
  //colocar aqui o código relacionado com a interface visual e iteração com o usuário
});

//FUNCOES UTILITARIAS
/**
 * Randomize array element order in-place.
 * Using Fisher-Yates shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

Array.prototype.shuffle = function() {
  var i = this.length, j, tempi, tempj;
  if ( i == 0 ) return false;
  while ( --i ) {
     j       = Math.floor( Math.random() * ( i + 1 ) );
     tempi   = this[i];
     tempj   = this[j];
     this[i] = tempj;
     this[j] = tempi;
  }
  return this;
}

function montarDeck() {
    var deck = [];
    
    for(i = 0; i < 6; i++) {
        deck.push({indice_imagem: i, virado: false});
        deck.push({indice_imagem: i, virado: false});
    }
    
    return deck;
}

function virarCarta(deck, indexCarta) {
    if (indexCarta==selecionada){
        return {encontrado: false, cartas: []};
    }
    if(deck[indexCarta].acertada) {
        return {encontrado: false, cartas: []};
    }
  deck[indexCarta].virado = true; 
    if(selecionada == -1) {
        selecionada = indexCarta;
        return {encontrado: false, cartas : [indexCarta]};
    } else {
        var acertada = (deck[indexCarta].indice_imagem == deck[selecionada].indice_imagem);
        deck[indexCarta].acertada = acertada;
        deck[selecionada].acertada = acertada;
        var retorno =  {encontrado: acertada, cartas : [selecionada, indexCarta]};
        selecionada = -1;
        return retorno;
    }
}

deck = montarDeck().shuffle();

var pausado = false;

var selecionada = -1;
