const columnRight = document.getElementById('right')
const columnLeft = document.getElementById('left')
const map = document.getElementById('map')

function handleShortCut(evt) {
  if (evt.ctrlKey && evt.key === 'b') {
    evt.preventDefault()

    if (
      columnRight.style.display === 'none' &&
      columnLeft.style.display === 'none' &&
      map.style.position !== 'relative'
    ) {
      columnRight.style.display = 'block'
      columnLeft.style.display = 'block'
      map.style.position = 'relative'
    } else {
      columnRight.style.display = 'none'
      columnLeft.style.display = 'none'
      map.style.position = 'absolute'
    }
  }
}

document.addEventListener('keydown', handleShortCut)
