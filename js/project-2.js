// Make it rain!
$(document).ready(function() {

	
	var sap1Position = $('#sap-design').offset().top;
	var sap2Position = $('#sap-design-content-2').offset().top;
	var sap3Position = $('#sap-design-content-4').offset().top;
	


// console.log(projectNav);

$(window).on('scroll', function() {
	
	var distanceScrolled = $(window).scrollTop();
	
	console.log('The distance scrolled is: ' + distanceScrolled);



// project-2 webflow animation

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
}); 













// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
// 	$(".zoom img").css({
// 		transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/20)/100+')',
// 		// "-webkit-filter": "blur(" + (scroll/200) + "px)",
// 		// filter: "blur(" + (scroll/200) + "px)"
// 	});
// });


