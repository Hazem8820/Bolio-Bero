$('#loader').fadeIn(300)
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
const inputs = document.querySelectorAll('input')
const btnSubmit = document.getElementById('Submit')

document.getElementById('Submit').addEventListener('click', () => {
    $('#feedBack').fadeIn(500)
})

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
})
document.querySelector('form').addEventListener('input', () => {
    if (nameValidation(inputs[0]) &&
        nameValidation(inputs[1]) &&
        emailValidation(inputs[2]) &&
        phoneValidation(inputs[3]) &&
        passWordValidation(inputs[4]) &&
        rePassWordValidation(inputs[5])) {
    }
})

function nameValidation(input) {
    const regexStyle = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
    if (regexStyle.test(input.value)) {
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
        return true
    }
    else {
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
        return false
    }
}

function emailValidation(input) {
    const regexStyle = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if (regexStyle.test(input.value)) {
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
        return true
    }
    else {
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
        return false
    }
}

function passWordValidation(input) {
    const regexStyle = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (regexStyle.test(input.value)) {
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
        return true
    }
    else {
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
        return false
    }
}

function rePassWordValidation(input) {
    if (input.value == inputs[4].value) {
        passWordValidation(input)
        document.getElementById('Submit').removeAttribute('disabled')
    }
}

function phoneValidation(input) {
    const regexStyle = /^01[0125][0-9]{8}$/
    if (regexStyle.test(input.value)) {
        input.classList.add('is-valid')
        input.classList.remove('is-invalid')
        return true
    }
    else {
        input.classList.add('is-invalid')
        input.classList.remove('is-valid')
        return false
    }
}
$('#loader').fadeOut(300)
