


var time;
var n = 1;
function go(){
clearInterval(time)
time = setInterval(function(){
	n++
	if(n>2){
		$('.scrollframe').css('margin-left','0px')
		n=1
		}
	console.log(n);
	$('.scrollframe').stop().animate({'margin-left':'-'+n*1450+'px'},1000)
	if(n==1||n==3){
		$('.i-1').addClass('now-i').siblings().removeClass('now-i')
		// $('.ednav span i').eq(1).removeClass('now-i')
	}else{
		$('.i-2').addClass('now-i').siblings().removeClass('now-i')
		// $('.ednav span i').eq(0).removeClass('now-i')
	}
},5000)	
}
 go()

$('.ednav a:nth-child(1)').click(function(){
	n--
	if(n == 0){
		$('.scrollframe').css('margin-left','-4350px')
		n=2
		}
	$('.scrollframe').stop().animate({'margin-left':'-'+n*1450+'px'},1000)
	// $('.scrollframe').css('margin-left','-'+n*1450+'px')
})
$('.ednav a:nth-child(3)').click(function(){
	n++
	if(n>3){
		$('.scrollframe').css('margin-left','-1450px')
		n=2
		}
	$('.scrollframe').stop().animate({'margin-left':'-'+n*1450+'px'},1000)
})



//ed1-2图片放大效果
$('.ed1-2 .wrap .item').hover(function() {
	$(this).find('img').addClass('itemshow')
}, function() {
	$(this).find('img').removeClass('itemshow')
});

//ed1-5图片旋转
$('.ed5button').hover(function() {
	$('.ed5button').stop().css('transform','rotateY(360deg)')
}, function() {
	$('.ed5button').stop().css('transform','rotateY(0deg)')
});

//高度监听动画
$(window).scroll(function(event) {
	var h = $(window).scrollTop()
	if (h > 650) {
		$('.ed1-4 .item.i1 .img .img2').addClass('fadein')
		$('.ed1-4 .item.i3 .img .img2').addClass('fadeout')
		$('.ed1-4 .item.i4 .img .img2').addClass('fadeup')
		$('.girl').addClass('fadein')
	}
})
