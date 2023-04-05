let randomStation = document.querySelector('#spotlight-placeholder')
const refreshButton = document.querySelector('button')
import { fetchRandomStation } from '../stations_api.js'

function renderStation() {
  fetchRandomStation().then((res) => {
    let stationElement = `<article data-id="${res.id}" class="station">
        <p><a href="javascript:linkClick(${res.id});">${res.name}</a></p>
        <p>${res.address}</p>
    </article>`

    randomStation.innerHTML = stationElement
  })
}

renderStation()
refreshButton.addEventListener('click', renderStation)
