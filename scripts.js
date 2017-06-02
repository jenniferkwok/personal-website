

$(document).ready(function() {


// flying envelope
    var flightpath = {
      entry : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 100,  y: -20},
            {x: 300,  y: 10}
          ]
      },
      looping : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 510,  y: 60},
            {x: 620,  y: -60},
            {x: 500,  y: -100},
            {x: 380,  y: 20},
            {x: 500,  y: 60},
            {x: 580,  y: 20},
            {x: 620,  y: 15}
          ]
      },
      leave : {
        curviness: 1.25,
        autoRotate: true,
        values: [
            {x: 660,  y: 20},
            {x: 800,  y: 130},
            {x: $(window).width() + 300,  y: -100},
          ]
      }
    };
    // init controller
    var controller = new ScrollMagic.Controller();

    // create tween
    var tween = new TimelineMax()
      .add(TweenMax.to($("#env"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
      .add(TweenMax.to($("#env"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
      .add(TweenMax.to($("#env"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 100})
            .setPin("#target")
            .setTween(tween)
            .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
//

   var controller = new ScrollMagic.Controller();



// fade in

  //   // var ourScene = new ScrollMagic.Scene({
  //   //     triggerElement: '#animation',
  //   //     triggerHook: 0.3
  //   // })
  //   // .setClassToggle('#animation', 'fade-in')
  //   // .addTo(controller);

  //       // Scene 1 - pin the second section
  //       var pinScene01 = new ScrollMagic.Scene({
  //           triggerElement: '#welcome',
  //           triggerHook: 0,
  //           duration: '200%'
  //       })
  //       .setPin('#welcome', {pushFollowers: false})
  //       .addTo(controller)
  //       ;


// web work fade in

//        var pinScene00 = new ScrollMagic.Scene({
//          triggerElement: '#web',
//          triggerHook: 0,
//           duration: '100%'
//        })
//          .setPin('#web', {pushFollowers: false})
//          .addTo(controller)
//          ;

//        var pinScene01 = new ScrollMagic.Scene({
//          triggerElement: '#slide01',
//          triggerHook: 0,
//           duration: '100%'
//        })
// .setClassToggle('#slide01', 'fade-in')
//          .setPin('#slide01', {pushFollowers: false})
//          .addTo(controller)
//          ;

//        var pinScene02 = new ScrollMagic.Scene({
//          triggerElement: '#slide02',
//          triggerHook: 0,
//           duration: '100%'
//        })
//          .setPin('#slide02', {pushFollowers: false})
//          .addTo(controller)
//          ;




  //       //Calculate the height of <header>
  //       //Use outerHeight() instead of height() if have padding
  //       var aboveHeight = $('header').outerHeight();

  //       $(window).scroll(function(){
  //         //if scrolled down more than the header’s height
  //         if ($(window).scrollTop() > aboveHeight){
  //         // if yes, add “fixed” class to the <nav>
  //         // add padding top to the #content (value is same as the height of the nav)
  //         $('nav').addClass('fixed').css('top','0').next()
  //         .css('padding-top','60px');
  //     } else {

  //         // when scroll up or less than aboveHeight,remove the “fixed” class, and the padding-top
  //         $('nav').removeClass('fixed').next()
  //         .css('padding-top','0');
  //     }

  // });

// eyes
// If you use this code, please link to this pen (cdpn.io/rkcjt). Thanks :)

var DrawEye = function(eyecontainer, pupil, eyeposx, eyeposy){
  // Initialise core variables
  var r = $(pupil).width()/2;
  var center = {
    x: $(eyecontainer).width()/2 - r, 
    y: $(eyecontainer).height()/2 - r
  };
  var distanceThreshold = $(eyecontainer).width()/2 - r;
  var mouseX = 0, mouseY = 0;
  
  // Listen for mouse movement
  $(window).mousemove(function(e){ 
    var d = {
      x: e.pageX - r - eyeposx - center.x,
      y: e.pageY - r - eyeposy - center.y
    };
    var distance = Math.sqrt(d.x*d.x + d.y*d.y);
    if (distance < distanceThreshold) {
      mouseX = e.pageX - eyeposx - r;
      mouseY = e.pageY - eyeposy - r;
    } else {
      mouseX = d.x / distance * distanceThreshold + center.x;
      mouseY = d.y / distance * distanceThreshold + center.y;
    }
  });
  
  // Update pupil location
  var pupil = $(pupil);
  var xp = 0, yp = 0;
  var loop = setInterval(function(){
    // change 1 to alter damping/momentum - higher is slower
    xp += (mouseX - xp) / 1;
    yp += (mouseY - yp) / 1;
    pupil.css({left:xp, top:yp});    
  }, 1);
};
var chihuahuaeye1 = new DrawEye("#dogeyeleft", "#dogpupilleft", 175, 261);
var chihuahuaeye2 = new DrawEye("#dogeyeright", "#dogpupilright", 210, 259);
////


$("#gform").submit(function(e){
    e.preventDefault();
        event.preventDefault();
    var form = $('#gform');
    $.ajax({
        type: 'POST',
        url: 'https://script.google.com/macros/s/AKfycbwHfGvXKTn3TlAU034WDiblu9nnodoye-MG0iYvwiac_MXhP2M/exec',
        data: form.serialize()
    })
    .done(function (data) {
        console.log("got data:",data);
        alert("Thank you - message sent!")
        $('#gform')[0].reset();
        $('#gform').append("<h2>Thank you!</h2>")
    })
    .fail(function () {
        alert("Posting failed.");
    });
});

    });