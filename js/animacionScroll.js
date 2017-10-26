jQuery(document).ready(function ($) {

    var parrafoD = $('#textoD p');
    var parrafoB = $('#textoB p');
    var parrafoC = $('#textoB p');

    var scroll;
    $(window).scroll(function(){
        scroll=$(window).scrollTop();
        
        if(scroll> 100){
            $('#textoD h2').removeClass('hide');
            $('#textoD p').removeClass('hide');
        }
        if(scroll>100){
            $('#textoD h2').addClass('animacion-dos')
            $('#textoD p').addClass('animacion-dos')
        }
    })



})