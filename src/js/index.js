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
});