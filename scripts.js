

$(document).ready(function() {

   var controller = new ScrollMagic.Controller();

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

       var pinScene00 = new ScrollMagic.Scene({
         triggerElement: '#web',
         triggerHook: 0,
          duration: '100%'
       })
         .setPin('#web', {pushFollowers: false})
         .addTo(controller)
         ;


       var pinScene01 = new ScrollMagic.Scene({
         triggerElement: '#slide01',
         triggerHook: 0,
          duration: '100%'
       })
         .setPin('#slide01', {pushFollowers: false})
         .addTo(controller)
         ;

       var pinScene02 = new ScrollMagic.Scene({
         triggerElement: '#slide02',
         triggerHook: 0,
          duration: '100%'
       })
         .setPin('#slide02', {pushFollowers: false})
         .addTo(controller)
         ;
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
        // $('#response').html(data);
        alert("Thank you - message sent!")
    })
    .fail(function () {
        alert("Posting failed.");
    });
});

    });