//配置页面加载模块参数
require.config({
	paths: {
		"jquery"		:['lib/jquery-1.11.1.min','http://cdn.bootcss.com/jquery/1.11.1/jquery.min','http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min','lib/jquery-2.1.1.min'],
		"zepto"			: 'lib/zepto/zepto',
		"lazyload"      :'lib/jquery.lazyload.min',
		"rose"          :'rose'
	},
	shim: {//模块依赖关系
		jquery			: {exports: '$'},
        'lazyload' : {deps: ['jquery']},
        'rose' : {deps: ['jquery','lazyload']}
	}
});

require(["rose"]);

//加载团队内每个人的开发模块
 require(["js_parter_1"],function(p1) {
 	p1.init();
 });

//加载团队内每个人的开发模块
require(["js_parter_2"],function(p2) {
	p2.init();
});
