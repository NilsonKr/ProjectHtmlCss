import updateDate from '../modules/Date.js'

const carousel = document.querySelector('.plans-carousel')
const rightA = document.querySelector('.a-right')
const leftA = document.querySelector('.a-left')
const arrows = document.querySelectorAll('.arrow')
const move = 180
updateDate()

carousel.scrollLeft = 180

function postionArrow(position,dir){
    if(dir === true){
        switch(true){
            case position === 180:
                arrows[0].style.right = '0'
                arrows[1].style.display = 'none'
            break;
            case position === 350:
                arrows[0].style.display = 'inline-block'
                arrows[1].style.left = '180px'
            break
        }
    }else{
        switch(true){
            case position === 0:
                arrows[0].style.right = '-180px'
                arrows[1].style.display = 'inline-block'
            break;
            case position === 180:
                arrows[0].style.display = 'none'
                arrows[1].style.left = '350px'
           break;
       }
    }
}

arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        if(arrow === arrows[0]){
            carousel.scrollLeft += move
            const position = carousel.scrollLeft
            postionArrow(position)
        }
        if(arrow === arrows[1]){
            if(carousel.scrollLeft === 350){
                carousel.scrollLeft = 180
            }else{
                carousel.scrollLeft -= carousel.scrollLeft
            }
            const position = carousel.scrollLeft
            postionArrow(position,true)
        }
    })
})


