// box1 的点击切换效果
var n = 0
$('.next').click(function(){
	$('.box1 .frame .child .list').eq(n).stop().fadeOut(1000)
	n++
	if(n>2){
		n = 0
	}
	$('.box1 .frame .child .list').eq(n).stop().fadeIn(1200)
	$('.nav span ').html(n+1+' '+'/'+' '+'3')
})

$('.prev').click(function(){
	$('.box1 .frame .child .list').eq(n).stop().fadeOut(1000)
	n--
	if(n<0){
		n = 2
	}
	$('.box1 .frame .child .list').eq(n).stop().fadeIn(1200)
	$('.nav span ').html(n+1+' '+'/'+' '+'3')
})


