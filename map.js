 // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      function initMap() {
        var lotKK1 = {lat: 33.794404,lng: -79.007915};
        var lotKK2 = {lat: 33.791844,lng: -79.010199};
        var lotQQ1 = {lat: 33.792231,lng:  -79.015520};
        var lotQQ2 = {lat: 33.792237,lng: -79.016255};
        var lotG = {lat: 33.793686,lng:  -79.009909};
        var lotHH1 = {lat: 33.796874,lng:  -79.009464};
        var lotHH2 = {lat: 33.797620,lng:  -79.010206};
        // As we expand to more lots, more markers will open up
        var lotBB = {lat: 33.799678,lng:  -79.012966};
        var lotDD = {lat: 33.799320,lng:  -79.013819};
        // var lotEE1 = {lat: ,lng: };
        // var lotEE2 = {lat: ,lng: };
        // var lotAA1 = {lat: ,lng: };
        // var lotAA2 = {lat: ,lng: };
        // var lotA = {lat: ,lng: };
        // var lotA = {lat: ,lng: };
        // var lotA = {lat: ,lng: };
        // var lotA = {lat: ,lng: };
        // var lotA = {lat: ,lng: };
        // var lotA = {lat: ,lng: };
        // var lotA = {lat: ,lng: };
        // var lotA = {lat: ,lng: };
        // var lotA = {lat: ,lng: };
        // var lotA = {lat: ,lng: };
        // var lotA = {lat: ,lng: };
        // var lotA = {lat: ,lng: };
        var lotGG1 = {lat: 33.796556, lng: -79.006727};
        var lotGG2 = {lat: 33.796096, lng: -79.007530};
        var lotGG3 = {lat: 33.796808, lng: -79.008308};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 33.7950, lng: -79.0117},
          //prevents zooming with +/- buttons
          zoomControl: false,
          //prevents zooming by double-left-clicking
          disableDoubleClickZoom: true,
          //prevents scrolling with mouse
          scrollwheel: false,
          //disable street view 
          streetViewControl: false,

          center: {lat: -34.397, lng: 150.644},
          zoomControl: false,
          scrollwheel: false,
          mapTypeControl: true,
          mapTypeConrolOptions:{
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          mapTypeIds: ['map','satellite']
          },

          //zoom with best view of campus parkinglots
          zoom: 16
        })
        var marker = new google.maps.Marker({
          position: lotGG,
          map: map,
          title: 'Hello World!'
        })
        var infoWindow = new google.maps.InfoWindow({map: map});
        // Try HTML5 geolocation.
        // Geolocation is what finds your current location. Must be approved in browser.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }