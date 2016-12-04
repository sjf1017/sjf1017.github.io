$(document).ready(function () {
	// console.logs the window.width
	
	$('.getbio').click(function(){
		$('.bio').slideToggle();
		
	})
	$('.gettest').click(function(){
		$('.testemonials').slideToggle();
		
	})

	$('.getmenus').click(function(){
		$('.menus').slideToggle();
		
	})

	var carouselContainer = $('.carousel');
	var slideInterval = 3000;

	function toggleCaption() {
  	 $('.carousel-caption').hide();
  	 var caption = carouselContainer.find('.active').find('.carousel-caption');
   	 caption.delay(500).toggle("slide", {direction:'right'});
	}


	carouselContainer.carousel({
  	 interval: slideInterval, 
  	  cycle: true,
  	 //Pauses the carousel from going through the next slide when the mouse pointer enters the carousel
  	 pause: "hover"
	})
	//occurs when carousel is going to slide from one item to another
	.on('slid.bs.carousel', function() {
     toggleCaption();

	});


	
	
	



});


















