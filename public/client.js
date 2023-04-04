async function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -37.840935, lng: 144.946457 },
    zoom: 13,
    minZoom: 10,
    mylocationEnabled: true,
  })

  infoWindow = new google.maps.InfoWindow()

  const currentLocation = document.getElementById('current-location')

  currentLocation.textContent = map.getCenter()

  map.addListener('center_changed', () => {
    currentLocation.textContent = map.getCenter()
  })

<<<<<<< HEAD
  function renderMarkers() {
    fetch('/api/stations/all')
      .then((response) => response.json())
      .then((data) =>
        data.forEach((station) => {
          const marker = new google.maps.Marker({
            position: new google.maps.LatLng(
              Number(station.latitude),
              Number(station.longitude),
            ),
=======
  fetch('/api/stations/all')
    .then((response) => response.json())
    .then((data) =>
      data.forEach((station) => {
        const icon = new google.maps.Icon({
          url: `/icons/${station.owner}.png`,
          // scaledSize: {
          //   width: 16,
          //   height: 16,
          // },
        })

        const marker = new google.maps.Marker({
          position: new google.maps.LatLng(
            Number(station.latitude),
            Number(station.longitude),
          ),
          map,
          title: station.name,
          icon,
        })

        marker.addListener(marker, 'mouseover', (event) => {
          marker.setLabel(event.title)
        })

        const popupContent = `<h3>${station.name}</h3>
        <p>${station.address}</p>`
        const infowindow = new google.maps.InfoWindow({
          content: popupContent,
        })
        marker.addListener('click', () => {
          infowindow.open({
            anchor: marker,
>>>>>>> 967905c (rebase)
            map,
            title: station.name,
          })
          marker.addListener(marker, 'mouseover', (event) => {
            marker.setLabel(event.title)
          })

          const popupContent = `<h3>${station.name}</h3>
                <p>${station.address}</p>`
          const infowindow = new google.maps.InfoWindow({
            content: popupContent,
          })
          marker.addListener('click', () => {
            infowindow.open({
              anchor: marker,
              map,
            })
          })
        }),
      )
  }

  renderMarkers()

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords
      map.setCenter(new google.maps.LatLng(latitude, longitude))
    })
  }

  map.addListener('zoom_changed', () => {
    console.log('refresh')
    renderMarkers()
  })

  map.addListener('dragend', () => {
    console.log('refresh')
    renderMarkers()
  })
}

// PLEASE LEAVE THIS HERE FOR NOW I HAVE GONE INTO A RABBIT HOLE TO FIGURE HOW TO RENDER ONLY WHAT IS ON THE MAP. IT MAY BE USEFUL LATER.

// let request = {
//   location: pyrmont,
//   radius: '500',
//   type: ['restaurant']
// };

// service = new google.maps.places.PlacesService(map);
// service.nearbySearch(request, callback);
// }

// function callback(results, status) {
// if (status == google.maps.places.PlacesServiceStatus.OK) {
//   for (var i = 0; i < results.length; i++) {
//     createMarker(results[i]);
//   }
