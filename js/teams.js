const searchBox = document.querySelector('input[name="search"]')
const teams = document.querySelectorAll('.team')
searchBox.addEventListener('input', (e) => {
  const searchQuery = e.target.value.toLowerCase().trim()
  teams.forEach((team) => {
    const inner = team.innerText.toLowerCase().trim()
    const isVisible = inner.includes(searchQuery)
    team.classList.toggle('hidden', !isVisible)
  })
})
