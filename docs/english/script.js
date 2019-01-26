$(function(){
	
	//ヘッダーメニュー調整 http://qiita.com/zaru/items/82d61ac90394885fb486
	
    $('.date').text('2017.03.28');
    
    //スクロール時のアクション
	var scrollAction = function() {
		// スクロール位置がメニューのtop座標を超えたら固定にする
		if ($(window).scrollTop() >= 30) {
			$('#top-bar').css({"position":"fixed", "top":0, "left":0, "background":"rgba(255,255,255,0.85)","z-index": 10});
            $('#container').css("padding-top",130);
		} else {
			$('#top-bar').css({"position":"relative"});
            $('#container').css("padding-top",60);
		}
        
        //要素の表示
        var bottomPosition = $(window).height()/2+$(window).scrollTop();
        var picsTop = $('.top-various-works').offset().top;
        var aboutMeTop = $('#top-about-me').offset().top;
        if(picsTop < bottomPosition ){
            $('.top-various-works #work-pics').css({visibility:'visible',opacity:1});
        }
        if(aboutMeTop < bottomPosition ){
            $('#top-about-me ul').css({visibility:'visible',opacity:1});
        }
	}
	$(window).scroll(scrollAction);
	$('body').bind('touchmove', scrollAction);


	//ナビゲーションのホバーアクション
	$('#top-bar li').hover(
		function() {
			$('#top-bar .active').css("background", "rgba(243,152,0,0.3)");
		},
		function() {
			$('#top-bar .active').css("background", "rgba(243,152,0,1)");
		}
	);
	
    //ドロップダウンメニュー
	$('#top-bar-btn').click(function(){
		if($(this).find('i').hasClass('fa-bars')){
			$(this).find('i').removeClass('fa-bars').addClass('fa-times');
			$('#top-bar').find('ul').slideDown();
		}else{
			$(this).find('i').removeClass('fa-times').addClass('fa-bars');
			$('#top-bar').find('ul').slideUp();
		}
		
		
	})
    
    //ウィンドウサイズ変更時のアクション（写真のサイズ変更）
    var $width;
    var $height;	
	$(window).on('load resize', function(){
		if($(window).width()<=500){
			$width = 240;
			$('#myexperience img').attr("src","images/myexperience-small.gif");	
		}else if($(window).width()<=650){
			$width = 400;
			$('#myexperience img').attr("src","images/myexperience-small.gif");	
		}else if($(window).width()<=770){
			$width = 500;
			$('#myexperience img').attr("src","images/myexperience-small.gif");	
		}else if($(window).width()<=1000){
			$width = 500;
			$('#myexperience img').attr("src","images/myexperience.gif");	
		}else{
			$width = 660;
			$('#myexperience img').attr("src","images/myexperience.gif");	
		}
        $height = $width*640/960;
	   $("#top-image-wrapper ul li").css({"width":$width,"height":$height});
	})
	$("#top-image-wrapper ul li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
	$("#top-image-wrapper ul li").hide().css({"position":"absolute","top":0,"left":0});
	$("#top-image-wrapper ul li:first").addClass("active").show();
	var $interval = 3500; // 切り替わりの間隔（ミリ秒）
	var $fade_speed = 2000; // フェード処理の早さ（ミリ秒） 
	setInterval(function(){
	var $active = $("#top-image-wrapper ul li.active");
	var $next = $active.next("li").length?$active.next("li"):$("#top-image-wrapper ul li:first");
	$active.fadeOut($fade_speed).removeClass("active");
	$next.fadeIn($fade_speed).addClass("active");
    console.log('aaa');
	},$interval);
	
	//トップ移動	
	$('#up-arrow').click(function(){
		$('html,body').animate({'scrollTop':0},500);
	});
	//Photopart
	$('#photos li').click(function(){
		var thisPhoto = $(this).find('img').attr('src');
		var dataId = $(this).data('id');
		var photoText1,photoText2,photoText3,photoText4,photoText5,photoText6,photoText7,photoText8,photoText9;
		photoText1 = "Cooking photo. Most family have to use charcoal to make fire. And to save the charcoal, each meal is cooked one by one so it's not rare to take two hours.";
		photoText2 = 'Wild life in Africa. You can find chameleons anywhere here. Did you know that they make noize to intimidate us.';
		photoText3 = 'Local market. People start selling from about 5 AM. Each vegitable has price, but it is common to negotiate to reduce the price.';
		photoText4 = 'Kids playing with a tire. In Zambia, few family can afford to get playthings, so kids use anything on road for playing.';
		photoText5 = 'Except rich family, most families do not have water infrastructure in each house. So they have to make que to get water.';
		photoText6 = 'Kids. You can see that a girl on left side is putting hear extention. Actually, most women put hear extention or wig.';
		photoText7 = 'Family photo. In Zambia, generally people get married before they get 20 years old and have 5 to 6 children.';
		photoText8 = 'A man doing sowing. It is populer to use a cloth so-called "Chitenge". People use this cloth for anything like making cloths, carrying things, carring back a baby, put things on head. And many people like Japan.';
		photoText9 = 'Zambian people are very tough. They can even install a water tank on the tall base by them selves.';
		$('#photo-image-wrapper img').attr('src',thisPhoto);
		
		switch(dataId){
			case 1: $('#photo-image-wrapper p').text(photoText1);break;
			case 2: $('#photo-image-wrapper p').text(photoText2);break;
			case 3: $('#photo-image-wrapper p').text(photoText3);break;
			case 4: $('#photo-image-wrapper p').text(photoText4);break;
			case 5: $('#photo-image-wrapper p').text(photoText5);break;
			case 6: $('#photo-image-wrapper p').text(photoText6);break;
			case 7: $('#photo-image-wrapper p').text(photoText7);break;
			case 8: $('#photo-image-wrapper p').text(photoText8);break;
			case 9: $('#photo-image-wrapper p').text(photoText9);break;
			default: break;
		}
		
		$('#photo-modal-wrapper').fadeIn();	
	})
	$('#photo-modal-wrapper').click(function(){
		$(this).fadeOut();	
	})

	
})// JavaScript Document