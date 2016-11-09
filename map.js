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
        var lotEE1 = {lat:33.800034,lng:  -79.012431};
        var lotEE2 = {lat: 33.797983,lng:  -79.010578};
        var lotAA1 = {lat: 33.798344,lng:  -79.016367};
        var lotAA2 = {lat: 33.799501,lng:  -79.016179};
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
        //
        //Set scrolling bounds for viewing on the map
        //
        // var strictBounds = new google.maps.LatLngBounds(
        //   new google.maps.LatLng(33.781755, -79.026981),
        //   new google.maps.LatLng(33.801691, -78.988061)
        //   );
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 33.7950, lng: -79.0117},
          // //prevents zooming with +/- buttons
          // zoomControl: false,
          // //prevents zooming by double-left-clicking
          // disableDoubleClickZoom: true,
          // //prevents scrolling with mouse
          // scrollwheel: false,
          // //disable street view 
          streetViewControl: false,
          minZoom:16,
          maxZoom:18,

          center: {lat: -34.397, lng: 150.644},
          mapTypeControl: true,
          mapTypeConrolOptions:{
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
          mapTypeIds: ['map','satellite']
          },

          //zoom with best view of campus parkinglots
          zoom: 16
        });
        var markerGG1 = new google.maps.Marker({
          position: lotGG1,
          map: map,
          title: 'Lot GG'
        });
        var markerGG2 = new google.maps.Marker({
          position: lotGG2,
          map: map,
          title: 'Lot GG'
        });
        var markerGG3 = new google.maps.Marker({
          position: lotGG3,
          map: map,
          title: 'Lot GG'
        });
        var markerKK1 = new google.maps.Marker({
          position: lotKK1,
          map: map,
          title: 'Lot KK'
        });
        var markerKK2 = new google.maps.Marker({
          position: lotKK2,
          map: map,
          title: 'Lot KK'
        });
        var markerG = new google.maps.Marker({
          position: lotG,
          map: map,
          title: 'Lot G'
        });
        var markerQQ1 = new google.maps.Marker({
          position: lotQQ1,
          map: map,
          title: 'Lot QQ'
        });
        var markerQQ2 = new google.maps.Marker({
          position: lotQQ2,
          map: map,
          title: 'Lot QQ'
        });
        var markerDD = new google.maps.Marker({
          position: lotDD,
          map: map,
          title: 'Lot DD'
        });
        var markerBB = new google.maps.Marker({
          position: lotBB,
          map: map,
          title: 'Lot BB'
        });
        var markerHH1 = new google.maps.Marker({
          position: lotHH1,
          map: map,
          title: 'Lot HH'
        });
        var markerHH2 = new google.maps.Marker({
          position: lotHH2,
          map: map,
          title: 'Lot HH'
        });
        var markerAA1 = new google.maps.Marker({
          position: lotAA1,
          map: map,
          title: 'Lot AA'
        });
        var markerAA2 = new google.maps.Marker({
          position: lotAA2,
          map: map,
          title: 'Lot AA'
        });
        var markerEE1 = new google.maps.Marker({
          position: lotEE1,
          map: map,
          title: 'Lot EE'
        });
        var markerEE2 = new google.maps.Marker({
          position: lotEE2,
          map: map,
          title: 'Lot EE'
        });
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