let colorBtn = document.getElementById('color')
let placeBtn = document.getElementById('place')
let ritualBtn = document.getElementById('ritual')


function favColor() {
    colorBtn.style.backgroundColor = 'blue'
    colorBtn.style.color = 'white'
    let color = 'My favorite color is blue'
    alert(color)
}

function favPlace () {
    let place = 'My favorite place is my Game/Work Room'
    alert(place)
}

function favRitual() {
    let ritual = 'My favorite ritual is stay up late and game all night with friends'
    alert(ritual)
}

colorBtn.addEventListener('click', favColor)
placeBtn.addEventListener('click', favPlace)
ritualBtn.addEventListener('click', favRitual)