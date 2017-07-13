// Make it rain!

var projectNav = $('#project-nav').offset().top;

// console.log(projectNav);

$(window).on('scroll', function() {
	
	var distanceScrolled = $(window).scrollTop();
	console.log('The distance from the top of the page to the nav is: ' + projectNav);
	console.log('The distance scrolled is: ' + distanceScrolled);



// Code to stick nav to top

	
	if (distanceScrolled > projectNav) {
		$('#project-nav').addClass('scrolled');
	} else {
		$('#project-nav').removeClass('scrolled');
	}
}); 


$(window).scroll(function() {
  var scroll = $(window).scrollTop();
	$(".zoom img").css({
		transform: 'translate3d(-50%, -'+(scroll/300)+'%, 0) scale('+(100 + scroll/20)/100+')',
		// "-webkit-filter": "blur(" + (scroll/200) + "px)",
		// filter: "blur(" + (scroll/200) + "px)"
	});
});

(function($) {

    var _options = new Array();
	var _itemId = 0;

	jQuery.fn.MyFadeOverImage = function(options) {
		_options[_options.length] = $.extend({}, $.fn.MyFadeOverImage.defaults, options);
		
		var idx = _options.length-1;
		var opt = _options[idx];
		
		$(this).each(function(){
			$(this).attr("idx", idx);
			$(this).fadeTo("fast", opt.normalAlpha);
			$(this).wrap("<DIV class=tongBg></DIV>");
			
			$(this).parent().css("background", opt.normalToneColor);
			$(this).parent().css("width",  opt.imageWidth+"px");
			$(this).parent().css("height",  opt.imageHeight+"px");
			
		}).mouseenter(function(){
			$(this).stop();
			$(this).fadeTo(_options[idx].fadeInSpeed, _options[idx].hoverAlpha);			
		}).mouseout(function(){
			$(this).stop();
			$(this).fadeTo(_options[idx].fadeOutSpeed, _options[idx].normalAlpha);
		});
	}

	jQuery.fn.MyFadeOverImage.defaults = {
		normalAlpha:0.8,
		hoverAlpha: 1,
		normalToneColor:"#000",
		imageWidth:100,
		imageHeight:100,
		fadeInSpeed: "1000",
		fadeOutSpeed: "1000"
	};
$("#project1-intro-img").MyFadeOverImage({
  normalAlpha:0.9,
  hoverAlpha: 1,
  normalToneColor:"#000" 
});
})(jQuery);
$("#project1-intro-img").MyFadeOverImage({
  normalAlpha:0.9,
  hoverAlpha: 1,
  normalToneColor:"#000" 
});