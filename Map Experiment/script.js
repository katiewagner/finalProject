function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 44.540, lng: -78.546},
            zoom: 8
        });

async defer
src ="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"