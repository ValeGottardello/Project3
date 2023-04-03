const time = document.getElementById('time')
const timeDisplay = time.querySelector('h2')

export function refreshTime() {
  const dateString = new Date().toLocaleString('en-AU', {
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
  timeDisplay.innerText = dateString
}

setInterval(refreshTime, 1000)
