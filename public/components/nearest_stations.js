const nearStationList = document.querySelector('#nearest-placeholder')
import { fetchNearStations } from '../stations_api.js'

export function renderEachStation(stations) {
  const stationsNear = stations.slice(0, 10)
  nearStationList.innerHTML = stationsNear
    .map((station) => renderListStations(station))
    .join('')
}

function renderListStations(station) {
  let [currentLat, currentLong] = String(map.getCenter())
    .slice(1, -1)
    .split(', ')

  const R = 6371e3 // metres
  const φ1 = (currentLat * Math.PI) / 180 // φ, λ in radians
  const φ2 = (station.latitude * Math.PI) / 180
  const Δφ = ((station.latitude - currentLat) * Math.PI) / 180
  const Δλ = ((station.longitude - currentLong) * Math.PI) / 180

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  const distance = R * c // in metres

  const roundedDist = String(distance).split('.')[0]

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
        <p>${station.name} <b>${roundedDist}m</b></p>
        <p>${station.address}</p>
        <p>${station.owner}</p>
      </div>
    </div>
  </article>
  `
}

export function loadNearStations() {
  fetchNearStations().then(renderEachStation)
}
