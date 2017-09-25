$(function(){
	new WOW().init();

    $('.link-btn .chose').on('click',function(){
        var $idx = $(this).index();
        var intxt = $(this).attr('title');
        $('.cen-tit .name').text(intxt);
        $('.show').eq($idx).show().siblings('.show').hide();
    });

	// 移动端menu弹出效果；
	var isMenuDown = false;
	$('.menudown').on('click',function(){
		if(isMenuDown == false){
			$('.menu-open').addClass('hiden');
			$('.menu-close').removeClass('hiden');
			$('.down').removeClass('down').addClass('up');
			$(".menu-ph").show().removeClass('menuhide').addClass('menushow');
			isMenuDown = true;
			return;
		}else{
			$('.menu-open').removeClass('hiden');
			$('.menu-close').addClass('hiden');
			$('.up').removeClass('up').addClass('down');
			$('.menu-ph').removeClass('menushow').addClass('menuhide');
			setTimeout(function(){
				$('.menu-ph').hide();
			},300);
			isMenuDown = false;
			return;
		}
	})

	$('.sec01 .in-li').on('mouseenter',function(){
		$(this).addClass('bounce');
		var x = $(this).index();
		$('.sec01 .in-int').eq(x).addClass('active').siblings('.in-int').removeClass('active');
		$(this).on('mouseleave',function(){
			$(this).removeClass('bounce');
		})
	});

	// siderbar;
	var isOpen  = true;
	$('.f-open').on('click',function(){
		if(isOpen){
			$(this).addClass('myclose');
			$('.rit-f').addClass('myclose');
			isOpen = false;
			return;
		}else{
			$(this).removeClass('myclose');
			$('.rit-f').removeClass('myclose');
			isOpen = true;
			return;
		}
	})

	//toTop;
  	var $totop = $(window).scrollTop();
	addEventListener('scroll',function(){
		$totop = $(window).scrollTop();
		if($totop >= 100){
			$('.goTop').show();
		}else{
			$('.goTop').hide();
		}
	},false);
	if($totop >= 100){
		$('.goTop').show();
	}else{
		$('.goTop').hide();
	}
	$('.goTop').on('click',function(){
		$('body,html').animate({scrollTop:0},1000);
		return false;
	});

	// 图片尺寸自适应；
	var widtu = $('.focus').width()*0.92;
	var widtu2 = $('.focus2').width()*0.608;
	$(".focus .childe").width(widtu);
	$('.focus2 .childe').width(widtu2);
	window.addEventListener('resize',function(){
		widtu = $('.focus').width() * 0.92;
		widtu2 = $('.focus2').width() * 0.608;
		$('.focus .childe').width(widtu);
		$('.focus2 .childe').width(widtu2);
	})
	// 翻页动作;
	$('.focus .next').on('click',function(){
		var length = $('.focus .childe').length;
		var now = $('.focus .now').index();
		if(now < length - 1){
			now ++;
			$('.focus .nav').find('i').eq(now).addClass('now').siblings().removeClass('now');
			$(".focus .scroll").animate({
				marginLeft: '-' + now * widtu + 'px'
			})
		}
	})
	$('.focus .prev').on('click',function(){
		var length = $('.focus .childe').length;
		var now = $('.focus .now').index();
		if(now > 0){
			now --;
			$(".focus .nav").find('i').eq(now).addClass('now').siblings().removeClass('now');
			$('.focus .scroll').animate({
				marginLeft: '-' + now * widtu + 'px'
			})
		}
	});
	$('.focus2 .next').on('click',function(){
		var length = $('.focus2 .childe').length;
		var now = $('.focus2 .now').index();
		if(now < length - 1){
			now ++;
			$('.focus2 .nav').find('i').eq(now).addClass('now').siblings().removeClass('now');
			$(".focus2 .scroll").animate({
				marginLeft: '-' + now * widtu2 + 'px'
			})
		}
	})
	$('.focus2 .prev').on('click',function(){
		var length = $('.focus2 .childe').length;
		var now = $('.focus2 .now').index();
		if(now > 0){
			now --;
			$(".focus2 .nav").find('i').eq(now).addClass('now').siblings().removeClass('now');
			$('.focus2 .scroll').animate({
				marginLeft: '-' + now * widtu2 + 'px'
			})
		}
	});
});