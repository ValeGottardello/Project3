export function fetchNearStations() {
  const currentLocation = document.getElementById('current-location')
  const [lat, lng] = currentLocation.textContent.slice(1, -1).split(', ')
  const radius = 10

  return fetch(
    `/api/stations/nearest?lat=${lat}&lng=${lng}&radius=${radius}`,
  ).then((res) => res.json())
}

export function fetchRandomStation() {
  return fetch('/api/stations/random').then((res) => res.json())
}
