
$(document).ready( function() {

    
  

    TweenLite.from($('#imc'), 2 ,{y:-120, alpha:0 ,ease:Power1.easeInOut} , '+=1');
    TweenLite. from($('#Ch1'), 2 ,{x:50,alpha:0,delay:2,ease:Power3.easeInOut});
    TweenLite. from($('#Cp1'), 2 ,{x:-3050,alpha:0,delay:2,ease:Power1.easeInOut});
    TweenLite. from($('#Cp2'), 2 ,{y:100,alpha:0,delay:3,ease:Power1.easeInOut});
    // TweenLite. from($('#a1'), 2 ,{x:-100,alpha:0,delay:5,ease:Power1.easeInOut});
    // TweenLite. from($('#a2'), 2 ,{y:100,alpha:0,delay:5,ease:Power1.easeInOut});
    // TweenLite. from($('#a3'), 2 ,{x:100,alpha:0,delay:5,ease:Power1.easeInOut});
    


});


$(document).ready( function() {
    
        
      
    var controller = new ScrollMagic.Controller();

    $('.con-dos').each(function (){

        var tween = [TweenMax.from('#a1 ', 1,{alpha:0,x:-100,ease:Power1.easeInOut}),
        TweenMax.from('#a2 ', 1,{alpha:0,y:100,ease:Power1.easeInOut}),
        TweenMax.from('#a3 ', 1,{alpha:0,x:100,ease:Power1.easeInOut})
    ]
        

        var scene = new ScrollMagic.Scene({
            triggerElement: this
        })
        .setTween(tween)
        .addTo(controller)
    });
    
    });