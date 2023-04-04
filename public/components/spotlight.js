import { fetchRandomStation } from '../random_station_api.js'

const refreshButton = document.querySelector('button')
const spotlightTitle = document.getElementById('spotlight-title')
const spotlightAddress = document.getElementById('spotlight-address')

function handleRefresh() {
  fetchRandomStation().then((res) => {
    console.log(res)
    spotlightTitle.textContent = res.name
    spotlightAddress.textContent = res.address
  })
}

handleRefresh()

refreshButton.addEventListener('click', handleRefresh)
