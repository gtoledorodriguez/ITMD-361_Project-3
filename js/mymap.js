var map;
var myLocation = {lat: 41.7906, lng: 87.5831};
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLocation,
    zoom: 18
  });
}

var marker = new google.maps.Marker({
  position: myLocation,
  map: myMap,
  animation: google.maps.Animation.BOUNCE,
  icon: 'images/msi.jpg'
});
