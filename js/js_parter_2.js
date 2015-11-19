define(["jquery"],function($) {

	function init() {
		console.log($);
		$('body').append('<p>姚雪的js代码.</p>');


	}
	return {
		init:init
	}
});