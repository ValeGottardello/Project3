const directionsService = new google.maps.DirectionsService()
const directionsRenderer = new google.maps.DirectionsRenderer()
const nearestTable = document.getElementById('nearest-placeholder')
directionsRenderer.setMap(map)

function calcRoute(address) {
  var request = {
    origin: map.getCenter(),
    destination: address,
    travelMode: 'DRIVING',
  }
  directionsService.route(request, function (result, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(result)
    }
  })
}

nearestTable.addEventListener('click', (evt) => {
  evt.preventDefault()
  const address = evt.target.closest('.address').textContent
  calcRoute(address)
})
