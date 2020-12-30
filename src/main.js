const update = document.querySelector('#update')
const date = new Date()
const dateUpdate = document.createTextNode(date.toLocaleString())

update.appendChild(dateUpdate)

