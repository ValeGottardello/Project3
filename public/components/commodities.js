import { fetchCommodities } from '../apis/commodities_api.js'

const commoditiesInfo = document.getElementById('latest')

function search() {
  fetchCommodities().then((res) => {
    const priceData = res.data

    commoditiesInfo.innerHTML = `
      <p>${priceData.date} </p>
      <p>Brent oil ${Number(1 / priceData.rates.BRENTOIL).toFixed(
        2,
      )} USD per barrel</p>
      <p>Natural gas ${Number(1 / priceData.rates.NG).toFixed(
        2,
      )} USD per MMBtu</p>
      <p>WTI oil ${Number(1 / priceData.rates.WTIOIL).toFixed(
        2,
      )} USD per barrel</p>
    `
  })
}

search()
