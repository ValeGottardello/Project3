export function fetchNearStations() {
  const currentLocation = String(map.getCenter())
  const [lat, lng] = currentLocation.slice(1, -1).split(', ')
  const radius = 10

  return fetch(
    `/api/stations/nearest?lat=${lat}&lng=${lng}&radius=${radius}`,
  ).then((res) => res.json())
}

export function fetchRandomStation() {
  return fetch('/api/stations/random').then((res) => res.json())
}
