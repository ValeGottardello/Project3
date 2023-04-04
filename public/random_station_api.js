export function fetchRandomStation() {
  return fetch('/api/stations/random').then((res) => res.json())
}
