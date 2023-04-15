/***************CARROUSEL**************/
var carrousel = document.querySelector('.carrousel');
var images = carrousel.querySelectorAll('img');
var currentImageIndex = 0;
const grande = document.querySelector('.grande')

var draggableImage = document.getElementById("draggable-image");
var isDragging = false;
var offsetX, offsetY;


const punto = document.querySelectorAll('.punto')


punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
        let posicion = i
        let operacion = posicion * -25

        grande.style.transform = `translateX(${operacion}%)`

        punto.forEach((cadaPunto, i) => {
            punto[i].classList.remove('activo')
        })
        punto[i].classList.add('activo')
    })
})
/*************************************/