import { fetchStatsInfo } from '../info_stats.js'
const table = document.querySelector('#stats-table')

export function renderInfoStats(data) {
  data = data.owners
  table.innerHTML = data.map((owner) => renderlistOwners(owner)).join('')
}

function renderlistOwners(owner) {
  return `
      <tr>
          <th class="owner">${owner.owner}</th>
          <th class="total">${owner.count}</th>
      </tr>
      `
}

fetchStatsInfo().then(renderInfoStats)
