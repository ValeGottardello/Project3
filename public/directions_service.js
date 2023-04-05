const directionsService = new google.maps.DirectionsService()
const directionsRenderer = new google.maps.DirectionsRenderer()
directionsRenderer.setMap(map)

let directionsRequest = {
  origin: LatLng | String | google.maps.Place,
  destination: LatLng | String | google.maps.Place,
  waypoints: [
    { location: 'Melbourne, Victoria' },
    { location: 'Sydney, New South Wales' },
  ],
  travelMode: 'DRIVING',
  language: 'en',
}

// let directionRequest = {
//     origin: LatLng | String | google.maps.Place,
//     destination: LatLng | String | google.maps.Place,
//     travelMode: TravelMode,
//     transitOptions: TransitOptions,
//     drivingOptions: DrivingOptions,
//     unitSystem: UnitSystem,
//     waypoints[]: DirectionsWaypoint,
//     optimizeWaypoints: Boolean,
//     provideRouteAlternatives: Boolean,
//     avoidFerries: Boolean,
//     avoidHighways: Boolean,
//     avoidTolls: Boolean,
//     region: String
//   }
directionsService.route(directionsRequest, function (response, status) {
  if (status == 'OK') {
    directionsRenderer.setDirections(response)
  }
})
