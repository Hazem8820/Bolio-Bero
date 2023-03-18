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

const searchParams = location.search
const params = new URLSearchParams(searchParams)
const id = params.get('id')

async function getData(info) {
    $('#loader').fadeIn(300)
    const api = await fetch(`https:www.themealdb.com/api/json/v1/1/filter.php?${info}`)
    const response = await api.json()
    console.log(response.meals);
    showData(response.meals)
    $('#loader').fadeOut(300)
}
getData(id)

function showData(data) {
    let mealsBox = ``
    for (let i of data) {
        mealsBox += `<div onclick="showId(${i.idMeal})" class="colNum1 mb-3 col-md-3 position-relative overflow-hidden">
        <img src="${i.strMealThumb}" class="w-100 rounded-3 border border-dark" alt="">
        <div class="showData w-100 rounded-3 h-100 overflow-hidden">
            <div
                class="d-flex justify-content-center align-items-center text-white h-100 w-100 bg-light bg-opacity-75">
                <div class="w-100 mx-auto">
                    <h2 class="text-black">${i.strMeal}</h2>
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById('showData').innerHTML = mealsBox
}

function showId(id){
    location.href = `./details.html?id=${id}`
}




