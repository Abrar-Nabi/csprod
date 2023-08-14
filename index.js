const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// const hoverContainer = document.querySelector('.box-content');
//     hoverContainer.addEventListener('click', () => {
//     hoverContainer.classList.toggle('opacityVisible');

// });

function show(classList) {
    classList.toggle('opacityVisible');
   }