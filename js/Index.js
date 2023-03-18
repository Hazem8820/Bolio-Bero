const sideBarWidth = $('#sideBar').outerWidth()
$('#aside').css('left', -sideBarWidth)
$('#togBtn').click(() => {
    $('#aside').animate({ left: '0px' }, 700)
    $('#togBtn').css('display', 'none')
    $('#xBtn').css('display', 'block')
    $('.slider20').animate({ top: '0px' }, 1000)
})

$('#xBtn').click(() => {
    $('#aside').animate({ left: -sideBarWidth }, 700)
    $('#xBtn').css('display', 'none')
    $('#togBtn').css('display', 'block')
    $('.slider20').animate({ top: '200px' }, 500)
})

const firstName = document.getElementById("firstName");
const firstLetter = document.getElementById("firstLetter");
firstName.addEventListener('input', () => {
    if (firstName.value != "") {
        getDataSearch(firstName.value)
    }

})
firstLetter.addEventListener('input', () => {
    if (firstLetter.value != "") {
        getDataFirstLetter(firstLetter.value)
    }
})

async function getDataSearch(para) {
try {
    const api = await fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=${para}`)
    const response = await api.json()
    showDataSearch(response.meals)
} catch (error) {
    console.log('error');
}
}

function showDataSearch(data) {
    let mealsBox = ``
    for (let i of data) {
        mealsBox += `<div onclick="showId(${i.idMeal})" class="colNum1 col-md-3 position-relative overflow-hidden">
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

async function getDataFirstLetter(para) {
try {
    const api = await fetch(`https:www.themealdb.com/api/json/v1/1/search.php?f=${para}`)
    const response = await api.json()
    showDataSearch(response.meals)
} catch (error) {
    console.log('error');
}
}

function showId(id) {
    location.href = `./details.html?id=${id}`
}