const update = document.querySelectorAll('.update')
const date = new Date()


function updateDate(){
    update.forEach(up => {
        const dateUpdate = document.createTextNode(date.toLocaleString())
        up.appendChild(dateUpdate)
    })    
}

export default updateDate