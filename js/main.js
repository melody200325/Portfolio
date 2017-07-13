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
		filter: "blur(" + (scroll/200) + "px)"
	});
});

