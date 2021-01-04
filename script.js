// определяем все эллементы
const slider = document.querySelector('.slider');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const sliderItems = document.querySelectorAll('.slider-item')


// номер текущего слайда и пагинации
let current = 0


// создаём кружочки пагинации по количеству слайдов и создаём массив из эллементов пагинации
const paginationBlock = document.querySelector('.slider-pagination'),
    dot = document.createElement('img');

for(let i = 0; i<sliderItems.length; i++){
    paginationBlock.innerHTML += ` <img src="" alt="dot" class="pag">`
}

const pagination = document.querySelectorAll('.pag');

//функция рендера пагинацию с активным эллементом
function activPagination (current){
    pagination.forEach(el => {
    el.src = './assets/100x100_2.png';
    pagination[current].src = './assets/100x100.png';
});
}

// вызываем фунции для показа слайдера и пагинации
showSlide(current)
activPagination (current)



// конпка вперед
btnNext.addEventListener('click', slideNext)
// кнопка назад
btnPrev.addEventListener('click', slidePrev)



//функция для перелистывания вперед
function slideNext(){

    sliderItems.forEach(el=>{

        // сбрасываем лишние класс; назначаем всем слайдам класс, что бы развернуть их в нужную сторону;
        // снимаем классы с текущего слайда; и убираем его анимацией 
        el.classList.remove('prev','next','prev1','next1')
        el.classList.add('prev1')
        sliderItems[current].classList.remove('prev','next','prev1','next1')
        sliderItems[current].classList.add('next');
        
    })

    if(current+1 == sliderItems.length){

        current = 0
    }else{     
        btnPrev.classList.remove('btn-disabled')
        btnPrev.addEventListener('click', slidePrev)
        current++
    }

    showSlide(current)
    activPagination (current)
}



// функция для перелистывания назад

function slidePrev(){

    sliderItems.forEach(el=>{


        el.classList.remove('prev','next','prev1','next1')
        el.classList.add('next1')
        sliderItems[current].classList.remove('prev','next','prev1','next1')
        sliderItems[current].classList.add('prev');

    })


    if(current-1 < 0){
        current = (sliderItems.length -1)
    }else{
        current--
        btnNext.addEventListener('click', slideNext)
        btnNext.classList.remove('btn-disabled')
    }


    showSlide(current)
    activPagination (current)
}


function showSlide (current){
        sliderItems.forEach(el => {
        el.style.opacity = 0;
        sliderItems[current].classList.remove('prev','next','prev1','next1')
        sliderItems[current].style.opacity = 1;
    });
}






