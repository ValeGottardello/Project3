import { fetchCommodities } from '../commodities_api.js'

function search() {
  fetchCommodities().then((res) => {
    let container = document.getElementById('latest')
    console.log(res.data)
    //res.data.data((priceData) => {
    let priceData = res.data
    let date = `<p>${priceData.date} </p>`
    let brentOil = `<p>Brent oil ${Number(1 / priceData.rates.BRENTOIL).toFixed(
      2,
    )} USD per barrel</p>`

    let ng = `<p>Natural gas ${Number(1 / priceData.rates.NG).toFixed(
      2,
    )} USD per MMBtu</p>`

    let wtiOil = `<p>WTI oil ${Number(1 / priceData.rates.WTIOIL).toFixed(
      2,
    )} USD per barrel</p>`

    container.innerHTML += date
    container.innerHTML += wtiOil
    container.innerHTML += brentOil
    container.innerHTML += ng
  })
}

search()

// const time = document.getElementById('time')
// const timeDisplay = time.querySelector('h2')

// export function refreshTime() {
//   const dateString = new Date().toLocaleString('en-AU', {
//     weekday: 'short',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric',
//   })
//   timeDisplay.innerText = dateString
// }

// setInterval(refreshTime, 1000)
