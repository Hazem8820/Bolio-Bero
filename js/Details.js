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
    const api = await fetch(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${info}`)
    const response = await api.json()
    console.log(response.meals);
    showData(response.meals)
    $('#loader').fadeOut(300)
}

function showData(data) {
    let mealsBox = ``
    for (let i of data) {
        mealsBox += `<div class="w-100 my-5 mx-auto text-center position-relative">
        <img src="${i.strMealThumb}" class="w-75 border rounded-3" alt="">
        <div class="h-100 w-100 position-absolute top-0 z-2">
        </div>
    </div>
    <div class="w-75 mx-auto mt-5 me-5 text-center">
        <h2 class="text-white title1 m-5">${i.strMeal}</h2>
        <p class="fa-2x text-light text-center">${i.strInstructions.split(' ').slice(0, 40).join(" ")}</p>
        <div class="my-5 text-light fa-2x">
            <p><span>Area:</span> ${i.strArea}</p>
            <p><span>Category:</span> ${i.strCategory} </p>
            <p class="mt-5"><span>Recipes:</span> <span class="alert alert-info fs-5">${i.strMeasure1} ${i.strIngredient1}</span> <span class="alert alert-info fs-5">${i.strMeasure2} ${i.strIngredient2}</span> <span class="alert alert-info fs-5">${i.strMeasure3} ${i.strIngredient3}</span> <span class="alert alert-info fs-5">${i.strMeasure4} ${i.strIngredient4}</span> <span class="alert alert-info fs-5">${i.strMeasure5} ${i.strIngredient5}</span> <span class="alert alert-info fs-5">${i.strMeasure6} ${i.strIngredient6}</span> </p>
            <p class="mt-5"><span>Tags:</span> <span class="alert alert-danger fs-5">${i.strTags}</span> </p>
            <div class="d-flex mt-5">
                <div class="d-flex justify-content-center mx-2 my-2"><button class="btn btn-success signinbtn px-2">
                        <a target="_blank" href="${i.strSource}" class="text-decoration-none text-light fa-2x">Source</a>
                    </button></div>
                <div class="d-flex justify-content-center mx-2 my-2"><button class="btn btn-danger signinbtn px-2">
                        <a target="_blank" href="${i.strYoutube}" class="text-decoration-none text-light fa-2x">Youtube</a>
                    </button></div>
            </div>
        </div>
    </div>`

    }
    document.getElementById('display').innerHTML = mealsBox
}
getData(id)