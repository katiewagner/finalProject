$(document).ready(function(){
/*
var pageId = Idname;
$('Idname').click(function () {
	varIdname
})
*/
$('#venues').click(function(event) {
	window.location.href="menu.html";
});
$('#hours').click(function(event){
	window.location.href="hours.html";
});
$('#events').click(function(event){
	window.location.href="locations.html"
});
/*
$('.showMinNav').click(function(event){
	$('.nav2').toggle(600);
	if ($('.nav2').is(':hidden') ) {
		$('.nav2').show();
	} else {
		$('.nav2').hide();
	}
});
*/
$('.drinks').click(function(event){
	$('.drinksList').toggle();
});
$('.northMenu').click(function(event){
	$('#showMenuNorth').toggle();
});
$('.westMenu').click(function(event){
	$('#showMenuWest').toggle();
});
$('#North').click(function(event){
	if ($('#West').is(':hidden') ) {
		$('#West').show();
	} else {
		$('#West').hide();
	}
	$('#Hours').slideToggle(600);
	//$('#West').css('display', 'none');
});
$('#West').click(function(event){
	$('#Hours2').slideToggle(600);
	if ($('#North').is(':hidden') ) {
		$('#North').show();
	} else {
		$('#North').hide();
	}
	//$('#North').css('display', 'none');
});

/* Google Maps */
var map = new google.maps.Map(document.getElementById('westMap'), {
	center: {last: 42.282077, lng: -83.7881426},
	zoom: 17
	});
function initMap() {
	var myLatLng = {lat:  42.2820776, lng: -83.7881426};

	var map = new google.maps.Map(document.getElementById('maps'), {
		center: myLatLng,
		zoom: 17,
		
	});
/*
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: 'SongBird Cafe'
	});*/
}
var map = new google.maps.Map(document.getElementById('maps'), {
          center: {lat: 42.3037994, lng: -83.7073546},
          zoom: 17
        });
//var map2 = new google.maps.Map(document.getElementById('westMap'), {
//		center: {lat:  42.2820776, lng: -83.7881426};
//		zoom: 17
//		});
});



/*
var map = new google.maps.Map(document.getElementById("maps"),{
          center: {lat:  42.3037994, lng: -83.7073546},
          zoom: 17
        });

42.3036011,-83.7089747
42.2820776,-83.7881426*/
