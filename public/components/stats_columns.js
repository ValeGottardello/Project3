import { fetchStats } from '../apis/stats_api.js'

const ownersTable = document.querySelector('#stats-table')
const totals = document.querySelector('#total-info')

function renderStats(data) {
  ownersTable.innerHTML = data.owners
    .slice(0, 7)
    .map((owner) => {
      return renderOwnerEntry(owner)
    })
    .join('')

  totals.innerHTML = renderTotals(data)
}

function renderOwnerEntry(owner) {
  return `
      <tr>
          <th class="owner">${owner.owner}</th>
          <th class="total">${owner.count}</th>
      </tr>
      `
}

function renderTotals(data) {
  return `
      <h2>Stats</h2>
      <h3>Total Stations: ${data.total_stations}</h3>
      <h3>Total owner: ${data.owners.length}</h3>
      `
}

fetchStats().then(renderStats)
