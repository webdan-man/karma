$(document).ready(function() {

  $('<link rel="stylesheet" href="css/libs.min.css"><link rel="stylesheet" href="css/style.css"><link href="https://fonts.googleapis.com/css?family=Ubuntu:400,300" rel="stylesheet">').appendTo('head');

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

  $('.close,.back').click(function(e){
    e.preventDefault();
    $(this).parent().arcticmodal('close');
  });

  $("#sld-cont").draggable({axis:'x',containment:[60, 0, 591, 95] });
	
  $('.gr_s').hover(function(){
    $('.wr_line '+$(this).attr('class').replace('gr_s ','.')).fadeIn(400);
    },function(){
    $('.wr_line '+$(this).attr('class').replace('gr_s ','.')).fadeOut(400);
  });

  $('.gr_s').click(function(){
    $('.gr_s p').fadeOut(400);
    $(this).find('p').fadeIn();
  });

  $('.video').click(function(){
    $(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/oSGfZQTPrM8?autoplay=1" frameborder="0" allowfullscreen></iframe>')
  });

  $('.form_gr a').click(function(e){
    e.preventDefault();
    $('#pop2').arcticmodal();
  });

  $('.sld2sld').click(function(){
    $(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+$(this).data('video')+'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
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


  slider1 = $('#sld1').bxSlider({mode:'fade',pager:true,pagerCustom:'#sld1-pager',controls:false, auto:false, speed: 400,
      onSlideBefore:function($slideElement, oldIndex, newIndex){
        $('.h3-sld1[data-sld="'+oldIndex+'"],.p-sld1[data-sld="'+oldIndex+'"]').fadeOut(400);
        $('.h3-sld1[data-sld="'+newIndex+'"],.p-sld1[data-sld="'+newIndex+'"]').fadeIn(400);
        
      }
});
  slider1.goToNextSlide();
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
      }
    });
}