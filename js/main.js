$(document).ready(function(){
	
	
	
	(function (){
		// 轮播图在屏幕小于769px时用小图代替
		function resize () {
		var isSmallScreen = $(window).width() < 768;
		$("#main_ad > .carousel-inner > .item").each(function(i,item){
			var $item = $(item);
			var imgSrc = isSmallScreen? $item.data("image-xs") : $item.data("image-lg");
			$item.css('backgroundImage','url("'+imgSrc+'")');
			isSmallScreen? $item.html('<img src="'+imgSrc+'" alt="" />') : $item.empty();
		});
		}
		$(window).on("resize",resize).trigger('resize');
		// 轮播图触摸事件
		var startX = 0;
		var endX = 0;
		var $carousel = $(".carousel");
		// 得到触摸起始点
		$carousel.on('touchstart',function(e){
			startX = e.originalEvent.touches[0].clientX;
		});
		// 得到触摸终点
		$carousel.on('touchmove',function(e){
			endX = e.originalEvent.touches[0].clientX;
		});
		// 触摸结束时比较大小，并作出判断
		$carousel.on('touchend',function(e){
			if(startX - endX >= 50) {
				$(this).carousel('next');
			}else if(startX - endX <= -50) {
				$(this).carousel('prev');
			}
		});
	}());

	








	// 给立即预约中的tab栏在不足屏幕宽度时添加滚动条
	(function (){
		$(window).on('resize',function(){
			var $ulContainer = $('.nav-tabs');
	  // 获取所有子元素的宽度和
			var width = 30; // 因为原本ul上有padding-left
			  // 遍历子元素
			$ulContainer.children().each(function(index, element) {
			    // console.log(element.clientWidth);
			    // console.log($(element).width());
			width += element.clientWidth;
			});
			  // 此时width等于所有LI的宽度总和
			  // 判断当前UL的宽度是否超出屏幕，如果超出就显示横向滚动条
			if (width > $(window).width()) {

			    $ulContainer
			      .css('width', width)
			      .parent().css('overflow-x', 'scroll');
			}
		});
	}());

	// 给新闻版块添加标题切换
	(function(){
		var $newsTitle = $("#news .news-title");
		var $nav = $("#news .nav");
		$nav.on('click','a',function(){
			$newsTitle.html($(this).data("news-title"));
		})
	}());

	
});