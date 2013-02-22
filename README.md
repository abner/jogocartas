***Código desenvolvido em Dojo no SERPRO - DE508 - DESDR***

Jogo da memória

**Javascript + jQuery + Jasmine**

Jasmine: http://pivotal.github.com/jasmine/
jQuery: http://api.jquery.com/

**Jogo da Memória**

**Especificação**
     - jogo da memória com 6 imagens
     - tabuleiro começa vazio e a ordem das peças deve ser definida. 
     - ao clicar na carta a mesma é virada e exibida ao usuário, e seu sequencial deve ser armazenadao
     - no clique subsequente, se a imagem da carta for a mesma do elemento anterior, então as duas permanecem exibidas
     - caso a imagem na segunda carta virada não coincida com a carta anterior, as duas são desviradas
     - o jogo acaba quando todas as cartas estiverem viradas
     - o usuário deve ser notificado de que o jogo finalizou
     - ao encontrar um par, as cartas do par terão um efeito de realcce(highlight) como feedback para o usuário
     
**Recomendações**

    - Prioridade para a parte lógica do jogo. Vamos implementar os requisitos através de Desenvolvimento Orientado a Testes, usando o framework jasmine
    - Após a implementação da lógica faremos a finalização da interface com o usuário. E vamos seguir a mesma metodologia de Teste em primeiro lugar para essa etapa.
    - Vamos trabalhar em pares, com piloto e co-piloto. A dupla deve verbalizar o trabalho executado.
    - A audiência deve observar em silêncio e ajudar apenas quando solicitada pela dupla no comando. 

**RESULTADO **

**jsFiddle**

Código gerado no Dojo pode ser visto em http://jsfiddle.net/abner/KNguU/

 

Para executar basta clicar em Run

**GitHub e Cloud9 IDE**

Projeto no github: https://github.com/abner/jogocartas

Projeto numa IDE online (cloud 9 IDE): https://github.com/abner/jogocartas

SpecRunner.html executa os testes;
index.html tem o protótipo para a interface visual (queremos num outro dojo finalizar a interface visual do jogo)
Instruções para execução no No cloud9 ide:

abre o arquivo e clica em Preview
 

**Participantes**

Ábner Oliveira

Gustavo Lobo

Eduardo Tourinho

Rafael Mirando

Leandro Nunes

Leopoldo Silva

 

**Avaliação**

*Pontos positivos:*

Ambiente de desenvolvimento na web

Novas tecnologias

Adrenalizante

*Pontos negativos:*

Não chegamos a utilizar jQuery

Pouco tempo
