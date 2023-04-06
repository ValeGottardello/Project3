export function fetchCommodities() {
  return fetch('/api/commodities').then((res) => res.json())
}
