box.addEventListener('dragstart', function (e) {
  e.target
})

target.addEventListener('dragover', function (e) {
  e.preventDefault()
})

target.addEventListener('drop', function (e) {
  e.preventDefault()
  target.appendChild(box)
})
