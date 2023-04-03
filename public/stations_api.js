export function fetchNearStations() {
  return axios.get('/api/stations/all').then((res) => res.data)
}
