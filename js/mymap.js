var map;
function initMap() {
  var myLatLng = { lat: 41.8615, lng: -87.6136 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLng,
    styles: mapstyle
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "The Balbo Monument"
  });

  var image = "images/msi.jpg";
  var beachMarker = new google.maps.Marker({
    position: { lat: 41.8615, lng: -87.6136 },
    map: map,
    icon: image
  });
}
