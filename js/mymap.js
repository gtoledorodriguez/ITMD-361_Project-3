var map;
function initMap() {
  var myLocation = { lat: 41.7906, lng: 87.5831 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLocation
  });

  var marker = new google.maps.Marker({
    position: myLocation,
    map: map,
    title: "Museum of Science and Industry"
  });

  var image = "../images/msi.jpeg";
  var msiMarker = new google.maps.Marker({
    position: { lat: 41.8615, lng: -87.6136 },
    map: map,
    icon: image
  });

  var info = "The Museum of Science and Industry was originally constructed for the 1893 World's Columbian Exposition's 'White City', originally known as the  Palace of Fine Arts. The museum is the only building still standing from what once was the 'White City'. It was bought and opened by Julius Rosenwald, chairman of Sears, in 1933. He was inspired by a musuem he had saw in Europe and decided to create his own interactive museum. At the time of its opening, it only had one exhibit, the Coal Mine Exhibit which still exists today. Rosenwald had actual coal miner come in and be the tour guides for the exhibit. Now the museum has over 2,000 different exhibits!"

}
