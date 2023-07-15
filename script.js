const dropdownButton = document.getElementById('dropdown-button')
const dropdownList = document.getElementById('dropdown-list')
const bodyEl = document.querySelector('body')
// Function to handle dropdown visibility
function toggleDropdown(evt) {
  evt.stopPropagation()
  dropdownList.classList.toggle('display-block')
  positionDropdown()
}

// Function to reposition dropdown on scroll
function positionDropdown() {
  const dropdownHeight = dropdownList.clientHeight
  const windowHeight = window.innerHeight
  const dropdownTop = dropdownButton.getBoundingClientRect().top

  if (windowHeight - dropdownTop < dropdownHeight) {
    dropdownList.style.bottom = '100%'
    dropdownList.style.top = 'auto'
  } else {
    dropdownList.style.bottom = 'auto'
    dropdownList.style.top = '100%'
  }
}

function setDropdownValue(evt) {
  dropdownList.classList.toggle('display-block')
  dropdownButton.innerText = evt.target.innerText
}

function handleOutsideClick(evt) {
  if (
    !dropdownList.contains(evt.target) &&
    dropdownList.classList.contains('display-block')
  ) {
    dropdownList.classList.remove('display-block')
  }
}

// Attach event listeners
dropdownButton.addEventListener('click', toggleDropdown)
window.addEventListener('scroll', positionDropdown)
dropdownList.addEventListener('click', setDropdownValue)
dropdownList.addEventListener('click', setDropdownValue)
bodyEl.addEventListener('click', handleOutsideClick)
