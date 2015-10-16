$(document).ready(function(){
  // Homepage Height
    var h = window.innerHeight;
    $('.hero_fullscreen').css('height', h );
    $('.mockup').css('height', h );

  // Homepage Opacity - for single background image version
    var h = window.innerHeight;
    $(window).on('scroll', function() {
      var st = $(this).scrollTop();
      $('#maximage_single').css('opacity', (1-st/h) );
    });

    jQuery('video, object').maximage('maxcover');
       // detecting if browser is mobile and disabling the video background, leaving only poster as bg.
        if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
         ){
            $('#maximage_video video').css('display', 'none' );
            classie.add( document.getElementById( 'maximage_video' ), 'mobile_novideo' );
          };

  // Scroll To ...
      $('.go_to_home').click(function () {$.scrollTo('.hero_fullscreen',1000,{easing:'easeInOutExpo','axis':'y'});return false}); 
      
      var lastId,
      navbarheight = $("#menu_bar").outerHeight()+1;
      topMenu = $('.menu_bar_navigation, .navigation_desktop, #mobile_menu_content, .cta_button_area');
      menuItems = topMenu.find();
      scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
      });
     
      menuItems.click(function(e){
          var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-navbarheight+2;
          $('html, body').stop().animate({ scrollTop: offsetTop  }, 1000, 'easeInOutExpo');
          e.preventDefault();
      });
     
      $(window).scroll(function(){
          // Get container scroll position
          var fromTop = $(this).scrollTop()+navbarheight;

          // Get id of current scroll item
          var cur = scrollItems.map(function(){
                                  if ($(this).offset().top < fromTop)
                                  return this;
                                  });
          // Get the id of the current element
          cur = cur[cur.length-1];
          var id = cur && cur.length ? cur[0].id : "";
          if (lastId !== id) {
          lastId = id;
          // Set/remove active class
          menuItems
          .parent().removeClass("active")
          .end().filter("[href=#"+id+"]").parent().addClass("active");
          }                   
      }); 

      $("#video_modal_box").fitVids();


      $('#more_info').waypoint(function() {
            setTimeout(function(){$('.content_anim1').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim2').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.content_anim3').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.content_anim4').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('.content_anim5').addClass('animated fadeInUp')},800);
        }, { offset: '50%' });    
    
      $('#features').waypoint(function() {
            setTimeout(function(){$('.content_anim6').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim7').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.content_anim8').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.content_anim9').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('.content_anim10').addClass('animated fadeInUp')},800);
        }, { offset: '50%' });
        
        $('#features_video').waypoint(function() {
            setTimeout(function(){$('.content_anim11').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim12').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.content_anim13').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.content_anim14').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('.content_anim15').addClass('animated fadeInUp')},800);
            setTimeout(function(){$('.content_anim16').addClass('animated fadeInUp')},1000);
        }, { offset: '50%' });
        
        $('#reviews').waypoint(function() {
            setTimeout(function(){$('.content_anim17').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim18').addClass('animated fadeInUp')},200);
            setTimeout(function(){$('.content_anim19').addClass('animated fadeInUp')},400);
            setTimeout(function(){$('.content_anim20').addClass('animated fadeInUp')},600);
            setTimeout(function(){$('.content_anim21').addClass('animated fadeInUp')},800);
            setTimeout(function(){$('.content_anim22').addClass('animated fadeInUp')},1000);
            setTimeout(function(){$('.content_anim23').addClass('animated fadeInUp')},1200);
            setTimeout(function(){$('.content_anim24').addClass('animated fadeInUp')},1400);
        }, { offset: '50%' });

        $('#screenshots').waypoint(function() {
            setTimeout(function(){$('.content_anim25').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim26').addClass('animated fadeInUp')},200);
        }, { offset: '50%' });
        
        $('#newsletter').waypoint(function() {
            setTimeout(function(){$('.content_anim27').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim28').addClass('animated fadeInUp')},200);
        }, { offset: '50%' }); 
        
        $('#contact').waypoint(function() {
            setTimeout(function(){$('.content_anim29').addClass('animated fadeInUp')},0);
            setTimeout(function(){$('.content_anim30').addClass('animated fadeInUp')},200);
        }, { offset: '50%' }); 

        $('.play a, .owl-carousel-screenshots a').nivoLightbox({
        effect: 'slideDown'    
      }); 

        $(".owl-carousel-screenshots").owlCarousel({
      loop:true,
        items : 6,
      itemsDesktop : [1200,6], 
      itemsDesktopSmall : [900,5], 
      itemsTablet: [600,3], 
      itemsMobile : [400,2]     
      }); 

})

