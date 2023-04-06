let randomStation = document.querySelector('#spotlight-placeholder')
let randomStationImg = document.querySelector('.spotlight-image')
const refreshButton = document.querySelector('button')
import { fetchRandomStation } from '../stations_api.js'

function renderStation() {
  fetchRandomStation().then((res) => {
    let stationElement = `<article data-id="${res.id}" class="station">
        <p><a href="javascript:linkClick(${res.id});">${res.name}</a></p>
        <p>${res.address}</p>
    </article>`

    randomStation.innerHTML = stationElement
    randomStationImg.innerHTML = `
    <img src="/icons/${
      ['Caltex', 'BP', 'Shell', '7-Eleven Pty Ltd', 'United'].includes(
        res.owner,
      )
        ? res.owner
        : 'Default'
    }.png" width="32" height="32">
    `
  })
}

renderStation()
refreshButton.addEventListener('click', renderStation)
