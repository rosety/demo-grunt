define(["zepto"],function($) {

	function init() {
		console.log($)
		$('body').append('<p>我是王蓉。我是王蓉.</p>');
	}
	return {
		init:init
	}
});