slider6 = false;
slider7 = false;
function init_slider6(){
  if (slider6) {
    slider6.destroySlider();
  } 
  slider6 = $('#slid_but1').bxSlider({pager:true,pagerCustom:'#page6',controls:false, auto:false, speed: 400,onSliderLoad:function(){
    console.log('slider6');
        }});
}
function init_slider7(){
  if (slider7) {
    slider7.destroySlider();
  } 
  slider7 = $('#slid_but2').bxSlider({pager:true,pagerCustom:'#page7',controls:false, auto:false, speed: 400,onSliderLoad:function(){
    console.log('slider7');
        }});
}
$(document).ready(function() {
	
	$('<link rel="stylesheet" href="css/libs.min.css"><link rel="stylesheet" href="css/style.css"><link href="https://fonts.googleapis.com/css?family=Ubuntu:400,300&subset=latin,cyrillic" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Roboto:400,300&subset=latin,cyrillic" rel="stylesheet" type="text/css">').appendTo('head');

	setTimeout(function(){$('.animation').addClass('animated');},500);

	$('.tex_trig').click(function(){
		$('.tex_trig.active').removeClass('active');
		$(this).addClass('active');
		$('.tex_w.active').fadeOut().removeClass('active');
		$('.tex_w[data-block="'+$(this).data('block')+'"]').fadeIn().addClass('active');
	});

    $('.sec8').swipe({
        swipe: function(event, direction) {
            if (direction === 'left' || direction === 'right') {
                $('.tex_trig:not(.active)').trigger('click');
            }
        },
        allowPageScroll: "vertical" 
    });
//menu
var menu_active = 0;
$('.menu-btn').click(function(){
  if (!$('.menu').hasClass('active')) {
    $('.menu').addClass('active');
    $('.menu-btn').addClass('men_btn_h');
    menu_active = 1;
  } else{
    $('.menu').removeClass('active');
    $('.menu-btn').removeClass('men_btn_h');
    menu_active = 0;
  }
});
$('.menu .menu-a').click(function(e){
  e.preventDefault();
  $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
  $('.menu').removeClass('active');
  $('.menu-btn').removeClass('men_btn_h');
    menu_active = 0;
});
 $('.close-m').click(function(e) {
    e.preventDefault();
    $('.menu').removeClass('active');
    $('.menu-btn').removeClass('men_btn_h');
  });

    $('.video').click(function(){
    	$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/xW3fVjcgNvA?autoplay=1;rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>')
  	});


	$('.vid_otz').click(function(){
		$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+$(this).data('video')+'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
	});
	
	$('.back').click(function(e){
		e.preventDefault();
		$(this).parent().arcticmodal('close');
	});
  $('#zz-btn').click(function(e) {
    e.preventDefault();
    $('.pop').arcticmodal();
  });
$('.day1,.day2,.day3,.day4,.day5,.day6,.var1_pr,.var2_pr').click(function(e){e.preventDefault();$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 500);});

$('.day1').click(function() {
  if ($('#data1').hasClass('active')) {
    $('.day_gr_kon').removeClass('active');
    $("html, body").animate({ scrollTop: $('#sec_sl').offset().top}, 500);
  }else {
  $('.day_gr_kon').removeClass('active');
  $('#data1').toggleClass('active');
  }
});
$('.day2').click(function() {
  if ($('#data2').hasClass('active')) {
    $('.day_gr_kon').removeClass('active');
    $("html, body").animate({ scrollTop: $('#sec_sl').offset().top}, 500);
  }else {
  $('.day_gr_kon').removeClass('active');
  $('#data2').toggleClass('active');
  }
});
$('.day3').click(function() {
  if ($('#data3').hasClass('active')) {
    $('.day_gr_kon').removeClass('active');
    $("html, body").animate({ scrollTop: $('#sec_sl').offset().top}, 500);
  }else {
  $('.day_gr_kon').removeClass('active');
  $('#data3').toggleClass('active');
}
});
$('.day4').click(function() {
  if ($('#data4').hasClass('active')) {
    $('.day_gr_kon').removeClass('active');
    $("html, body").animate({ scrollTop: $('#sec_sl').offset().top}, 500);
  }else {
  $('.day_gr_kon').removeClass('active');
  $('#data4').toggleClass('active');
}
});
$('.day5').click(function() {
  if ($('#data5').hasClass('active')) {
    $('.day_gr_kon').removeClass('active');
    $("html, body").animate({ scrollTop: $('#sec_sl').offset().top}, 500);
  }else {
  $('.day_gr_kon').removeClass('active');
  $('#data5').toggleClass('active');
}
});
$('.day6').click(function() {
  if ($('#data6').hasClass('active')) {
    $('.day_gr_kon').removeClass('active');
    $("html, body").animate({ scrollTop: $('#sec_sl').offset().top}, 500);
  }else {
  $('.day_gr_kon').removeClass('active');
  $('#data6').toggleClass('active');
}
});
$('.var1_pr').click(function() {
  if ($('.var1_prozh').hasClass('active')) {
    $('.var1_prozh').removeClass('active');
    $("html, body").animate({ scrollTop: $('#sec_sl').offset().top}, 500);
  }else {
  $('.var2_prozh').removeClass('active');
  $('.var1_prozh').toggleClass('active');
  init_slider6();
}
});
$('.var2_pr').click(function() {
  if ($('.var2_prozh').hasClass('active')) {
    $('.var2_prozh').removeClass('active');
    $("html, body").animate({ scrollTop: $('#sec_sl').offset().top}, 500);
  }else {
  $('.var1_prozh').removeClass('active');
  $('.var2_prozh').toggleClass('active');
  init_slider7();
}
});
$('.pr_t').click(function() {
  $('.one_gr, .usl_gr, .us_pr').removeClass('active');
  $('.day_grup, .pr_t').addClass('active');
});
$('.us_pr').click(function() {
  $('.one_gr, .day_grup, .pr_t').removeClass('active');
  $('.usl_gr, .us_pr').addClass('active');
  init_slider6();
});
$('.podr1').click(function() {
  $('.usl_gr, .day_grup, .pr_t, .us_pr').toggleClass('active');
  init_slider6();
});
$('.podr2').click(function() {
  $('.usl_gr, .day_grup, .pr_t, .us_pr').toggleClass('active');
  $('.var1_prozh').removeClass('active');
  $('.var2_prozh').addClass('active');
  init_slider7();
});
$('.pr_t,.us_pr,.podr1,.podr2').click(function(e){e.preventDefault();$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 500);});



	//$('.form_gr a').click(function(){
	//	$('.pop').arcticmodal();
	//});
    $('.btn_ml').click(function(){
        $('.pop_m').arcticmodal();
    });

    $('.pop_m li a').click(function(e){
    e.preventDefault();
    $('.ved_p1[data-numb="'+$(this).data('numb')+'"]').arcticmodal();
  });

   /* $('.list .back1').click(function(e){
   e.preventDefault();
    $('#list1').addClass('s-visible');
    $('#list1').removeClass('nvis');
    $('#list2').addClass('nvis');
    $('#list2').removeClass('s-visible');
  });
$('.list .back2').click(function(e){
   e.preventDefault();
    $('#list1').addClass('s-visible');
    $('#list1').removeClass('nvis');
    $('#list3').addClass('nvis');
    $('#list3').removeClass('s-visible');
  });


    $('.opi').click(function(e){
   e.preventDefault();
    $('#list3').addClass('s-visible');
    $('#list3').removeClass('nvis');
    $('#list1').addClass('nvis');
    $('#list1').removeClass('s-visible');

  });
  /*$('.opi2').click(function(e){
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
	slider1 = $('#sld1').bxSlider({pager:true,pagerCustom:'.str_slid1',controls:false, auto:false, speed: 400});
    slider4 = $('#sld4').bxSlider({pager:false,controls:false, auto:false, speed: 400});
	slider2 = $('#sld2').bxSlider({pager:true,pagerCustom:'.str_slid2',controls:false, auto:false, speed: 400,
		onSlideBefore:function($slideElement, oldIndex, newIndex){
			$('.star_w').addClass('fadeouted');
            $('.star_w').removeClass('active');
            $('.star_w[data-sld="'+newIndex+'"]').removeClass('fadeouted');
            $('.star_w[data-sld="'+newIndex+'"]').addClass('active');
      	},
		onSlideAfter:function($slideElement, oldIndex, newIndex){
			$('.star_w').addClass('fadeouted');
            $('.star_w').removeClass('active');
            $('.star_w[data-sld="'+newIndex+'"]').removeClass('fadeouted');
            $('.star_w[data-sld="'+newIndex+'"]').addClass('active');
		},
      	onSliderLoad:function(){
        	$('.star_w.active.bx-clone').removeClass('active');
        	$('.star_w').addClass('fadeouted');
        	$('.star_w.active').removeClass('fadeouted');
      	}
	});
	//slider3 = $('#sld3').bxSlider({pager:true,pagerCustom:'.oval_gr',controls:false, auto:false, speed: 400});
	slider5 = $('#sld5').bxSlider({pager:true,pagerCustom:'#page5',controls:false, auto:false, speed: 400});
  
});