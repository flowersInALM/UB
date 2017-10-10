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
// 暴露对象接口给window；
(function(window,document){
	var FunPage = function(targetDom,options){
		// 判断实例化方式；
		if(!(this instanceof FunPage)) return new FunPage(targetDom,options);
		// 初始参数设置；
		this.options = options;
		this.scaleW = this.options.scaleW ? this.options.scaleW : 1;
		if((typeof targetDom) == 'string'){
			this.targetDom = document.querySelector(targetDom);
		}else{
			this.targetDom = targetDom;
		}
		
		this.options.childDom = this.options.childDom ? this.options.childDom: '.childe';
		if((typeof this.options.childDom) == 'string'){
			this.childDom = this.targetDom.querySelectorAll(this.options.childDom);
		}else{
			this.childDom = this.options.childDom;
		}
		// 翻页键；
		this.prevBtn = this.targetDom.querySelector('.prev');
		this.nextBtn = this.targetDom.querySelector('.next');

		this.parentWid = this.targetDom.offsetWidth;
		this.childWid = parseFloat(this.parentWid) * parseFloat(this.scaleW);
		for(var i= 0; i < this.childDom.length; i ++){
			this.childDom[i].style.width = this.childWid + 'px';
		}
		// 调用init方法；
		this.init();
	};

	FunPage.prototype = {
		init : function(){
			this.event();
		},
		event : function(){
			var _this = this;

			// 尺寸适应；
			window.addEventListener('resize',function(){
				_this.parentWid = _this.targetDom.offsetWidth;
				_this.childWid = parseFloat(_this.parentWid) * parseFloat(_this.scaleW);
				for(var i = 0; i < _this.childDom.length; i ++){
					_this.childDom[i].style.width = _this.childWid + 'px';
				};
			});
			// 索引；
			function index(current,obj){
				for(var i = 0; i < obj.length; i ++){
					if(obj[i] == current){
						return i;
					}
				}
			};
			// 翻页；
			function ClickPage(direction){

				var navLength = _this.childDom.length;
				var iAll = _this.targetDom.querySelectorAll('i');
				var now = index(_this.targetDom.querySelector('.now'),iAll);
				var max,min,changeNow = 0;
				if(direction == 'prev'){
					changeNow = -1;
					min = 0;
					max = navLength ;
				}
				else if(direction == 'next'){
					changeNow = 1;
					min = -1;
					max = navLength - 1;
				}
				if((now > min) && (now < max)){
					now += changeNow;
					for(var i = 0; i < iAll.length; i++){
						iAll[i].className = " ";
					}
					iAll[now].className = 'now';
				}
				_this.targetDom.querySelector('.scroll').cssText = 'marginLeft:-' + (now * _this.childWid) + 'px;transition:all 0.3s ease 0s;'
			};
			_this.prevBtn.addEventListener('click',function(){
				ClickPage('prev');	
			});
			_this.nextBtn.addEventListener('click',function(){
				ClickPage('next');
			});
		}
	}
	window.FunPage = FunPage;
}(window,document));


