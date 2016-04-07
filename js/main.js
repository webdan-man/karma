
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

  $('<link rel="stylesheet" href="css/libs_old.min.css"><link rel="stylesheet" href="css/style.css"><link href="https://fonts.googleapis.com/css?family=Ubuntu:400,300" rel="stylesheet">').appendTo('head');

  setTimeout(function(){
    if(!$('body').hasClass('loaded')) {
      $('body').addClass('loaded');
      initfullpage();
    };
  },3000);

	$('.fon_silver a').click(function(e){
		e.preventDefault();
		$($(this).attr('href')).arcticmodal();
	});
  
  $('.pop .back').click(function(e){
    e.preventDefault();
    $(this).parent().arcticmodal('close');
  });
$('.slice .back_b').click(function(e){
   e.preventDefault();
    $('#list1').addClass('s-visible');
    $('#list1').removeClass('nvis');
    $('#list2').addClass('nvis');
    $('#list2').removeClass('s-visible');
  });
$('.slice .back_b2').click(function(e){
   e.preventDefault();
    $('#list2').addClass('s-visible');
    $('#list2').removeClass('nvis');
    $('#list3, #list4').addClass('nvis');
    $('#list3, #list4').removeClass('s-visible');
  });
  $("#sld-cont").draggable({axis:'x',containment:[60, 0, 591, 95] });
	
  $('.gr_s').hover(function(){
    $('.wr_line '+$(this).attr('class').replace('gr_s ','.')).fadeIn(400);
    },function(){
    $('.wr_line '+$(this).attr('class').replace('gr_s ','.')).fadeOut(400);
  });

  $('.video').click(function(){
    $(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/xW3fVjcgNvA?autoplay=1" frameborder="0" allowfullscreen></iframe>')
  });
$('.confbtn').click(function(e) {
    e.preventDefault();
    $('#conf_pop').arcticmodal();
  });
  $('.opi').click(function(e){
   e.preventDefault();
    $('#list2').addClass('s-visible');
    $('#list2').removeClass('nvis');
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
  });

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

    $('input[name="phone"]').mask('+7 (999) 999-99-99');
    $('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}});
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
        //console.log(ofleft,left_gr,right_gr,css_left);
        if(ofleft>left_gr){
          $('#sld-cont').css({
            left: -left_gr+'px'
          });
        }
        if(ofleft<right_gr){
          $('#sld-cont').css({
            left: -right_gr+'px'
          });
        }
      }
});
  slider1.goToNextSlide();
  $('#sld-cont').css('left','0px')
  $('.str_l').click(function(e){e.preventDefault();slider1.goToPrevSlide();});
  $('.str_r').click(function(e){e.preventDefault();slider1.goToNextSlide();});
  $('.klis_im').click(function(e){
    e.preventDefault();    
    slider1.goToSlide(parseInt($(this).data('sld')));
  });
  
  slider2 = $('#sld2').bxSlider({pager:true,pagerCustom:'.oval_gr',controls:false, auto:false, speed: 400});
  $('.str_lv').click(function(e){e.preventDefault();slider2.goToPrevSlide();});
  $('.str_rv').click(function(e){e.preventDefault();slider2.goToNextSlide();});
});
function initfullpage(){

  $('#pages').fullpage({
      scrollBar:true,
      scrollingSpeed: 1000,
      navigation: false,
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
      afterLoad: function(){move_right_pop();}
    });
}
