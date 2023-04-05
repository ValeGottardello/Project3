const directionsService = new google.maps.DirectionsService()
const directionsRenderer = new google.maps.DirectionsRenderer()
const nearestTable = document.getElementById('nearest-placeholder')
directionsRenderer.setMap(map)

function calcRoute(address) {
  const request = {
    origin: map.getCenter(),
    destination: address,
    travelMode: 'DRIVING',
  }
  directionsService.route(request, (result) => {
    directionsRenderer.setDirections(result)
  })
}

nearestTable.addEventListener('click', (evt) => {
  evt.preventDefault()
  const directionSelector = evt.target.closest('.nearby-main')
  if (!directionSelector) return
  const address = directionSelector.querySelector('.address').textContent
  calcRoute(address)
})
