// Make it rain!
$(document).ready(function() {
	var projectNav = $('#project-nav').offset().top;
	var designPosition = $('#trip-design').offset().top;
	var image2Position = $('#trip-design-content-2').offset().top;


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



// project-3 webflow animation

	
	if (distanceScrolled > designPosition - 600) {
		$('#trip-image1').addClass('trip-design-content-gallery-animation');
	} else {
		$('#trip-image1').removeClass('trip-design-content-gallery-animation');
	}

	if (distanceScrolled > image2Position - 600) {
		$('#trip-image2').addClass('trip-design-content-gallery-animation');
	} else {
		$('#trip-image2').removeClass('trip-design-content-gallery-animation');
	}

}); 
}); 













// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
// 	$(".zoom img").css({
// 		transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/20)/100+')',
// 		// "-webkit-filter": "blur(" + (scroll/200) + "px)",
// 		// filter: "blur(" + (scroll/200) + "px)"
// 	});
// });


