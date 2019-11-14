var map;
var myLocation = {lat: 41.7906, lng: 87.5831};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLocation,
    zoom: 15
  });
}
