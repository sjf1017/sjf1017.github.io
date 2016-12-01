var myMap;
  function initMap() {

//	google.maps.Map(element,options)

        myMap = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.730610, lng: -73.935242},
        zoom: 12
     });

    var marker = new google.maps.Marker({
	  position: {lat:40.730610, lng: -73.935242},
	  map: myMap,
	  title: 'New York, NY'
	});
	var theMet = new google.maps.Marker({
		map:myMap,
		position:{
			lat:40.779416,
			lng:-73.963201

		},
		title:'the Met'
	})

	marker.addListener('click',function(){
		$('#map')
		.css('height','50%')
		.css('width','50%')
		
		myMap.setZoom(8);
		myMap.setCenter(marker.getPosition());

	});
   }

initMap();

