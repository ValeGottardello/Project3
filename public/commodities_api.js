export function fetchCommodities() {
  return axios.get('/api/commodities').then((res) => res.data)
}
