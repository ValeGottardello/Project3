const time = document.getElementById('time')
const timeDisplay = time.querySelector('h2')

export function refreshTime() {
  timeDisplay.innerText = new Date().toLocaleString('en-AU', {
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
}

setInterval(refreshTime, 1000)
