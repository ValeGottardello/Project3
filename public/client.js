let map = { lat: -33.8712, long: 151.2046 }

async function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  })
}

window.initMap = initMap
