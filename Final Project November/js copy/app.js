$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		var width = $(window).width()

		if (width>='880px'){
			$('#small-nav').hide()
		}
		
	})
$(window).scroll(function(){

	var offset = $(window).scrollTop();
})

$('#burger').click(function(){
	$('#small-nav').slideToggle();

})



})


