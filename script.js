const showButton1 = document.querySelector('.show-button-1');
const closeButton1 = document.querySelector('.close-button-1');
const modal1 = document.querySelector('.modal-1');

const showButton2 = document.querySelector('.show-button-2');
const closeButton2 = document.querySelector('.close-button-2');
const modal2 = document.querySelector('.modal-2');

showButton1.addEventListener('click', () => {
    modal1.classList.add("show");
    showButton1.classList.add("disabled");
    showButton2.classList.add("disabled");
});

closeButton1.addEventListener('click', () => {
    modal1.classList.remove("show");
    showButton1.classList.remove("disabled");
    showButton2.classList.remove("disabled");
});

showButton2.addEventListener('click', () => {
    modal2.classList.add("active");
    showButton1.classList.add("disabled");
    showButton2.classList.add("disabled");
});

closeButton2.addEventListener('click', () => {
    modal2.classList.remove("active");
    showButton1.classList.remove("disabled");
    showButton2.classList.remove("disabled");
});