async function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -37.840935, lng: 144.946457 },
    zoom: 13,
    minZoom: 10,
    mylocationEnabled: true,
  })
  const geocoder = new google.maps.Geocoder()

  window.map = map
  window.markers = []
  window.geocoder = geocoder

  infoWindow = new google.maps.InfoWindow()

  const currentLocation = document.getElementById('current-location')

  function removeMarkers() {
    markers.forEach((marker) => marker.setMap(null))
    markers = []
  }

  function renderMarkers() {
    const bounds = map.getBounds()
    const ne = bounds.getNorthEast()
    const sw = bounds.getSouthWest()

    fetch(
      `/api/stations/bounds?lat1=${sw.lat()}&lat2=${ne.lat()}&long1=${sw.lng()}&long2=${ne.lng()}`,
    )
      .then((response) => response.json())
      .then((data) =>
        data.forEach((station) => {
          const marker = new google.maps.Marker({
            position: new google.maps.LatLng(
              Number(station.latitude),
              Number(station.longitude),
            ),
            map,
            title: station.name,
            id: station.id,
            icon: {
              url: [
                'Caltex',
                'BP',
                'Shell',
                '7-Eleven Pty Ltd',
                'United',
              ].includes(station.owner)
                ? `/icons/${station.owner}.png`
                : '/icons/Default.png',
              scaledSize: {
                height: 32,
                width: 32,
              },
            },
          })

          markers.push(marker)

          marker.addListener(marker, 'mouseover', (event) => {
            marker.setLabel(event.title)
          })

          const popupContent = `<h3>${station.name}</h3>
              <p>${station.address}</p>`
          const infowindow = new google.maps.InfoWindow({
            content: popupContent,
          })

          marker['infowindow'] = infowindow

          marker.addListener('click', () => {
            infowindow.open({
              anchor: marker,
              map,
            })
          })
        }),
      )
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords
      map.setCenter(new google.maps.LatLng(latitude, longitude))
    })
  }

  function debounce(func, timeout = 1000) {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, timeout)
    }
  }

  const processChange = debounce(() => {
    removeMarkers()
    const center = map.getCenter()
    geocoder
      .geocode({
        location: {
          lat: center.lat(),
          lng: center.lng(),
        },
      })
      .then(
        (res) =>
          (currentLocation.textContent = res.results[0].formatted_address),
      )
    renderMarkers()
    loadNearStations()
  })

  map.addListener('idle', processChange)
}

function linkClick(markerId) {
  fetch(`/api/stations/${markerId}`)
    .then((response) => response.json())
    .then((data) => {
      const stationLat = parseFloat(data.latitude)
      const stationLng = parseFloat(data.longitude)
      map.setCenter(new google.maps.LatLng(stationLat, stationLng))
      map.setZoom(15)
      setTimeout(() => {
        const spotlightMarker = markers.filter(
          (marker) => marker.title === data.name,
        )[0]
        console.log(spotlightMarker.infowindow)
        spotlightMarker.infowindow.open({
          anchor: spotlightMarker,
          map,
        })
      }, 2000)
    })
}
