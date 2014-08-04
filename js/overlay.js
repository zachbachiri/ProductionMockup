$(document).ready(function(){


	$("#slideshow-overlay1").hide(0);
	$("#slideshow-overlay2").hide(0);
	$("#slideshow-overlay3").hide(0);
			

		$('#show-hide1').click(function(){
			event.preventDefault();
			if ($(window).width() < 768){
				$('#slideshow-overlay1').insertAfter('#arrow1');
				$('#slideshow-link1').toggleClass("active");
				$('#slideshow-link2').removeClass("active");
				$('#slideshow-link3').removeClass("active");
			} else {
				$('#slideshow-overlay1').insertAfter('#final-link-wrap');
				$('.slideshow-link').removeClass('active');
			}
			$("#slideshow-overlay1").slideToggle(0);
			$("#slideshow-overlay2").hide(0);
			$("#slideshow-overlay3").hide(0);

			$(this).toggleClass('clicked');
			$('#show-hide2').removeClass('clicked');
			$('#show-hide3').removeClass('clicked');

			$('#arrow1').toggleClass('uparrow');
			$('#arrow2').removeClass('uparrow');
			$('#arrow3').removeClass('uparrow');
		});
		
				
		$('#show-hide2').click(function(){
			event.preventDefault();
			if ($(window).width() < 768){
				$('#slideshow-overlay2').insertAfter('#arrow2');
				$('#slideshow-link2').toggleClass("active");
				$('#slideshow-link1').removeClass("active");
				$('#slideshow-link3').removeClass("active");
			} else {
				$('#slideshow-overlay2').insertAfter('#final-link-wrap');
				$('.slideshow-link').removeClass('active');
			}
				$("#slideshow-overlay2").slideToggle(0);
				$("#slideshow-overlay1").hide(0); 
				$("#slideshow-overlay3").hide(0);

				$(this).toggleClass('clicked');
			    $('#show-hide1').removeClass('clicked');
			    $('#show-hide3').removeClass('clicked');

			    $('#arrow2').toggleClass('uparrow');
			    $('#arrow1').removeClass('uparrow');
			    $('#arrow3').removeClass('uparrow');
		});

				

				
		$('#show-hide3').click(function(){
			event.preventDefault();
			if ($(window).width() < 768){
				$('#slideshow-overlay3').insertAfter('#arrow3');
				$('#slideshow-link3').toggleClass("active");
				$('#slideshow-link2').removeClass("active");
				$('#slideshow-link1').removeClass("active");
			} else {
				$('#slideshow-overlay3').insertAfter('#final-link-wrap');
				$('.slideshow-link').removeClass('active');
			}
				$("#slideshow-overlay3").slideToggle(0);
				$("#slideshow-overlay2").hide(0);
				$("#slideshow-overlay1").hide(0);

				$(this).toggleClass('clicked');
			    $('#show-hide2').removeClass('clicked');
			    $('#show-hide1').removeClass('clicked');

			    $('#arrow3').toggleClass('uparrow');
			    $('#arrow2').removeClass('uparrow');
			    $('#arrow1').removeClass('uparrow');
		});
		


	

});