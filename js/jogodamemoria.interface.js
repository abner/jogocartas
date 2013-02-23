function mostrarEsconderCarta(indexCarta) {
    if(deck[indexCarta].virado) {
        jQuery('#carta-' + indexCarta + ' img').fadeToggle(500, 'swing');
    }
}

function esconderAnimado(cartas, callback) {
    jQuery('#img-carta-' + cartas[0] + ', #img-carta-' + cartas[1] ).delay(400).fadeOut(400,function (){
            pausado = false;
    });
}

jQuery(function($) {
   //iterando utilizando jquery
    //jQuery.each(images, function(index, value) {
    //    $('div.conteudo').append("<img valing="middle" class='backcover' src='" + obterUrlImagem(value) + "' class='carta' />");
    //});
    console.log(deck);
    for(var i=0; i <  deck.length ; i++) {
        var obj_img = images[deck[i].indice_imagem];
        console.log(obj_img);
        var img = "<img src='" + obterUrlImagem(obj_img) + "' class='carta' style='display:none' id='img-carta-" + i   + "'></img>";
        //console.log(xxx);
        //console.log("ABNER");
        $('div.conteudo').append("<div class='backcover' id='carta-" + i +"' data-sequencial='"+ i + "'>" + img + "</div>");
    }
    
    $('.backcover').click(function(){
        if(pausado == true ) {
            return;
        }
        var carta_clicada = parseInt($(this).attr("data-sequencial"));
        console.log('carta-clicada: ' + carta_clicada); 
        var retorno = virarCarta(deck, carta_clicada);
        if(retorno.cartas.length >= 1) 
        {   
            mostrarEsconderCarta(carta_clicada);
        }
        
        if(retorno.cartas.length == 2 && !retorno.encontrado) {
            pausado = true;
            esconderAnimado(retorno.cartas);            
        } 
        
    });

    jQuery()
});


