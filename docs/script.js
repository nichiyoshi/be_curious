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
		photoText1 = '調理をしている風景。ほとんどの家庭は、炭で火をおこします。炭の節約のために一品ずつ調理するため、火の準備から調理完成までに2時間かかることも珍しくない。';
		photoText2 = 'アフリカと言えば野生動物。カメレオンが普通に道端を歩いています。カメレオンは、捕らえようとすると、「シャー」と泣き声を出して威嚇します。';
		photoText3 = '一般住民の市場。早朝5時ころから売り始めます。各野菜の定価はありますが、「二つ買うから安くして～」など値引き交渉するのが普通です。';
		photoText4 = 'タイヤで遊ぶ子供。日本のように遊具のある公園はほとんどなく、遊び道具を買うお金がない人が多いため、道に落ちている物が遊び道具です';
		photoText5 = '配水を待っている人たち。一部の富裕層を除いては、家庭に水道はありません。なので、井戸から水を汲むために順番待ちしなければなりません。';
		photoText6 = '子供たち。左の子は髪の毛にエクステンションをつけていますが、実はザンビアでは女性の9割はエクステンションかカツラをつけています。髪質的に長髪にすることができないがオシャレはしたい、というのが理由だと思います。';
		photoText7 = '家族写真。ザンビアでは、10代後半から20代前半に結婚し、5,6人の子供をつくるのが普通です。後ろにある家は、アリ塚を使って自分たちで建てています';
		photoText8 = '裁縫をしている写真。「チテンゲ」と呼ばれる独特な柄の布が様々な用途に使われます。服を作ったり、買い物を包む風呂敷にしたり、頭の上に物を乗っけるための土台にしたり。また、日本大好きと言う人が多く、サッカーや野球などの日本人選手のシャツをたまにみかけます。';
		photoText9 = '給水タンクを設置している様子。クレーンのようなものはあまり無いので、ロープを使って手作業でタンクを上まで運んでいます。';
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
	
	
	//要素の表示
//            var test=function(){
//                var bottomPosition = $(window).height()/2+$(window).scrollTop();
//				var picsTop = $('.top-various-works').offset().top;
//				var aboutMeTop = $('#top-about-me').offset().top;
//                if(picsTop < bottomPosition ){
//                    $('.top-various-works #work-pics').css({visibility:'visible',opacity:1});
//                }
//				if(aboutMeTop < bottomPosition ){
//                    $('#top-about-me ul').css({visibility:'visible',opacity:1});
//                }
//            }
//             $(window).scroll(test);
//             $('body').bind('touchmove', test);
	
})// JavaScript Document