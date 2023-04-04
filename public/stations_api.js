export function fetchNearStations() {
  return fetch('/api/stations/all').then((res) => res.json())
}

export function fetchRandomStation() {
  return fetch('/api/stations/random').then((res) => res.json())
}
