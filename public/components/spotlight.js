import { fetchRandomStation } from '../stations_api.js'

const randomStationInfo = document.querySelector('#spotlight-placeholder')
const randomStationImg = document.querySelector('.spotlight-image')
const refreshButton = document.querySelector('#spotlight button')

function renderRandomStation() {
  fetchRandomStation().then((res) => {
    randomStationInfo.innerHTML = `
      <article data-id="${res.id}" class="station">
          <p><a href="javascript:linkClick(${res.id});">${res.name}</a></p>
          <p>${res.address}</p>
      </article>
    `
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

renderRandomStation()
refreshButton.addEventListener('click', renderRandomStation)
