//第一部分动画效果实现
var m = 0;
var n = 0;
$('.part1 .nav a').click(function(){
	clearInterval(time)
	m =  $(this).index()
	$('.part1 .nav a').removeClass('now')
	$('.part1 .nav a').eq(m).addClass('now')
	$('.part1 .frame .child').stop().fadeOut(1000)
	$('.part1 .frame .child').eq(m).stop().fadeIn(4000)
	n = m
	go()
})

var time;
$('.part1 .frame .child .img').addClass('an-left')
$('.part1 .frame .child .text').addClass('an-right')
$('.part1 .frame .child').eq(0).stop().fadeIn(4000)
function go(){
clearInterval(time)
time = setInterval(function(){
	
	$('.frame .child').eq(n).stop().fadeOut(1000)
	n++
	if(n>2){n=0}
	
	$('.part1 .nav a').removeClass('now')
	$('.part1 .nav a').eq(n).addClass('now')
	$('.part1 .frame .child').eq(n).stop().fadeIn(4000)
},8000)
}
go()






// 第二部分动画实现
var x = 0;
var y = 0;
$('.part2 .nav a').stop().click(function(){
	clearInterval(timer)
	x =  $(this).index()
	$('.part2 .nav a').removeClass('now')
	$('.part2 .nav a').eq(x).addClass('now')
	$('.part2 .frame .child').stop().fadeOut(1000)
	$('.part2 .frame .child').eq(x).stop().fadeIn(4000)
	y = x
	run()
})


$('.part2 .frame .child .text').addClass('an-left')
$('.part2 .frame .child .img').addClass('an-right')
$('.part2 .frame .child .icon1').addClass('an-top')
var timer;
//开场动画高度监听实现
$(window).scroll(function(event) {
	var h = $(window).scrollTop()
	if (h > 950) {
		$('.part2 .frame .child').eq(0).stop().fadeIn(1000)
		//执行后关闭滚动事件
		// $(window).unbind('scroll')
	}
})

function run(){
clearInterval(timer)
timer = setInterval(function(){
	$('.part2 .frame .child').stop().fadeOut(1000)
	y++
	if(y>3){y=0}
	$('.part2 .nav a').removeClass('now')
	$('.part2 .nav a').eq(y).addClass('now')
	$('.part2 .frame .child').eq(y).stop().fadeIn(4000)
},6000)
}
run()

$(window).scroll(function(event) {
	var h = $(window).scrollTop()
	if (h > 1400) {
		$('.p3icon2').addClass('an-top')
		$('.p3icon2').stop().fadeIn(1000)
		//执行后关闭滚动事件
		// $(window).unbind('scroll')
	}
})


//part6 点击出现和消逝
$('.part6 .bt-pic .open').click(function(){
	$('.part6 .bt-pic .alert-pic').css('display','block')
})
$('.part6 .bt-pic .alert-pic .close').click(function(){
	$('.part6 .bt-pic .alert-pic').css('display','none')
})

$(window).scroll(function(event) {
	var h = $(window).scrollTop()
	if (h > 3500) {
		$('.part6 .text').addClass('an-left')
		$('.part6 .pic').addClass('an-right')
		$('.part6 .text').stop().fadeIn(1000)
		$('.part6 .pic').stop().fadeIn(1000)
		//执行后关闭滚动事件
		$(window).unbind('scroll')
	}
})



//旋转实现
$(window).load(function(){
	var tp = 0;
	var lt = 0;
	tp = $('.arcbox .img').css('top')
})

var timer2;
var r = 0;
var p = 0;
$('.part7 .imgtextbox .text').addClass('an-right')
$('.part7 .imgtextbox .imglist').addClass('an-top')
function zhuan(){
clearInterval(timer2)
timer2 = setInterval(function(){
	r++
	p++
	if(p==10){
		p=0
		$('.part7 .imgtextbox .imglist').removeClass('an-out1')
		$('.part7 .imgtextbox .text').removeClass('an-out2')
		}
	$('.part7 .imgtextbox .imglist').eq(p-1).addClass('an-out1')
	$('.part7 .imgtextbox .text').eq(p-1).addClass('an-out2')
	$('.imgtextbox .wrap1').stop().fadeOut(1000)
	$('.imgtextbox .wrap1').eq(p).fadeIn(2000)
	$('.part7 .arcbox').css('transform','rotate('+36*r+'deg)')
	$('.part7 .arcbox .img').css('transform','rotate('+(-36*r)+'deg)')
	console.log(r)
},5000)
}
zhuan()



















