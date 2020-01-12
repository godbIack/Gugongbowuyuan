


//banner图片根据窗口高度改变
var h = 0;
h = $(window).height();
$('.banner').css({
	"height": h
});
$(window).resize(function() {
	h = $(window).height();
	$('.banner').css("height", h);
});


//banner图片动画样式
	var n = 0;

$('.sm-nav').children().click(function() {
	$('.sm-nav i').removeClass('now')
	
	n = $(this).index()
	$('.banner ul li').eq(n).css('z-index', 5);
	$('.banner ul li').eq(n).addClass('add').siblings().removeClass('add');
	$('.banner ul li').eq(n).children('a').addClass('imgbig').parent().siblings().children('a').removeClass('imgbig');
	$('.sm-nav i').eq(n).addClass('now')
	
})



	var zindex = 5;
	setTimeout(function(){
		$('.banner ul li').eq(0).css('z-index', 5);
		$('.banner ul li').eq(0).addClass('add').siblings().removeClass('add');
		$('.banner ul li').eq(0).children('i').addClass('imgbig').parent().siblings().children('i').removeClass('imgbig');
	},10);
	setInterval(function(){
		n++;
		if (n>3) {
			n=0;
			zindex = 5;
			$('.banner ul li').eq(1).css('z-index', 4)
			$('.banner ul li').eq(2).css('z-index', 3)
			$('.banner ul li').eq(3).css('z-index', 2)
			$('.banner ul li').eq(4).css('z-index', 1)
		}
		if(n==3){
			$('.banner ul li').eq(3).css('z-index',zindex);
			$('.banner ul li').eq(0).css('z-index',zindex)
		}
		$('.banner ul li').eq(n+1).css('z-index', zindex);
		$('.banner ul li').eq(n).css('z-index', ++zindex);
		
				$('.sm-nav i').removeClass('now')
				
				$('.sm-nav i').eq(n).addClass('now')

		$('.banner ul li').eq(n).addClass('add').siblings().removeClass('add');
		$('.banner ul li').eq(n).children('a').addClass('imgbig').parent().siblings().children('a').removeClass('imgbig');
	},4100);




// 左边盒子图片放大效果
$('.big-img').hover(function() {
	$('.big-img').css({
		'transition': '.5s',
		'transform': 'scale(1.2)'
	});
}, function() {
	$('.big-img').css({
		'transition': '.5s',
		'transform': 'scale(1)'
	});
});

//右侧盒子图片触碰暂停
for (let i = 0; i < 3; i++) {
	$('.block1 .right .right-box1 .bg img').eq(i).hover(function() {
		$(this).addClass('spbg')
	}, function() {
		$(this).removeClass('spbg')
	});
}




//鼠标移动特效
var DIR_POS = {
	left: {
		top: '0',
		left: '-100%'
	},
	right: {
		top: '0',
		left: '100%'
	},
	bottom: {
		top: '100%',
		left: '0'
	},
	top: {
		top: '-100%',
		left: '0'
	}
};
$('.box').each(function() {
	new MouseDirection(this, {
		enter: function($element, dir) {
			//每次进入前先把.trans类移除掉，以免后面调整位置的时候也产生过渡效果
			var $focus = $element.find('.focus').removeClass('trans');

			//调整位置
			$focus.css(DIR_POS[dir]);

			//reflow
			$focus[0].offsetWidth;

			//启用过渡
			$focus.addClass('trans');

			//滑入
			$focus.css({
				left: '0',
				top: '0'
			});
		},
		leave: function($element, dir) {
			$element.find('.focus').css(DIR_POS[dir]);
		}
	});
});


// 右边盒子图片放大效果
$('.block3-right img').hover(function() {
	$('.block3-right img').css({
		'transition': '.5s',
		'transform': 'scale(1.15)'
	});
}, function() {
	$('.block3-right img').css({
		'transition': '.5s',
		'transform': 'scale(1)'
	});
});

//右侧滑动条各种功能实现
$(window).scroll(function(event) {
	$('.sidebar').css("opacity", "0")
	var h = $(window).scrollTop()
	if (h > 900) {
		$('.sidebar').css("opacity", "1")
	}
})

$('.close').click(function() {
	$('.sidebarul').stop(true, false).slideToggle(300)
	$(this).toggleClass('toggleup')
})
$('.gotop').click(function() {
	$('html,body').animate({
		'scrollTop': 0 + 'px'
	}, 500)
})
//开场动画高度监听实现
$(window).scroll(function(event) {
	var h = $(window).scrollTop()
	var h2 = $('.banner').offset().top
	if (h > h2) {
		$('.block1 .left').addClass('fadeup')
		$('.block1 .right').addClass('fadeup2')
		$('.block1 .right .right-box2 .list li').css('width','22.5%')
	}
})



//键盘事件禁用
function click() {
	event.returnValue = false;
	alert("当前设置不允许使用右键 喵~");
}

function keydown() {
	if (event.keyCode == 123) {
		event.keyCode = 0;
		event.returnValue = false;
		alert("当前设置不允许使用F12键 喵~");
	}
	if (event.keyCode == 116) {
		event.keyCode = 0;
		event.returnValue = false;
		alert("当前设置不允许使用F5键 喵~");
	}
	if ((event.ctrlKey) && (event.keyCode == 83)) {
		event.returnValue = false;
		alert("想保存页面 没门儿 喵~");
	}
	
	if ((event.ctrlKey) && (event.keyCode == 16) && (event.keyCode == 73)) {
		event.returnValue = false;
		alert("想检查页面 没门儿 喵~");
	}


}
document.oncontextmenu = click;
document.onkeydown = keydown;
