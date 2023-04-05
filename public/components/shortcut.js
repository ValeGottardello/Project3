const columnRight = document.getElementById('right')
const columnLeft = document.getElementById('left')
const wrapper = document.getElementById('main-wrapper')

function handleShortCut(evt) {
  if (evt.ctrlKey && evt.key === 'b') {
    evt.preventDefault()

    // if (
    //   columnRight.style.display === 'none' &&
    //   columnLeft.style.display === 'none' &&
    //   map.style.position !== 'relative'
    // ) {
    //   columnRight.style.display = 'block'
    //   columnLeft.style.display = 'block'
    //   map.style.position = 'relative'
    // } else {
    //   columnRight.style.display = 'none'
    //   columnLeft.style.display = 'none'
    //   map.style.position = 'absolute'
    // }

    columnRight.classList.toggle('hidden')
    columnLeft.classList.toggle('hidden')
    wrapper.classList.toggle('expanded')
  }
}

document.addEventListener('keydown', handleShortCut)
