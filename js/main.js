//мобильное устройство?
var isMobile = false; 
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
isMobile = true;
}

if (isMobile == true) {
  $('.animation').addClass('animated');
  $('<style>.infa_klik{position:absolute;top:0;z-index:5!important;height:800px!important}.animation,.animation *{transition:0s all 0s!important;animation-duration:0s!important;animation-delay:0s!important}.site-nav.down,.site-nav.up{display:none!important}header,section,.section{height:800px!important}section .star_gr{height: 650px!important;width: 774px!important;}#s3s2{height: 60%!important;}.fon_slider {height: 100%!important;}</style>').appendTo('head');
}

function move_right_pop(){
  var html_pop = $('#right-pop').html();
  $('#right-pop').remove();  
  $(html_pop).appendTo('.sec2.section');

}
function open_right_pop(){
  $('.sec2 .fp-tableCell').css('right','0px');
  $('.infa_klik').css('right','0px');
  //$('.fon_silver p').css('margin-left','60px');
 // $('.fon_silver p').css('float','left');
 // $('.foto,.fon_silver p,.sec2 .fp-tableCell').addClass('s-visible fadeInRight animated');
  //$('.foto').css('float','left');
  $('.infa_klik').css('opacity','1');
  $('.infa_klik').css('z-index','5');
  $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
  $('body').css('overflow','hidden');
  $('.infa').scrollTop(0);
}

function close_right_pop(){
  $('.sec2 .fp-tableCell').css('right','0px');
  $('.infa_klik').css('right','-570px');
  $('.infa_klik').css('opacity','0');
 // $('.fon_silver p').css('margin-rigt','-77px');
//  $('.foto').css('float','right');
//  $('.fon_silver p').css('float','right');
 // $('.foto,.fon_silver p').addClass('s-visible fadeInLeft animated');
  $('.infa_klik').css('z-index','-1');
  $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
  $('body').css('overflow','visible');  
}

$(document).ready(function() {

  $('<link rel="stylesheet" href="css/libs_old.min.css"><link href="https://fonts.googleapis.com/css?family=Ubuntu:400,300&subset=latin,cyrillic" rel="stylesheet" type="text/css"><link rel="stylesheet" href="css/style.css"><link href="https://fonts.googleapis.com/css?family=Roboto:400,300&subset=latin,cyrillic" rel="stylesheet" type="text/css">').appendTo('head');


  setTimeout(function(){
    if(!$('body').hasClass('loaded')) {
      $('body').addClass('loaded');
      initfullpage();
    };
  },3000);

  //menu
var menu_active = 0;
$('.menu-btn').click(function(){
  if (!$('.menu').hasClass('active')) {
    $(this).addClass('as-close');
    $('.menu').addClass('active');
    menu_active = 1;
  } else{
    $(this).removeClass('as-close');
    $('.menu').removeClass('active');
    menu_active = 0;
  }
});
$('section').click(function(){
  if (menu_active == 1) {
    $('.menu').removeClass('active');
    $('.menu-btn').removeClass('as-close');
    menu_active = 0;
  }
});
$('.menu .menu-a').click(function(e){
  e.preventDefault();
  $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
  $('.menu').removeClass('active');
    $('.menu-btn').removeClass('as-close');
    menu_active = 0;
});

$('.site-nav.down').click(function(e) {
    e.preventDefault();
    $.fn.fullpage.moveSectionDown();
  }).on('mouseover', function() {
        $(".site-nav.down").addClass('active');
    }).on('mouseout', function() {
        $(".site-nav.down").removeClass('active');
    });

$('.site-nav.up').click(function(e) {
    e.preventDefault();
    $.fn.fullpage.moveSectionUp();
  }).on('mouseover', function() {
        $(".site-nav.up").addClass('active');
    }).on('mouseout', function() {
        $(".site-nav.up").removeClass('active');
    });



$('.pr_t').click(function() {
	$('.pr_t').addClass('active');
	$('#sbs4, #s_sls2, #sbs32').addClass('noact');
	$('#sbs31').removeClass('noact');	
	$('.us_pr').removeClass('active');
});
$('.us_pr').click(function() {
	$('.us_pr').addClass('active');
	$('#sbs4, #s_sls2, #sbs31').addClass('noact');
	$('#sbs32').removeClass('noact');
	$('.pr_t').removeClass('active');
});
$('.podr1').click(function() {
  $('.us_pr').addClass('active');
  $('#sbs4, #s_sls2, #sbs31').addClass('noact');
  $('#sbs32').removeClass('noact');
  $('.pr_t').removeClass('active');  
  $('.var2_prozh').removeClass('active');
  $('.var1_prozh').addClass('active');  
  $('.var_gr p').removeClass('active');
  $('.var1_pr').addClass('active');
});
$('.podr2').click(function() {
  $('.us_pr').addClass('active');
  $('#sbs4, #s_sls2, #sbs31').addClass('noact');
  $('#sbs32').removeClass('noact');
  $('.pr_t').removeClass('active');
  $('.var1_prozh').removeClass('active');
  $('.var2_prozh').addClass('active');  
  $('.var_gr p').removeClass('active');
  $('.var2_pr').addClass('active');
});
$('.day_gr span').click(function() {
	$('.day_gr span').removeClass('active');
	$(this).addClass('active');
});
$('.day1').click(function() {
	$('.day_gr1').addClass('active');
	$('.day_gr2,.day_gr3,.day_gr4,.day_gr5,.day_gr6 ').removeClass('active');
});
$('.day2').click(function() {
	$('.day_gr2').addClass('active');
	$('.day_gr1,.day_gr3,.day_gr4,.day_gr5,.day_gr6 ').removeClass('active');
});
$('.day3').click(function() {
	$('.day_gr3').addClass('active');
	$('.day_gr1,.day_gr2,.day_gr4,.day_gr5,.day_gr6 ').removeClass('active');
});
$('.day4').click(function() {
	$('.day_gr4').addClass('active');
	$('.day_gr1,.day_gr2,.day_gr3,.day_gr5,.day_gr6 ').removeClass('active');
});
$('.day5').click(function() {
	$('.day_gr5').addClass('active');
	$('.day_gr1,.day_gr2,.day_gr3,.day_gr4,.day_gr6 ').removeClass('active');
});
$('.day6').click(function() {
	$('.day_gr6').addClass('active');
	$('.day_gr1,.day_gr2,.day_gr3,.day_gr4,.day_gr5 ').removeClass('active');
});

$('.var_gr p').click(function() {
	$('.var_gr p').removeClass('active');
	$(this).addClass('active');
});

$('.var1_pr').click(function() {
	$('.var2_prozh').removeClass('active');
	$('.var1_prozh').addClass('active');
});
$('.var2_pr').click(function() {
	$('.var1_prozh').removeClass('active');
	$('.var2_prozh').addClass('active');
});






	$('.fon_silver a').click(function(e){
		e.preventDefault();
		$($(this).attr('href')).arcticmodal();
	});
  
  $('.pop .back').click(function(e){
    e.preventDefault();
    $(this).parent().arcticmodal('close');
  });
/*$('.slice .back_b').click(function(e){
   e.preventDefault();
    $('#list1').addClass('s-visible');
    $('#list1').removeClass('nvis');
    $('#list2').addClass('nvis');
    $('#list2').removeClass('s-visible');
  });
$('.slice .back_b2').click(function(e){
   e.preventDefault();
    $('#list1').addClass('s-visible');
    $('#list1').removeClass('nvis');
    $('#list3').addClass('nvis');
    $('#list3').removeClass('s-visible');
  });
  */
  $("#sld-cont").draggable({axis:'x',containment:"parent" });
  //$("#sld-cont").draggable({axis:'x',containment:[40, 0, 591+88+60, 95] });
	
  $('.gr_s').hover(function(){
    if ($('.gr_s.active').length > 0) {
      $('.gr_s.active').removeClass('active');
      $('.wr_line .span').fadeOut(400);
      console.log('asd');
    }
    $('.wr_line '+$(this).attr('class').replace('gr_s ','.')).fadeIn(400);
    },function(){
    $('.wr_line '+$(this).attr('class').replace('gr_s ','.')).fadeOut(400);
  });

  $('.video').click(function(){
    $(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/xW3fVjcgNvA?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
  });
$('.confbtn').click(function(e) {
    e.preventDefault();
    $('#conf_pop').arcticmodal();
  });
 /* $('.opi').click(function(e){
   e.preventDefault();
    $('#list3').addClass('s-visible');
    $('#list3').removeClass('nvis');
    $('#list1').addClass('nvis');
    $('#list1').removeClass('s-visible');

  });
  $('.opi2').click(function(e){
   e.preventDefault();
    $('#list3').addClass('s-visible');
    $('#list3').removeClass('nvis');
    $('#list2').addClass('nvis');
    $('#list2').removeClass('s-visible');
  });
$('.opi3').click(function(e){
   e.preventDefault();
    $('#list4').addClass('s-visible');
    $('#list4').removeClass('nvis');
    $('#list2').addClass('nvis');
    $('#list2').removeClass('s-visible');
  });*/

//$('.opi').click(function(e) {
  //  e.preventDefault();
  //  $('#list2').addClass('s-visible');
 // });

  $('.sld2sld').click(function(){
    $(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+$(this).data('video')+'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
  });


  $('.ob_gr').click(function(e){
    e.preventDefault();
    $('.infa').addClass('s-visible fadeInRight animated');
    $('.infa').hide();
    $('.infa[data-numb="'+$(this).data('numb')+'"]').show();
    open_right_pop();
  });



  function getURLParameter(name) {return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;} 
    function run_geo(geo_url){
        $.ajax({type: 'GET',url: geo_url,dataType: 'xml',
            success: function(xml) {$(xml).find('ip').each(function(){
            var city = $(this).find('city').text();
            var region = $(this).find('region').text();
            if(city!=region){var ipg = city+', '+region;}else{var ipg = city;}
            $('<input type="hidden" />').attr({name: 'location', class: 'location', value:ipg}).appendTo("form");
        });}});
    }
    $.get("http://ipinfo.io", function(response) {geo_url='http://ipgeobase.ru:7020/geo?ip='+response.ip; run_geo(geo_url);}, "jsonp");
    utm=[];$.each(["utm_source","utm_medium","utm_campaign","utm_term",'source_type','source','position_type','position','added','creative','matchtype'],function(i,v){$('<input type="hidden" />').attr({name: v, class: v, value: function(){if(getURLParameter(v) == undefined)return '-'; else return getURLParameter(v)}}).appendTo("form")});
    $('<input type="hidden" />').attr({name: 'url', value: document.location.href}).appendTo("form");
    $('<input type="hidden" />').attr({name: 'title', value: document.title}).appendTo("form");

    $('input[name="name"]').blur(function() {if($(this).val().length < 3) {$(this).addClass('error-input');}});
    $('input[name="name"]').focus(function() {$(this).removeClass('error-input');});

    //$('input[name="phone"]').mask('+7 (999) 999-99-99');
    $('input[name="phone"]').blur(function() {if($(this).val().length != 12) {$(this).addClass('error-input');}});
    $('input[name="phone"]').focus(function() {$(this).removeClass('error-input');});

    function validateEmail(email) {var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return re.test(email);};

    $('input[name="email"]').blur(function() {if(!validateEmail($(this).val())) {$(this).addClass('error-input');}});
    $('input[name="email"]').focus(function() {$(this).removeClass('error-input');});

    $('textarea').blur(function() {if($(this).val().length < 3) {$(this).addClass('error-input');}});
    $('textarea').focus(function() {$(this).removeClass('error-input');});

    $('form').submit(function(e){
        e.preventDefault();
        $(this).find('input[type="text"]').trigger('blur');
        $(this).find('textarea').trigger('blur');
        if(!$(this).find('input[type="text"]').hasClass('error-input')&&!$(this).find('textarea').hasClass('error-input')){
            var type=$(this).attr('method');
            var url=$(this).attr('action');
            var data=$(this).serialize();
            $.ajax({type: type, url: url, data: data,
            success : function(){
                $.arcticmodal('close');$('#okgo').arcticmodal();
            }
        }); 
        }
    });


});
$(window).load(function(){
  if (!$('body').hasClass('loaded')) {
    $('body').addClass('loaded');
    initfullpage();
   // scroll_logo();
  };

$('.closes').click(function(e){
    e.preventDefault();
    close_right_pop();
  });
  slider1 = $('#sld1').bxSlider({mode:'fade',pager:true,pagerCustom:'#sld1-pager',controls:false, auto:false, speed: 400,
      onSlideBefore:function($slideElement, oldIndex, newIndex){
        $('.h3-sld1[data-sld="'+oldIndex+'"],.p-sld1[data-sld="'+oldIndex+'"]').fadeOut(400);
        $('.h3-sld1[data-sld="'+newIndex+'"],.p-sld1[data-sld="'+newIndex+'"]').fadeIn(400);
        $('.klis_im').removeClass('active');
        $('.klis_im[data-sld="'+newIndex+'"]').addClass('active');
        var ofleft = $('.klient_sgr').offset().left-$('#sld-cont').offset().left;
        var left_gr = 88*newIndex;
        var right_gr = 88*newIndex-88*5;
        var css_left = parseInt($('#sld-cont').css('left').replace('px',''));
        console.log(ofleft,left_gr,right_gr,css_left);
        if(ofleft>left_gr){
          $('#sld-cont').css({
            left: -left_gr+704+'px'
          });
        }
        if(ofleft<right_gr){
          $('#sld-cont').css({
            left: -right_gr+704+'px'
          });
        }
      }
});
  $('#sld-cont').css('left','704px');
  slider1.goToNextSlide();
  $('.str_l').click(function(e){e.preventDefault();slider1.goToPrevSlide();});
  $('.str_r').click(function(e){e.preventDefault();slider1.goToNextSlide();});
  $('.klis_im').click(function(e){
    e.preventDefault();    
    slider1.goToSlide(parseInt($(this).data('sld')));
  });
/*  
  slider2 = $('#sld2').bxSlider({pager:true,pagerCustom:'.oval_gr',controls:false, auto:false, speed: 400});
  $('.str_lv').click(function(e){e.preventDefault();slider2.goToPrevSlide();});
  $('.str_rv').click(function(e){e.preventDefault();slider2.goToNextSlide();});
*/
  slider3 = $('#sld3').bxSlider({pager:true,pagerCustom: '#bx-pager',controls:false, auto:false, speed: 400});
  $('.str_lc').click(function(e){e.preventDefault();slider3.goToPrevSlide();});
  $('.str_rc').click(function(e){e.preventDefault();slider3.goToNextSlide();});

slider4 = $('#slid_but1').bxSlider({pager:true,pagerCustom: '#pager_but1',controls:false, auto:false, speed: 400});
slider5 = $('#slid_but2').bxSlider({pager:true,pagerCustom: '#pager_but2',controls:false, auto:false, speed: 400});

});

/*
$(window).scroll(function(){
  scroll_logo()
});


function scroll_logo(){  
  if ($(window).scrollTop() > 0 && !$('.sec1 p').hasClass('scroll')) {
    $('.sec1 p').addClass('scroll');
    $('.fix-logo').addClass('scroll');
  }else if($(window).scrollTop() == 0){
    $('.sec1 p').removeClass('scroll');
    $('.fix-logo').removeClass('scroll');    
  }
}*/




function initfullpage(){

if (isMobile != true) {
  $('#pages').fullpage({
        autoScrolling: false,
      afterLoad: function(anchorLink, index){
            //$(this).find('.animation2').addClass('fadeInDown animated');
          },
      onLeave: function(index, nextIndex, direction){
            $('.section:nth-child('+nextIndex+')').find('.animation').addClass('fade-up-custom');
            //$('.section:nth-child('+nextIndex+')').find('.animation2').addClass('fadeInDown animated');
          },
      afterRender: function(){
            setTimeout(function(){$('section.section.active').find('.animation').addClass('fade-up-custom')},500);
      },
      afterLoad: function(anchorLink, index){move_right_pop();
            if(index == 1){$('.site-nav.up').hide();}else{$('.site-nav.up').show();} 
            if(index == 13){$('.site-nav.down').hide();}else{$('.site-nav.down').show();} 
            if(index == 1 || index == 3 || index == 4 || index == 6 || index == 7 || index == 8 || index == 10 || index == 11 || index == 13){$('.site-nav').addClass('black');}else{$('.site-nav').removeClass('black');} 
            if(index == 1){$('.site-nav.down').addClass('animation4');}else{$('.site-nav.down').removeClass('animation4');}
            if(index == 1){$('.site-nav.down').addClass('animated');}else{$('.site-nav.down').removeClass('animated');}
            //if(index == 12){$('.fix-logo').hide();}else{$('.fix-logo').show();} 
      }
    });
  }else{

    move_right_pop();

     //check_index()
            //if(index == 1 || index == 3 || index == 4 || index == 6 || index == 7 || index == 9 || index == 10|| index == 12){$('.site-nav').addClass('black');}else{$('.site-nav').removeClass('black');}


  }
}
    



    var s_first = $('#pages>*').first();
    var s_second = $('#pages>*').first().next();
    var s_pre_last = $('#pages>*').last().prev();
    var s_last = $('#pages>*').last();

    var b_srolltop = $('body').scrollTop();

   /* 
   function check_index(){

      var ind_arr = [1,3,4,6,7,9,10,12];

      $('#pages>*').each(function(index, el) {
        index = index+1;
        for (var i = ind_arr.length - 1; i >= 0; i--) {
          if (index == ind_arr[i]) {
            if(b_srolltop >=$(el).offset().top && b_srolltop < $(el).next().offset().top){$('.fix-logo').hide();}else{$('.fix-logo').show();} 
          }
        }
      });

    }
    */

$(window).scroll(function() {

    b_srolltop = $('body').scrollTop();

    if(b_srolltop< $(s_second).offset().top){$('.site-nav.up').hide();}else{$('.site-nav.up').show();} 
    if(b_srolltop >=$(s_last).offset().top){$('.site-nav.down').hide();}else{$('.site-nav.down').show();} 
   // if(b_srolltop >=$(s_last).offset().top){$('.fix-logo').hide();}else{$('.fix-logo').show();} 
    
   // check_index()
});