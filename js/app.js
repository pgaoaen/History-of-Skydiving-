$(document).foundation()


/* Function: Begins */
$(document).ready(function() {

  /* Menu: Starts */
  $('.off-canvas a').on('click', function() {
      $('.off-canvas').foundation('close');
  });
  /* Menu: Ends */


  /* View Height for #intro: Starts */
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('#intro').css('min-height', windowHeight);
  };
  setHeight();
  /* View Height for #intro: Ends */


  /* .characters and .segment_articles fadeIN & opacity: Starts */
  function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 400 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
    }

  // if the image in the window of browser when the page is loaded, show that image
  $(document).ready(function(){
        showImages('.characters,.segment_articles');
  });

  // if the image in the window of browser when scrolling the page, show that image
  $(window).scroll(function() {
        showImages('.characters,.segment_articles');
  });
  /* .characters and .segment_articles fadeIN & opacity: Ends */


  /* Perform Scrolling: Begins */
  $(window).scroll(function() {

    var fromTop = $(window).scrollTop();

    console.log(fromTop);


    if(fromTop >= 0){
    $(".sticky").css({
    "z-index": "990"
    })
    }

    if(fromTop >= 8300){
    $("#scenerybackground_seven").css({
    "top": fromTop * 0.1 + 1800 + "px",
    "z-index": "7"
    })
    }

    if(fromTop >= 8300){
    $("#scenerybackground_six").css({
    "top": fromTop * 0.2 + 800 + "px",
    "z-index": "6"
    })
    }

    if(fromTop >= 8000){
    $("#scenerybackground_five").css({
    "top": fromTop * 0.3 - 400 + "px",
    "z-index": "5"
    })
    }

    if(fromTop >= 7600){
    $("#scenerybackground_four").css({
    "top": fromTop * 0.4 - 1400 + "px",
    "z-index": "3"
    })
    }

    if(fromTop >= 0){
    $("#scenerybackground_three").css({
    "z-index": "4"
    })
    }

    if(fromTop >= 0){
    $("#scenerybackground_two").css({
    "z-index": "2"
    })
    }

    if(fromTop >= 7900){
    $("#scenerybackground_one").css({
    "top": fromTop * 0.5 - 2950 + "px",
    "z-index": "1"
    })
    }

    if(fromTop >= 6250){
    $("#main_diver2").css({
    "top": fromTop * 0.6 - 3750 + "px",
    "z-index": "8"
    })
    }

  })
  /* Perform Scrolling: Ends */



});
/* Function: Ends */
