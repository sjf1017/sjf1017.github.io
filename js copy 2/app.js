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


document.getElementById('Quote').onclick = getQuote;
//or document.queryslector('#clickme').onclick=getQuote;

var Quote = 0;
function getQuote () {
	var numGuests = parseInt(document.getElementById('guestcount').value);
	var partyType = document.getElementById ('type').value;

	//console.log (numGuests, partyType);
	If partyType = "Cocktail"{
		var Quote = numGuests * 60;
	}
	else if partyType = "Sit Down Dinner"{
			var Quote = numGuests *120;
	}
	else if partyType = "Buffet Dinner"{
			var Quote = numGuests * 100;
	}
	else if partyType = "Luncheon"{
			var Quote = numGuests *90;
	}

	document.getElementById('Quote').innerHTML = Quote;
	


}
