let map = { lat: -33.8712, long: 151.2046 }

async function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -33.87995, lng: 151.200886 },
    zoom: 13,
    minZoom: 10,
  })

  infoWindow = new google.maps.InfoWindow()

  const currentLocation = document.getElementById('current-location')

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      currentLocation.innerHTML = `${position.coords.latitude},  ${position.coords.longitude}`
    })
  }

}
