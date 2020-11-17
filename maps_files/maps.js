
function initMap() {

    const uluru = { lat: 13.4833, lng: -88.18333 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: uluru,
    });
    
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

