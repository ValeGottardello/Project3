import { fetchStatsInfo } from '../info_stats.js'
// import { fetchStatsInfo, fetchTotalStats } from '../info_stats.js'
const table = document.querySelector('#stats-table')
const titles = document.querySelector('#total-info')

export function renderInfoStats(data) {
  table.innerHTML = data.owners
    .slice(0, 7)
    .map((owner) => {
      return renderlistOwners(owner)
    })
    .join('')

  titles.innerHTML = renderTotOwn(data)
}

function renderlistOwners(owner) {
  return `
      <tr>
          <th class="owner">${owner.owner}</th>
          <th class="total">${owner.count}</th>
      </tr>
      `
}

function renderTotOwn(data) {
  return `
      <h2>Stats</h2>
      <h3>Total Stations: ${data.total_stations}</h3>
      <h3>Total owner: ${data.owners.length}</h3>
      `
}

function renderTotStat(total) {
  console.log(total)
  return `
      <h3>Total stats: ${total}</h3>
      `
}

fetchStatsInfo().then(renderInfoStats)
