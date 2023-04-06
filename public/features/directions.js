const directionsService = new google.maps.DirectionsService()
const directionsRenderer = new google.maps.DirectionsRenderer()
const nearestTable = document.getElementById('nearest-placeholder')
directionsRenderer.setMap(map)
const refreshDirect = document.querySelector('.reset')

function calcRoute(address) {
  const request = {
    origin: map.getCenter(),
    destination: address,
    travelMode: 'DRIVING',
  }
  directionsService.route(request, (result, status) => {
    if (status == 'OK') {
      directionsRenderer.setDirections(result)
    } else if (status == 'NOT_FOUND' || status == 'ZERO_RESULTS') {
      directionsRenderer.setDirections(null)
      let message = document.createElement('p')
      message.textContent = 'Place not found, try it again'
      message.appendChild(address)
    }
  })
}

nearestTable.addEventListener('click', (evt) => {
  evt.preventDefault()
  const directionSelector = evt.target.closest('.nearby-main')
  if (!directionSelector) return
  const address = directionSelector.querySelector('.address').textContent
  directionsRenderer.setMap(map)
  calcRoute(address)
})

refreshDirect.addEventListener('click', () => {
  directionsRenderer.setMap(null)
  // map.setCenter(map.getCenter())
  // map.setZoom(13)
})
