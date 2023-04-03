let map = { lat: -33.8712, long: 151.2046 }

async function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -33.87995, lng: 151.200886 },
    zoom: 13,
    minZoom: 10,
  })

  infoWindow = new google.maps.InfoWindow()

  const currentLocation = document.getElementById('current-location')

  currentLocation.textContent = map.getCenter()

  map.addListener('center_changed', () => {
    currentLocation.textContent = map.getCenter()
  })
  //const response = await
  fetch('/api/stations/all')
    .then((response) => response.json())
    .then((data) =>
      data.forEach((station) => {
        console.log(station)
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(
            Number(station.latitude),
            Number(station.longitude),
          ),
          map,
          title: station.name,
        })
      }),
    )
}
