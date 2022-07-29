$(function() {

    //상단 header 고정

    $(window).scroll(function(){

      curr = $(this).scrollTop();
  
      if(curr > 0){
       $('header').addClass('fix') 
      }else{
        $('header').removeClass('fix') 
      }
     
    })

    //.hidden_menu_btn click시 hidden_menu상단에서 등장

    //$('.hidden_menu_btn').click(function(e){
    //  e.preventDefault();
    //  $('hidden_menu').stop().animate({top: 100}, 300)
    //});

    $('.hidden_menu_btn').click(function(e){
      e.preventDefault();

      if($(this).hasClass('exit')){
        $('.hidden_menu').removeClass('show');
        $('.hidden_menu_btn').removeClass('exit');
      }else{
        $('.hidden_menu').addClass('show');
        $('.hidden_menu_btn').addClass('exit');
        menu.restart();
      }
    
    });
    

    //슬라이드 번
      var slide01 = new Swiper(".newsinsights_slide", {
        loop: true,
        slidesPerView: 1,
          pagination: {
            el: ".newsinsights_slide .swiper-pagination",
            type: "progressbar",
          },
          navigation: {
            nextEl: ".newsinsights_slide .swiper-button-next",
            prevEl: ".newsinsights_slide .swiper-button-prev",
          },
        }); 


    skew01 = gsap.timeline({});
    skew01.to('.direct a',{skewY:15,})
    .to('.direct a',{skewY:0,})
    skew01.pause()



    skew02 = gsap.timeline({});
    skew02.to('.direct a',{skewY:-15,})
    .to('.direct a',{skewY:0,})
    skew02.pause()


    
        $("body").on('mousewheel',function(e){
            var wheel = e.originalEvent.wheelDelta;
            //스크롤값을 가져온다.
            if(wheel>0){
              //스크롤 올릴때
              skew01.restart()
            } else {
              //스크롤 내릴때
              skew02.restart()
            }
        });

    //welcome page


    //gsap효과

    gsap.to("main .intro_wrap h2",{
      scrollTrigger:{
          trigger:".intro",
          start:"top top",
          //end:"bottom top",
          //markers:true,
          scrub:0.5
      },
      y:-100,
    })


    $('.scroll_animation a').click(function(e){
      e.preventDefault();
      target = $(this.hash).offset().top;
      $('html,body').animate({scrollTop:target-133},300)
    })

    menu = gsap.from(".hidden_menu a",{
      yPercent:100,
      stagger:0.1 //순차적으로
    })
    menu.pause(); 

})