const update = document.querySelectorAll('.update')
const date = new Date()
console.log(update)

update.forEach(up => {
    const dateUpdate = document.createTextNode(date.toLocaleString())
    up.appendChild(dateUpdate)
})

