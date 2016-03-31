$(document).ready(function() {
	
	$('<link rel="stylesheet" href="css/libs.min.css"><link rel="stylesheet" href="css/style.css"><link href="https://fonts.googleapis.com/css?family=Ubuntu:400,300" rel="stylesheet">').appendTo('head');

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

    $('.video').click(function(){
    	$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/oSGfZQTPrM8?autoplay=1" frameborder="0" allowfullscreen></iframe>')
  	});


	$('.vid_otz').click(function(){
		$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+$(this).data('video')+'?autoplay=1" frameborder="0" allowfullscreen></iframe>')
	});
	
	$('.back').click(function(e){
		e.preventDefault();
		$(this).parent().arcticmodal('close');
	});

	//$('.form_gr a').click(function(){
	//	$('.pop').arcticmodal();
	//});
    $('.btn_ml').click(function(){
        $('.pop_m').arcticmodal();
    });
    $('.pop_m li a').click(function(){
        $('.ved_p1').arcticmodal();
    });

    $('.opi').click(function(e){
   e.preventDefault();
    $('#list2').addClass('s-visible fadeInRight animated');
    $('#list2').removeClass('nvis');
    $('#list1').addClass('nvis');
    $('#list1').removeClass('s-visible');

  });
  $('.opi2').click(function(e){
   e.preventDefault();
    $('#list3').addClass('s-visible fadeInRight animated');
    $('#list3').removeClass('nvis');
    $('#list2').addClass('nvis');
    $('#list2').removeClass('s-visible');
  });
$('.opi3').click(function(e){
   e.preventDefault();
    $('#list4').addClass('s-visible fadeInRight animated');
    $('#list4').removeClass('nvis');
    $('#list2').addClass('nvis');
    $('#list2').removeClass('s-visible');
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
	slider1 = $('#sld1').bxSlider({pager:true,pagerCustom:'.str_slid1',controls:false, auto:false, speed: 400});
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
	slider3 = $('#sld3').bxSlider({pager:true,pagerCustom:'.oval_gr',controls:false, auto:false, speed: 400});
	
	
});