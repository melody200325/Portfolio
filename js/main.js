// Make it rain!
$(document).ready(function() {
	var projectNav = $('#project-nav').offset().top;
	var designPosition = $('#nao-design').offset().top;
	var image3Position = $('#nao-design-content-3').offset().top;


// console.log(projectNav);

$(window).on('scroll', function() {
	
	var distanceScrolled = $(window).scrollTop();
	// console.log('The distance from the top of the page to the nav is: ' + projectNav);
	console.log('The distance scrolled is: ' + distanceScrolled);



// Code to stick nav to top

	
	if (distanceScrolled > projectNav) {
		$('#project-nav').addClass('scrolled');
	} else {
		$('#project-nav').removeClass('scrolled');
	}

	// $('#image1').css('top', image1 - (distanceScrolled * 1.5) + 1000);
	if (distanceScrolled > designPosition - 600) {
		$('#nao-image1').addClass('nao-design-content-gallery-animation');
	} else {
		$('#nao-image1').removeClass('nao-design-content-gallery-animation');
	}

	if (distanceScrolled > image3Position - 600) {
		$('#nao-image3').addClass('nao-design-content-gallery-animation');
	} else {
		$('#nao-image3').removeClass('nao-design-content-gallery-animation');
	}

}); 



// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
// 	$(".zoom img").css({
// 		transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/20)/100+')',
// 		// "-webkit-filter": "blur(" + (scroll/200) + "px)",
// 		// filter: "blur(" + (scroll/200) + "px)"
// 	});
// });

});



	var sap1Position = $('#sap-design').offset().top;
	var sap2Position = $('#sap-design-content-2').offset().top;
	var sap3Position = $('#sap-design-content-4').offset().top;
$(window).on('scroll', function() {

var distanceScrolled = $(window).scrollTop();


if (distanceScrolled > sap1Position - 600) {
		$('#sap-image1').addClass('sap-design-content-gallery-animation1');
		$('#sap-image2').addClass('sap-design-content-gallery-animation1');
	} else {
		$('#sap-image1').removeClass('sap-design-content-gallery-animation1');
		$('#sap-image2').addClass('sap-design-content-gallery-animation1');
	}

	if (distanceScrolled > sap2Position - 600) {
		$('#sap-image3').addClass('sap-design-content-gallery-animation1');
		$('#sap-image4').addClass('sap-design-content-gallery-animation1');
	} else {
		$('#sap-image3').removeClass('sap-design-content-gallery-animation1');
		$('#sap-image4').removeClass('sap-design-content-gallery-animation1');
	}
	if (distanceScrolled > sap3Position - 600) {
		$('#sap-image6').addClass('sap-design-content-gallery-animation1');
		$('#sap-image7').addClass('sap-design-content-gallery-animation1');

	} else {
		$('#sap-image6').removeClass('sap-design-content-gallery-animation1');
		$('#sap-image7').removeClass('sap-design-content-gallery-animation1');
	}
}); 
