$(document).ready(function () {

	$('#myForm').submit(function(event){
		event.preventDefault();

		console.log(event);

		var name = $('#name-input').val();

		$('#target').text(name);


	})

	$('#name-input').keydown(function(event){
		console.log(event);
		event.preventDefault;
	})

	$('#social a').click(function(event){
		console.log(event)
		event.preventDefault();

	})

})
