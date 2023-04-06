export function fetchStats() {
  return fetch('/api/stats').then((res) => res.json())
}
