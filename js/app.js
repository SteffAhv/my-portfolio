
jQuery(function ($) {


    $(window).ready(function() {
        $('#pre-status').fadeOut();
        $('#tt-preloader').delay(350).fadeOut('slow');
    });



    (function () {
        $('a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    }());

    // Sticky Menu
    

    (function () {
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());

    // Back To Top
  
    (function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());

    // Countup
    
    $('.count-wrap').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    $(document).ready(function() {
        $('i').hide();
      })
      
      $(window).load(function() {
        $('i').show();
      
        var twitterPos = $('#twitter').position();
        var githubPos = $('#github').position();
        var stackPos = $('#stack').position();
        var linkedinPos = $('#linkedin').position();
        var codePos = $('#code').position();
        var plusPos = $('#plus').position();
        var mailPos = $('#mail').position();
        var imgPos = $('.me').position();
        
        $('i').css({
          position: 'absolute',
          zIndex: '1',
          top: imgPos.top + 250,
          left: imgPos.left -200
        });
        
        setTimeout(function() {
          $('#twitter').animate({
            top: twitterPos.top + 10,
            left: twitterPos.left - 110
          }, 500);
        }, 250);
        
        setTimeout(function() {
          $('#twitter').animate({
            top: twitterPos.top,
            left: twitterPos.left
          }, 250);
          
          $('#github').animate({
            top: githubPos.top + 10,
            left: githubPos.left - 6
          }, 500);
        }, 500);
        
        setTimeout(function() {
          $('#github').animate({
            top: githubPos.top,
            left: githubPos.left
          }, 250);
          
          $('#stack').animate({
            top: stackPos.top + 10,
            left: stackPos.left + 20
          }, 500);
        }, 750);
        
        setTimeout(function() {
          $('#stack').animate({
            top: stackPos.top,
            left: stackPos.left
          }, 250);
          
          $('#linkedin').animate({
            top: linkedinPos.top + 10,
            left: linkedinPos.left
          }, 500);
        }, 1000);
        
        setTimeout(function() {
          $('#linkedin').animate({
            top: linkedinPos.top,
            left: linkedinPos.left
          }, 250);
          
          $('#code').animate({
            top: codePos.top + 10,
            left: codePos.left +3
          }, 500);
        }, 1250);
        
        setTimeout(function() {
          $('#code').animate({
            top: codePos.top,
            left: codePos.left
          }, 250);
          
          $('#plus').animate({
            top: plusPos.top + 10,
            left: plusPos.left +6
          }, 500);
        }, 1500);
        
        setTimeout(function() {
          $('#plus').animate({
            top: plusPos.top,
            left: plusPos.left 
          }, 250);
          
          $('#mail').animate({
            top: mailPos.top + 10,
            left: mailPos.left + 10
          }, 500);
        }, 1750);
        
        setTimeout(function() {
          $('#mail').animate({
            top: mailPos.top,
            left: mailPos.left
          }, 250);
        }, 2000);
        
      })

});





