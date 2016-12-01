//jqery call to use ajax
//javascript powers ajax - send message to make network request
//response to request
var map;
      function initMap() {
//		map = new google.maps.Map(DOM-element,options)

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7128, lng: -74.0059},
          zoom: 12
  });
  }
  initMap()
 // renderMarkers()

  function renderMarkers(lat,lng){
  		var marker = new google.maps.Marker({

// 			position:{lat: 40.7128, lng: -74.0059},

  			map:map
  		});
  	}
  initMap()
//  renderMarkers()

// var emptyImage:
// var fullImage:

$.ajax({
	type:'GET',
//get - read data from server, post - create record on database
//put - edit and post, delete - delete a post
	url:'http://api.citybik.es/citi-bike-nyc.json',
	dataType: 'jsonp',
	success: function (response) {
		response.forEach(function (station){
			console.log(station.name);
			
			// var name = station.name;
			// var free = station.free;
			// var bikes = station.bikes;
			var lat = station.lat/1000000;
			var lng = station.lng/1000000;
			var name = station.name;

			// If my station is empyt, render the empty fullImageotherwise if fullImageotherwise
			// remder full fullImage



			var marker = new google.maps.Marker({
				title:name,
				position:{lat: lat, lng:lng},
				map:map
			})
//			renderMarkers()




//drop data into the DOM

			// $('#container').append ('<p>' + name + '</p>')
			// $('#container').append ('<p> Spaces Free: ' + free + '</p>')
			// $('#container').append ('<p> Bikes Avail: '+ bikes + '</p>')
			// $('#container').append ('<hr>')

//or
//	$('container')
//		.append('<p>' + name + '</p>')
//		.append(<p> Spaces Free: ' + free + '</p>')
//		.append('<p> Bikes Avail: '+ bikes + '</p>')
//		.append('<hr>')
		






		
		})
	},
})
//AIzaSyBUiryT1I6cVd8KO1-_gYTRy76bV0WC-Wo

//content_copy

