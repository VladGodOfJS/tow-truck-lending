// Модальное Окно обратный звонок!
document.querySelectorAll('.show').forEach(function (element) {
    element.onclick = showModal;
})
document.querySelectorAll('.close').forEach(function (element) {
    element.onclick = closeModal;
})
document.querySelectorAll('.modal-wrap').forEach(function (element) {
    element.onclick = closeModal;
})

// показать модальное окно обратный звонок

function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function (event) {
        console.log(event);
        if (event.keyCode == '27') closeModal();
    }
}

// закрыть модальное окно обратный звонок

function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        element.classList.add('hide');
    })
    document.onkeydown = null;
}

// Модальное окно отзывов!

document.querySelectorAll('.review__btn').forEach(function (element) {
    element.onclick = reviewShow;
})
document.querySelectorAll('.close__review').forEach(function (element) {
    element.onclick = reviewClose;
})
document.querySelectorAll('.review-wrap-window').forEach(function (element) {
    element.onclick = reviewClose;
})
// показать модальное окно отзывы

function reviewShow() {
    let id = this.dataset.rev;
    document.querySelector(id).classList.remove('hide');
}
// закрыть модальное окно отзывы

function reviewClose() {
    document.querySelectorAll('.review-wrap-window').forEach(function (element) {
        element.classList.add('hide');
    })
}


// стоп пропагейшн для инпутов и кнопок в модальных окнах!


document.querySelectorAll('.form-control').forEach(function (element) {
    element.onclick = dontClose;

    function dontClose() {
        event.stopPropagation();
    }


})

/////////////

// функция оценка серсиса от юзера модальное окно ОТЗЫВЫ

document.querySelector('.btn__message').onclick = userMark;

function userMark(event) {
    event.stopPropagation();
    let inputs = document.querySelectorAll('.user__marks');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            inputs = inputs[i].value;
        }
    }
    console.log(inputs);
}

//////////////////////////////////////////////////////////////////////////
//////////////////////////
//////
//////////////////////////////////////////////////////////////////////////
//////////////////////////
//////

let checkedVariant = 'moto';
let checkKm = 5;
let span = document.querySelector('.check__price > span  ');


document.querySelectorAll('.type__auto ').forEach(function (element) {
    element.onclick = setVariant;
})



document.querySelectorAll('.checkbox__position').forEach(function (element) {
    element.onclick = recalcPrice;
})

document.querySelector('#select').onchange = setKm;





////

function recalcPrice() {
   

    // megaSwitch
    [
        ['moto', 300],
        ['mini', 350],
        ['sedan', 400],
        ['crossover', 500],
        ['bus', 600]
        
        
    ]
    .forEach(function(element){
    if(checkedVariant== element[0])span.textContent = element[1];
    })
    // .forEach(variant => { if (checkedVariant == variant[0]) span.textContent = variant[1] })

    // 2
    let wheel__blocked = 100;
    let checkbox = document.querySelector('.checkbox__position , #select');
   
    if (checkbox.checked) {
        span.textContent = +span.textContent + wheel__blocked;
    }
    //3

    console.log(checkKm);
    span.textContent =+span.textContent +checkKm *10;


    

    


    
}
///

function setVariant() {
    checkedVariant = this.value;
    
    recalcPrice();
}

function setKm(){
    checkKm = this.value;
    recalcPrice();
}









