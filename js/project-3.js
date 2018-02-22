// Make it rain!
$(document).ready(function() {
	var projectNav = $('#project-nav').offset().top;
	var designPosition = $('#trip-design').offset().top;
	var image2Position = $('#trip-design-content-2').offset().top;
	var image4Position = $('#trip-design-content-4').offset().top;
	var image5Position = $('#trip-design-content-5').offset().top;


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
	if (distanceScrolled > image4Position - 600) {
		$('#trip-image4').addClass('trip-design-content-gallery-animation');
	} else {
		$('#trip-image4').removeClass('trip-design-content-gallery-animation');
	}

	if (distanceScrolled > image5Position - 600) {
		$('#trip-image5').addClass('trip-design-content-gallery-animation');
	} else {
		$('#trip-image5').removeClass('trip-design-content-gallery-animation');
	}

}); 
}); 
(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        
        
        
        
        
        
        
  $('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // some text just to show zoom level on current item in this example
        .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })


        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	












// $(window).scroll(function() {
//   var scroll = $(window).scrollTop();
// 	$(".zoom img").css({
// 		transform: 'translate3d(-50%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/20)/100+')',
// 		// "-webkit-filter": "blur(" + (scroll/200) + "px)",
// 		// filter: "blur(" + (scroll/200) + "px)"
// 	});
// });


