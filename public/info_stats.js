export function fetchStatsInfo() {
  return fetch('/api/stats').then((res) => res.json())
}
