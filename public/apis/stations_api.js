export function fetchNearStations() {
  const currentLocation = map.getCenter()
  const [lat, lng] = String(currentLocation).slice(1, -1).split(', ')
  const bounds = map.getBounds()
  const radius =
    google.maps.geometry.spherical.computeDistanceBetween(
      currentLocation,
      bounds.getNorthEast(),
    ) / 1000

  return fetch(
    `/api/stations/nearest?lat=${lat}&lng=${lng}&radius=${radius}`,
  ).then((res) => res.json())
}

export function fetchRandomStation() {
  return fetch('/api/stations/random').then((res) => res.json())
}
