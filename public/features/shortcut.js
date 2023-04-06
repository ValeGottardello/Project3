const right = document.getElementById('right')
const left = document.getElementById('left')
const wrapper = document.getElementById('main-wrapper')

function handleShortCut(evt) {
  if (evt.ctrlKey && evt.key === 'b') {
    evt.preventDefault()
    right.classList.toggle('hidden')
    left.classList.toggle('hidden')
    wrapper.classList.toggle('expanded')
  }
}

document.addEventListener('keydown', handleShortCut)
