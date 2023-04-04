const nearStationList = document.querySelector('#nearest-placeholder')
import { fetchNearStations } from '../stations_api.js'

export function renderEachStation(stations) {
  const stationsNear = stations.slice(0, 10)
  nearStationList.innerHTML = stationsNear
    .map((station) => renderListStations(station))
    .join('')
}

function renderListStations(station) {
  return `
    <article data-id="${station.id}" class="station">
        <p>${station.name}</p>
        <p>${station.address}</p>
        <p>${station.owner}</p>
    </article>
    `
}

fetchNearStations().then(renderEachStation)
