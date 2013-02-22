jQuery(window).load(function(){
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

var logo_serpro = host_images + "serpro.png";
//for para ilustrar como iterar no array
for(index in images) {
    console.log(images[index].id);
    console.log(images[index].filename);
}

function obterUrlImagem(imagem) {
    return host_images + imagem.filename;
}

jQuery(function($) {
   //iterando utilizando jquery
    //jQuery.each(images, function(index, value) {
    //    $('div.conteudo').append("<img valing="middle" class='backcover' src='" + obterUrlImagem(value) + "' class='carta' />");
    //});
    for(i=0; i <  images.length * 2 ; i++) {
        $('div.conteudo').append("<div class='backcover' id='carta-" + i +"' data-sequencial='"+ i + "'></div>");
    }
    
    $('.backcover').click(function(){
        $(this).append("<img src='" + obterUrlImagem(images[0]) + "' class='carta' />");
        
        /* jQuery UI Highlight Effect => http://docs.jquery.com/UI/Effects/Highlight*/
        $(this).effect('highlight', 1400);
    });
});


window.funcao_faz_nada = function() {
    return 'faz nada'
};

function faz_algo() {
    return 'faz algo';
}

function somar(num1, num2) {
    return num1 + num2;
}

jQuery(function($) {
    $("#botao").add("#conteudo").click(function(){
        $('#conteudo').toggle('slow');
    });
    
    $('#botao_testes').click(function() {
        rodarTestes();
    });
});

function rodarTestes() {
    describe('somar', function() {
        it('deve retornar 4 ao somar 1 com 3', function() {
            expect(somar(1,3)).toBe(4);
        });
    });
    
    describe('funcao faz nada', function(){
            it('deve retornar "faz nada"', function(){
              expect(funcao_faz_nada()).toBe("faz nada");
            });
          });
    
    describe('funcao faz algo', function(){
            it('deve retornar "faz algo"', function(){
              expect(faz_algo()).toBe("faz algo");
            });
          });
    
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;
    jasmineEnv.execute();
}

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


/* TESTES */

describe('Array de imagens', function() {
        it('deve conter  6 imagens', function() {
            expect(images.length).toBe(6);
        });
    });

describe('Função obterUrlImagem', function() {
    it('deve retornar url com o endereço da imagem', function(){
       expect(obterUrlImagem(images[0])).toBe("./images/Character%20Boy.png");
    });
});
describe("Embaralhar array deve retornar um array", function() {
    
    var array = [1,2,3,4,5,6,7,8,9,10];
    var array_embaralhado = array.shuffle();
    
    it("com os elementos numa ordem diferente da ordem do array fornecido", function() {
        expect(array_embaralhado.join()).not.toBe("1,2,3,4,5,6,7,8,9,10");
    });
    it("com o mesmo tamanho", function() {
        expect(array.length).toBe(array_embaralhado.length);
    });
    it("com os mesmos elementos", function() {
        
        expect(array_embaralhado).toContain(1);
        expect(array_embaralhado).toContain(2);
        expect(array_embaralhado).toContain(3);
        expect(array_embaralhado).toContain(4)
        expect(array_embaralhado).toContain(5);
        expect(array_embaralhado).toContain(6);
        expect(array_embaralhado).toContain(7);
        expect(array_embaralhado).toContain(8);
        expect(array_embaralhado).toContain(9);
        expect(array_embaralhado).toContain(10);
    });
});



});