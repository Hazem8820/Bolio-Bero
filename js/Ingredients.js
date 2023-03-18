const sideBarWidth = $('#sideBar').outerWidth()
$('#aside').css('left', -sideBarWidth)
$('#togBtn').click(() => {
    $('#aside').animate({ left: '0px' }, 700)
    $('#togBtn').css('display', 'none')
    $('#xBtn').css('display', 'block')
    $('.slider20').animate({ top: '0px' },1000)
})

$('#xBtn').click(() => {
    $('#aside').animate({ left: -sideBarWidth }, 700)
    $('#xBtn').css('display', 'none')
    $('#togBtn').css('display', 'block')
    $('.slider20').animate({ top: '200px' },500)
})

async function getIngredients() {
    $('#loader').fadeIn(300)
    const api = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    const response = await api.json()
    console.log(response.meals.slice(0, 24));
    showIngredients(response.meals.slice(0, 24))
    $('#loader').fadeOut(300)
}

function showIngredients(data) {
    let mealsBox = ``
    for (let i of data) {
        mealsBox += ` <div onclick="showId('${i.strIngredient}')" class="colNum1 col-md-3 text-white text-center">
        <span class="fa-7x"><i class="fa-solid fa-utensils"></i></span>
        <h2 class="fs-3">${i.strIngredient}</h2>
        <p class="fs-6">${i.strDescription.split(" ").slice(0, 24).join(" ")}</p>
    </div>`
    }
    document.getElementById('showData').innerHTML = mealsBox
}
getIngredients()

function showId(id){
    location.href = `./Result.html?id=${'i=' + id}`
    }