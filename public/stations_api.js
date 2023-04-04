export function fetchNearStations() {
  return fetch('/api/stations/all').then((res) => res.json())
}
