//导航栏滑出滑入效果
for (let n = 2; n < 9; n++) {
	$(".nav-c" + n).mouseenter(function() {
		//排他思想应用
		for (let m = 2; m < 9; m++) {
			$(".c" + m).stop(true, false).slideUp(0);
			$(".cb" + m).stop(true, false).slideUp(0);
		}
		$(".c" + n).slideDown(200);
		$(".cb" + n).slideDown(0);
	});
	$(".c" + n).mouseleave(function() {
		$(".c" + n).stop(true, false).slideUp(0);
		$(".cb" + n).stop(true, false).slideUp(0);
	});
}
//login窗口弹出
$('.login').mouseenter(function() {
	$('.loginbox').css({
		'opacity': '1',
		'transition': '.3s'
	});
});
$('.loginbox').mouseleave(function() {
	$('.loginbox').css({
		'opacity': '0',
		'transition': '.3s'
	});
});
$('.lang').mouseenter(function() {
	$('.langbox').css({
		'opacity': '1',
		'transition': '.3s'
	});
});
$('.langbox').mouseleave(function() {
	$('.langbox').css({
		'opacity': '0',
		'transition': '.3s'
	});
});






//二维码hover事件
$('.code2d').hover(function() {
	$('.d2bg').css({
		'display': 'block'
	});
}, function() {
	$('.d2bg').css({
		'display': 'none'
	});
});
//浏览推荐click
$('.footer-btns').click(function(){
	$('.foot-bottom').stop(true,false).slideDown(500)
})
$('.foot-bottom').mouseleave(function(){
	$('.foot-bottom').stop(true,false).slideUp(500)
})
