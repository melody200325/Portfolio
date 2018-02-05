// Make it rain!
$(document).ready(function() {
	var projectNav = $('#project-nav').offset().top;
	var designPosition = $('#turf-design').offset().top;
	var image3Position = $('#turf-design-content-5').offset().top;
	


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

// project-1 webflow animation

// 	$('#image1').css('top', image1 - (distanceScrolled * 1.5) + 1000);
// 	if (distanceScrolled > designPosition - 600) {
// 		$('#nao-image1').addClass('nao-design-content-gallery-animation');
// 	} else {
// 		$('#nao-image1').removeClass('nao-design-content-gallery-animation');
// 	}

// 	if (distanceScrolled > image3Position - 600) {
// 		$('#nao-image3').addClass('nao-design-content-gallery-animation');
// 	} else {
// 		$('#nao-image3').removeClass('nao-design-content-gallery-animation');
// 	}

 



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


