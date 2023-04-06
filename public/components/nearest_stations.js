import { fetchNearStations } from '../stations_api.js'

const nearStationsList = document.querySelector('#nearest-placeholder')

function renderStationList(stations) {
  const nearestStations = stations.slice(0, 10)
  nearStationsList.innerHTML = nearestStations
    .map((station) => renderStationInfo(station))
    .join('')
}

function renderStationInfo(station) {
  return `
  <article data-id="${station.id}" class="station">
    <div class="nearby-main">
      <div class="nearby-left">
          <img src="/icons/${
            ['Caltex', 'BP', 'Shell', '7-Eleven Pty Ltd', 'United'].includes(
              station.owner,
            )
              ? station.owner
              : 'Default'
          }.png" width="32" height="32">
      </div>
      <div clas="nearby-right">
        <p>${station.name} <b>${Math.floor(station.distance * 1000)}m</b></p>
        <p class="address">${station.address} ${station.suburb}, ${
    station.state
  }</p>
        <p>${station.owner}</p>
      </div>
    </div>
  </article>
  `
}

export function loadNearStations() {
  fetchNearStations().then(renderStationList)
}
