!function rose(o){

	var r=o || {};

	r.lazyloadPic=function(){
		var _lazy = $("img.lazy");
		console.log(_lazy);
		console.log($)
		_lazy.lazyload({
			effect: "fadeIn",
			threshold : 200
		});
	};

	r.isIosapp=function(){
		//嵌入iosapp
			var isIPhone = /iPhone/i.test(navigator.userAgent),
				isIPad = /iPad/i.test(navigator.userAgent),
				isAndroid = /android/i.test(navigator.userAgent);
			var isIOS = isIPhone  || isIPad;
			var sW=screen.width,
				sH=screen.height,
				wW=$(window).width(),
				wH=$(window).height();
			var home='<a id="return" href="http://wap.fruitday.com/roseapp/" style="display:block; position:fixed; bottom:120px; left:20px; z-index:3000; width:46px; height:46px; background:rgba(0,0,0,.8); font-size:2.4em; line-height:46px; color:#f00; text-align:center; border-radius:10px; text-decoration:none;">A</a>'
			if(isIPhone && sW===wW && sH===wH){
				$('body').css({'paddingTop':'1%', 'height':'99%'}).append(home);
			}
	};

	r.init=function(){
		$(function(){
			r.lazyloadPic();
			wait(3000,function(){
				$('body').append('<p>Function is ready to work.Rose Rose Rose.</p>');
			})
			//r.isIosapp();

		});
	};
	return r.init();
}(jQuery,window,document);