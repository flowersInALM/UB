$(function(){(new WOW).init(),$(".link-btn .chose").on("click",function(){var t=$(this).index(),e=$(this).attr("title");$(".cen-tit .name").text(e),$(".show").eq(t).show().siblings(".show").hide()});var t=!1;$(".menudown").on("click",function(){return 0==t?($(".menu-btn").hide(),$(".close-btn").show(),$(".menu-ph").show().removeClass("menuhide").addClass("menushow"),void(t=!0)):($(".menu-btn").show(),$(".close-btn").hide(),$(".menu-ph").removeClass("menushow").addClass("menuhide"),setTimeout(function(){$(".menu-ph").hide()},300),void(t=!1))}),$(".sec01 .in-li").on("mouseenter",function(){$(this).addClass("bounce");var t=$(this).index();$(".sec01 .in-int").eq(t).addClass("active").siblings(".in-int").removeClass("active"),$(this).on("mouseleave",function(){$(this).removeClass("bounce")})});var e=!0;$(".f-open").on("click",function(){return e?($(this).addClass("myclose"),$(".rit-f").addClass("myclose"),void(e=!1)):($(this).removeClass("myclose"),$(".rit-f").removeClass("myclose"),void(e=!0))});var n=$(window).scrollTop();addEventListener("scroll",function(){(n=$(window).scrollTop())>=100?$(".goTop").show():$(".goTop").hide()},!1),n>=100?$(".goTop").show():$(".goTop").hide(),$(".goTop").on("click",function(){return $("body,html").animate({scrollTop:0},1e3),!1})}),function(t,e){var n=function(t,i){if(!(this instanceof n))return new n(t,i);this.options=i,this.scaleW=this.options.scaleW?this.options.scaleW:1,this.targetDom="string"==typeof t?e.querySelector(t):t,this.options.childDom=this.options.childDom?this.options.childDom:".childe","string"==typeof this.options.childDom?this.childDom=this.targetDom.querySelectorAll(this.options.childDom):this.childDom=this.options.childDom,this.prevBtn=this.targetDom.querySelector(".prev"),this.nextBtn=this.targetDom.querySelector(".next"),this.parentWid=this.targetDom.offsetWidth,this.childWid=parseFloat(this.parentWid)*parseFloat(this.scaleW);for(var o=0;o<this.childDom.length;o++)this.childDom[o].style.width=this.childWid+"px";this.init()};n.prototype={init:function(){this.event()},event:function(){function e(t,e){for(var n=0;n<e.length;n++)if(e[n]==t)return n}function n(t){var n,o,s=i.childDom.length,r=i.targetDom.querySelectorAll("i"),a=e(i.targetDom.querySelector(".now"),r),l=0;if("prev"==t?(l=-1,o=0,n=s):"next"==t&&(l=1,o=-1,n=s-1),a>o&&a<n){a+=l;for(var c=0;c<r.length;c++)r[c].className=" ";r[a].className="now"}i.targetDom.querySelector(".scroll").style.cssText="margin-left:-"+a*i.childWid+"px;"}var i=this;t.addEventListener("resize",function(){i.parentWid=i.targetDom.offsetWidth,i.childWid=parseFloat(i.parentWid)*parseFloat(i.scaleW);for(var t=0;t<i.childDom.length;t++)i.childDom[t].style.width=i.childWid+"px"}),i.prevBtn.addEventListener("click",function(){n("prev")}),i.nextBtn.addEventListener("click",function(){n("next")})}};var i=function(t,n){if(!(this instanceof i))return new i(t,n);this.targetDom="string"==typeof t?e.querySelector(t):t,this.speed=n.speed?n.speed:500,this.duration=n.duration?n.duration:3e3,n.prevBtn=n.prevBtn?n.prevBtn:".prev-btn",n.nextBtn=n.nextBtn?n.nextBtn:".next-btn",this.effect=n.effect?n.effect:"slide","string"==typeof n.prevBtn?this.prevBtn=this.targetDom.querySelector(n.prevBtn):this.prevBtn=n.prevBtn,"string"==typeof n.nextBtn?this.nextBtn=this.targetDom.querySelector(n.nextBtn):this.nextBtn=n.nextBtn,this.navBox=this.targetDom.querySelector(".nav-box"),this.navList=this.navBox.querySelectorAll("li"),this.contentBox=this.targetDom.querySelector(".content-box"),this.contentList=this.contentBox.querySelectorAll("li"),this.contBoxWid=this.contentBox.offsetWidth,this.init()};i.prototype={init:function(){var t=this;this.cloneChild(),t.index=this.index(t.navBox.querySelector(".on"),this.navList),this.resize(),this.clickNav(),this.autoSlide()},resize:function(){for(var e=this,n=0;n<e.contentList.length;n++)e.contentList[n].style.width=e.contBoxWid+"px";t.addEventListener("resize",function(){e.contBoxWid=e.contentBox.offsetWidth;for(var t=0;t<e.contentList.length;t++)e.contentList[t].style.width=e.contBoxWid+"px"})},index:function(t,e){for(var n=0;n<e.length;n++)if(e[n]==t)return n},getStyle:function(e,n){return e.currentStyle?e.currentStyle[n]:t.getComputedStyle(e,null)[n]},animation:function(t,e,n,o){t.timer&&clearInterval(t.timer),t.fn=o,t.timer=setInterval(function(){if("opacity"==e){t.start=100*parseFloat(i.prototype.getStyle(t,e));o=100*n}else{t.start=parseFloat(i.prototype.getStyle(t,e));var o=n}t.step=(o-t.start)/20>0?Math.ceil((o-t.start)/20):Math.floor((o-t.start)/20),t.start==o&&(clearInterval(t.timer),t.fn&&t.fn()),"opacity"==e?(t.style[e]=(t.start+=t.step)/100,t.style.filter="alpha(opacity="+(t.start+=t.step)+")"):t.style[e]=(t.start+=t.step)+"px"},10)},animations:function(t,e,n,i){if(t.deg=0,t.fn=i,t.timer&&clearInterval(t.timer),"slow"==n)o=20;else if("normal"==n)o=10;else if("fast"==n)o=5;else var o=n/90;var s={};for(var r in e)s[r]="opacity"==r?100*parseFloat(getStyle(t,r)):parseInt(getStyle(t,r));t.timer=setInterval(function(){t.deg++,90==t.deg&&(clearInterval(t.timer),t.fn&&t.fn());for(var n in e)if("opacity"==n){i=Math.round((100*e[n]-s[n])*Math.sin(t.deg*Math.PI/180));t.style[n]=(i+s[n])/100,t.style.filter="alpha(opacity="+(i+s[n])+")"}else{var i=Math.round((e[n]-s[n])*Math.sin(t.deg*Math.PI/180));t.style[n]=i+s[n]+"px"}},o)},cloneChild:function(){var t=this,e=t.contentList[0].cloneNode(!0);t.contentBox.querySelector("ul").appendChild(e)},move:function(){var t=this;t.index--,this.animation(t.contentBox.querySelector("ul"),"margin-left","-"+t.index*t.contBoxWid),t.navList[t.index].className="on"},clickNav:function(){var e=this;e.targetDom.onclick=function(n){var o=n||t.event;if("LI"==o.srcElement.parentElement.nodeName){for(var s=0;s<e.navList.length;s++)e.navList[s].className="";e.index=i.prototype.index(o.srcElement.parentElement,e.navList),i.prototype.animation(e.contentBox.querySelector("ul"),"margin-left","-"+e.index*e.contBoxWid),e.navList[e.index].className="on"}}},autoSlide:function(){var t=this;clearInterval(t.targetDom.timer),t.targetDom.timer=setInterval(function(){t.index==t.navList.length-1&&(t.index=-1),t.index++;for(var e=0;e<t.navList.length;e++)t.navList[e].className="";i.prototype.animation(t.contentBox.querySelector("ul"),"margin-left","-"+t.index*t.contBoxWid),t.navList[t.index].className="on"},t.duration)}},t.FunPage=n,t.carousel=i}(window,document);