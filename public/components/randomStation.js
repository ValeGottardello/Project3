const randomStation = document.querySelector('#spotlight')
import { fetchRandomStation } from '../stations_api.js'

export function renderStation(station) {
  let stationElement = `<article data-id="${station.id}" class="station">
      <p>${station.name}</p>
      <p>${station.address}</p>
  </article>`

  randomStation.innerHTML += stationElement
}

fetchRandomStation().then(renderStation)
