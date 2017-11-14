
$(document).ready( function() {

    
  

    TweenLite.from($('#imc'), 2 ,{y:-120, alpha:0 ,ease:Power1.easeInOut} , '+=1');
    TweenLite. from($('#Ch1'), 2 ,{x:50,alpha:0,delay:2,ease:Power3.easeInOut});
    TweenLite. from($('#Cp1'), 2 ,{x:-3050,alpha:0,delay:2,ease:Power1.easeInOut});
    TweenLite. from($('#Cp2'), 2 ,{y:100,alpha:0,delay:3,ease:Power1.easeInOut});
    // TweenLite. from($('#a1'), 2 ,{x:-100,alpha:0,delay:5,ease:Power1.easeInOut});
    // TweenLite. from($('#a2'), 2 ,{y:100,alpha:0,delay:5,ease:Power1.easeInOut});
    // TweenLite. from($('#a3'), 2 ,{x:100,alpha:0,delay:5,ease:Power1.easeInOut});
    
    TweenMax.from('#flecha', 1, {y:10,ease:Elastic.easeOut,repeat:-1});

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
    



$(document).ready( function() {


// var bezierTween,
// playBtn = document.getElementById("play"),
// pauseBtn = document.getElementById("pause");
TweenMax.to('#llama',1,{repeat:-1,backgroundPosition: "-400px",ease:SteppedEase.config(4)});

    
////////////////////////////////
////////////////////////////////    
TweenMax.set(".uno", {
    
    x:function(i) {
      return i *200;
    }
    });
  
TweenMax.to(".uno", 8, {
    ease: Linear.easeNone,
    x: "-=1400", //move each box 500px to right
    modifiers: {
      x: function(x) {
        return x % 1200; //force x value to be between 0 and 500 using modulus
      }
    },
    repeat: -1
    });
  
    ////////////////////////////////
    ////////////////////////////////

    TweenMax.set(".dos", {
        
        x:function(i) {
          return i *300;
        }
        });
      
    TweenMax.to(".dos", 6, {
        ease: Linear.easeNone,
        x: "-=1400", //move each box 500px to right
        modifiers: {
          x: function(x) {
            return x % 1200; //force x value to be between 0 and 500 using modulus
          }
        },
        repeat: -1
      });
    
    
    ////////////////////////////////
    ////////////////////////////////
    
      TweenMax.set(".tres", {
        
        x:function(i) {
          return i *300;
        }
        });
      
    TweenMax.to(".tres", 7, {
        ease: Linear.easeNone,
        x: "-=1400", //move each box 500px to right
        modifiers: {
          x: function(x) {
            return x % 1200; //force x value to be between 0 and 500 using modulus
          }
        },
        repeat: -1
    });
    

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////
      TweenMax.set(".cuatro", {
        
        x:function(i) {
          return i *300;
        }
        });
      
    TweenMax.to(".cuatro", 10, {
        ease: Linear.easeNone,
        x: "-=1400", //move each box 500px to right
        modifiers: {
          x: function(x) {
            return x % 1200; //force x value to be between 0 and 500 using modulus
          }
        },
        repeat: -1
      });
////////////////////////////////
////////////////////////////////    
      TweenMax.set("#planetas", {
        
        x:function(i) {
          return i *300;
        }
        });
      
    TweenMax.to("#planetas", 30, {
        ease: Linear.easeNone,
        x: "-=1700", //move each box 500px to right
        modifiers: {
          x: function(x) {
            return x % 1200; //force x value to be between 0 and 500 using modulus
          }
        },
        repeat: -1
      });
// terminna planetas --PLANETA DOS/////
////////////////////////////////
///////////////////////////////    
      TweenMax.set("#planetas-dos", {
          y: -100,
        alpha:0.7,  
        x:function(i) {
          return i *200;
        }
        });
      
    TweenMax.to("#planetas-dos", 100, {
        ease: Linear.easeNone,
        x: "-=1700", //move each box 500px to right
        modifiers: {
        y:-100,
          x: function(x) {
            return x % 1200; //force x value to be between 0 and 500 using modulus
          }
        },
        repeat: -1
      });

////////////////////////////////
////////////////////////////////

    
bezierTween = new TweenMax("#nave", 5, {
bezier:{
  type:"soft", 
  values:[{x:2, y:5}, {x:-3, y:5}, {x:4, y:2*Math.random()-5 }, {x:2, y:2*Math.random()-5 }, {x:5, y:5}, {x:0, y:0}],
  autoRotate:false
},
ease:Linear.easeOut, repeat:-1});

//tween the timeScale() of the bezierTween for smooth acceleration and deceleration
play.onclick = function(){
TweenLite.to(bezierTween, 1, {timeScale:2});
};

pause.onclick = function(){
TweenLite.to(bezierTween, 1, {timeScale:0});
};
});