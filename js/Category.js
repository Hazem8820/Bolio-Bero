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

async function getCategories() {
    $('#loader').fadeIn(300)
    const api = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const response = await api.json()
    console.log(response.categories);
    showCategories(response.categories)
    $('#loader').fadeOut(300)
}

function showCategories(data) {
    let mealsBox = ``
    for (let i of data) {
        mealsBox += `<div  onclick="showId('${i.strCategory}')" class="colNum1 col-md-3 position-relative overflow-hidden">
        <img src="${i.strCategoryThumb}" class="w-100 rounded-3 border border-dark" alt="">
        <div class="showData w-100 rounded-3 h-100 overflow-hidden">
            <div
                class="text-white h-100 w-100 bg-light bg-opacity-75">
                <div class="w-100 mx-auto text-center">
                    <h2 class="text-black">${i.strCategory}</h2>
                    <p class="text-black">${i.strCategoryDescription.split(' ').slice(0, 24).join(' ')}</p>
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById('showData').innerHTML = mealsBox
}
getCategories()

function showId(id){
    location.href = `./Result.html?id=${'c=' + id}`
}