$(function(){
    'use strict';

    //seleccionamos el primer article y lo removemos
    $('main article:first').remove();

    //clonamos el ultimo article
    // var copia = $('main article:last').clone();
    // $('main').append(copia);

    var copia = $('main article:last').clone();
    $(copia).appendTo('main');

});