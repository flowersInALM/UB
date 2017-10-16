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
			$('.menu-btn').hide();
			$('.close-btn').show();
			$(".menu-ph").show().removeClass('menuhide').addClass('menushow');
			isMenuDown = true;
			return;
		}else{
			$('.menu-btn').show();
			$('.close-btn').hide();
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
				_this.targetDom.querySelector('.scroll').style.cssText = 'margin-left:-' + (now * _this.childWid) + 'px;'
			};
			_this.prevBtn.addEventListener('click',function(){
				ClickPage('prev');	
			});
			_this.nextBtn.addEventListener('click',function(){
				ClickPage('next');
			});
		}
	};


	var carousel = function(targetDom,options){
		// 判断实例化方式；
		if(!(this instanceof carousel)) return new carousel(targetDom,options);

		// 初始化数据；
		if((typeof targetDom) === 'string'){
			this.targetDom = document.querySelector(targetDom);
		}else{
			this.targetDom = targetDom;
		}
		this.speed = options.speed ? options.speed : 500;
		this.duration = options.duration ? options.duration : 3000; 
		options.prevBtn = options.prevBtn ? options.prevBtn : '.prev-btn';
		options.nextBtn = options.nextBtn ? options.nextBtn : '.next-btn';
		this.effect = options.effect ? options.effect : 'slide';
		if((typeof options.prevBtn) === 'string'){
			this.prevBtn = this.targetDom.querySelector(options.prevBtn);
		}else{
			this.prevBtn = options.prevBtn;
		}
		if((typeof options.nextBtn) === 'string'){
			this.nextBtn = this.targetDom.querySelector(options.nextBtn);
		}else{
			this.nextBtn = options.nextBtn;
		}
		
		this.navBox = this.targetDom.querySelector('.nav-box');
		this.navList = this.navBox.querySelectorAll('li');
		this.contentBox = this.targetDom.querySelector('.content-box');
		this.contentList = this.contentBox.querySelectorAll('li');
		this.contBoxWid = this.contentBox.offsetWidth;
		// 调用init方法；
		this.init();
	}
	carousel.prototype = {
		init : function(){
			var _this = this;
			this.cloneChild();
			_this.index = this.index(_this.navBox.querySelector('.on'),this.navList);
 			this.resize();
			this.clickNav();
			this.autoSlide();
		},
		// 监听页面resize;
		resize : function(){
			var _this = this;
			for( var i = 0 ;i < _this.contentList.length; i ++){
				_this.contentList[i].style.width = _this.contBoxWid + 'px';
			}
			window.addEventListener('resize',function(){
				_this.contBoxWid = _this.contentBox.offsetWidth;
				for( var i = 0 ;i < _this.contentList.length; i ++){
					_this.contentList[i].style.width = _this.contBoxWid + 'px';
				}
			})
		},
		// 获取元素索引；
		index : function(current,all){
			for(var i = 0; i < all.length ; i++){
				if(all[i] == current){
					return i;
				}
			}
		},
		getStyle : function(obj,attr){
			return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj,null)[attr];
		},
		animation : function(dom , attr , end , fn){
			dom.timer ? clearInterval(dom.timer) : null;
			//使回调函数中的this指向当前运动的元素对象
			dom.fn = fn;
			//添加动画
			dom.timer = setInterval(function(){
				//兼容不透明度
				if(attr=='opacity'){
					dom.start = parseFloat(carousel.prototype.getStyle(dom,attr))*100;
					var e = end * 100;
				}else{
					//重新获取起点
					dom.start = parseFloat(carousel.prototype.getStyle(dom,attr));
					//终点位置赋值
					var e = end;
				}
				//计算每一帧所要走的步子大小  
				dom.step = (e-dom.start)/20>0?Math.ceil((e-dom.start)/20):Math.floor((e-dom.start)/20);
				//判断动画停止条件
				if(dom.start==e){
					//停止动画
					clearInterval(dom.timer);
					//如果有回调函数，执行回调函数
					if(dom.fn){
						dom.fn();
					}
				}
				//兼容不透明度
				if(attr=='opacity'){
					dom.style[attr] = (dom.start += dom.step)/100;
					dom.style.filter = 'alpha(opacity='+(dom.start += dom.step)+')';
				}else{
					//赋值
					dom.style[attr] = (dom.start += dom.step) + 'px';
				}
				
			},10)
		},
		animations : function(dom , attr , times , fn){
			//初始化角度
			dom.deg = 0;
			//改变回调函数中的this指针
			dom.fn = fn;
			//停止上一个动画
			dom.timer ? clearInterval(dom.timer):null;
			//计算速率
			if(times=='slow'){
				var t = 20;
			}else if(times=='normal'){
				var t = 10;
			}else if(times=='fast'){
				var t = 5;
			}else{
				var t = times/90;
			}
			//保存对应css属性的起点值
			var start = {};
			for(var k in attr){
				//兼容不透明度
				if(k=='opacity'){
					start[k] = parseFloat(getStyle(dom,k))*100;
				}else{
					start[k] = parseInt(getStyle(dom,k));
				}
			}
			//动画开始
			dom.timer = setInterval(function(){
				dom.deg++;
				//判断停止条件
				if(dom.deg==90){
					//停止动画
					clearInterval(dom.timer);
					//执行回调函数
					if(dom.fn){
						dom.fn();
					}
				}
				//循环改变每一条属性
				for(var key in attr){
					if(key=='opacity'){
						var end = Math.round((attr[key]*100-start[key])*Math.sin(dom.deg*Math.PI/180));
						dom.style[key] = (end + start[key])/100;
						dom.style.filter ='alpha(opacity='+(end + start[key])+')';
					}else{
						//计算当前位置
						var end = Math.round((attr[key]-start[key])*Math.sin(dom.deg*Math.PI/180));
						dom.style[key] = end + start[key] + 'px';
					}	
				}
			},t)
		},
		cloneChild : function(){
			var _this = this;
			var first = _this.contentList[0].cloneNode(true);
			_this.contentBox.querySelector('ul').appendChild(first);
		},
		move : function(){
			var _this = this;
			_this.index --;
			this.animation(_this.contentBox.querySelector('ul'),'margin-left' , '-' + _this.index * _this.contBoxWid);
			_this.navList[_this.index].className = 'on';
		},
		clickNav : function(){
			var _this = this;
			_this.targetDom.onclick = function(e){
				var ev = e || window.event;
				if(ev.srcElement.parentElement.nodeName == 'LI'){
					for(var i = 0 ;i < _this.navList.length; i++){
						_this.navList[i].className = '';
					}

					_this.index = carousel.prototype.index(ev.srcElement.parentElement,_this.navList);
					carousel.prototype.animation(_this.contentBox.querySelector('ul'),'margin-left' , '-' + _this.index * _this.contBoxWid);
					_this.navList[_this.index].className = 'on';
				}else{
					return;
				}
			}
		},
		autoSlide : function(){
			var _this = this;
			clearInterval(_this.targetDom.timer);
			_this.targetDom.timer = setInterval(function(){
				if(_this.index == _this.navList.length-1){
					_this.index = -1;
				}
				_this.index ++;
				for(var i = 0 ;i < _this.navList.length; i++){
					_this.navList[i].className = '';
				}
				carousel.prototype.animation(_this.contentBox.querySelector('ul'),'margin-left' , '-' + _this.index * _this.contBoxWid);
				_this.navList[_this.index].className = 'on';
			},_this.duration);
		}
	}
	window.FunPage = FunPage;
	window.carousel = carousel;
}(window,document));


