$(document).ready(function () {
	// console.logs the window.width
	
	$('.getbio').click(function(){
		$('.bio').slidetoggle();
		
	})
	$('.gettest').click(function(){
		$('.testemonials').slidetoggle();
		
	})


	



// var quote = 0;

// $('#submit').click(function(e){
// 	e.preventDefault();

// 	var numGuests = parseFloat($('#guestcount').val());
// 	var partyType = $('#type').val();

// 	if (numGuests === 0){
// 		alert ('You must enter at least 1 Guest')
// 	}
// 	else if (partyType = "Cocktail"){
// 		var quote = numGuests * 60;
// 	}
// 	else if (partyType = "Dinner"){
// 			var quote = numGuests *120;
// 	}
// 	else if (partyType = "Buffet"){
// 			var quote = numGuests * 100;
// 	}
// 	else if (partyType = "Luncheon"){
// 			var quote = numGuests *90;
// 	}
// 	else if (partyType = ''){
// 		var quote = numGuests * 120;
// 	}
//  })
//  function reportQuote(quote){
//  	$('#quote').append("A partyType for" + "numGuests" + "will have an estimated cost of " + quote + "");

//  }
});



















//document.getElementById('Quote').onclick = getQuote;

//or document.queryslector('#clickme').onclick=getQuote;

//var Quote = 0;
//function getQuote () {
//	var numGuests = parseInt(document.getElementById('guestcount').value);
//	var partyType = document.getElementById ('type').value;

	//console.log (numGuests, partyType);
//		var Quote = numGuests * 60;
//	else if partyType = "Sit Down Dinner"{
//			var Quote = numGuests *120;
//	else if partyType = "Buffet Dinner"{
//			var Quote = numGuests * 100;
//	}
//	else if partyType = "Luncheon"{
//			var Quote = numGuests *90;
//	}
//
//	document.getElementById('Quote').innerHTML = Quote;
	
//}


