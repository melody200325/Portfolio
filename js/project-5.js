// Make it rain!
$(document).ready(function() {
	var projectNav = $('#project-nav').offset().top;
	var designPosition = $('#wild-design').offset().top;
	var image3Position = $('#wild-design-content-5').offset().top;
	


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


