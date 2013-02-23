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
    
    describe("Montagem do deck", function() {
        it("deve conter 12 elementos", function() {
            var deck = montarDeck();
            expect(deck.length).toBe(12);
        });
    
        it("deve conter 12 cartas válidas", function() {
            var deck = montarDeck();
            for(i=0; i < 12 ; i++){
              expect(deck[i].indice_imagem).toBe(Math.floor(i/2));
            }
        });
        
        it("todas as acertadas nao serem true", function() {
            var deck = montarDeck();
            for(i=0; i < 12 ; i++){
              expect(deck[i].acertade).not.toBe(true);
            }
        });
    
    });

    describe("Virar carta", function() {
        
        var deck = null;
        
        beforeEach(function() {
            deck = montarDeck();
            selecionada = -1;
        });
        
        it("altera a flag virado para true", function(){
            
            virarCarta(deck, 0);
            expect(deck[0].virado).toBe(true);
        });
        
        it ("altera somente a carta indicada", function() {
            var posicao = Math.floor((Math.random()*12));
            virarCarta(deck, posicao);
            for(i=0; i < 12; i++){
                expect(deck[i].virado).toBe(i == posicao);
            }
        });    
        it("marcar carta como selecionada", function(){
            virarCarta(deck, 0);
            expect(selecionada).toBe(0);
        });
        it("virar segunda carta", function(){
            virarCarta(deck, 0);
            virarCarta(deck, 1);
            expect(selecionada).toBe(-1);
        });
        
        it("reinicia selecao", function(){
            virarCarta(deck, 0);
            virarCarta(deck, 1);
            expect(selecionada).toBe(-1);
        });
        it("marca cartas como acertadas", function(){
            virarCarta(deck, 0);
            virarCarta(deck, 1);
            expect(deck[0].acertada).toBe(true);
            expect(deck[1].acertada).toBe(true);
        });
        it("nao pode virar carta já virada", function(){
            virarCarta(deck, 0);
            virarCarta(deck, 0);
            expect(selecionada).toBe(0);
        });
        it("nao pode desvirar carta selecionada", function(){
            virarCarta(deck, 0);
            virarCarta(deck, 0);
            expect(deck[0].virado).toBe(true);
        });
        it("nao pode dar como acertada carta já selecionada", function(){
            virarCarta(deck, 0);
            virarCarta(deck, 0);
            expect(deck[0].acertada).not.toBe(true);
        });
        it("marca cartas como acertadas", function(){
            virarCarta(deck, 0);
            virarCarta(deck, 1);
            expect(deck[0].acertada).toBe(true);
            expect(deck[1].acertada).toBe(true);
        });
        
    });
