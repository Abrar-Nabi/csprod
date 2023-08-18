// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
// });





const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('showimg');
    }
    else{
      entry.target.classList.remove('showimg');
    }
  });
});

const ourTeamPage = document.querySelectorAll('.image');
ourTeamPage.forEach((el) => obs.observe(el));








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


// const hoverContainer = document.querySelector('.box-content')
//     hoverContainer.addEventListener('click', () => {
//     hoverContainer.classList.toggle('opacityVisible');

// });

// function show(classList) {
//     classList.toggle('opacityVisible');
//    }



// // My Code 
function toggleClass(clickedDiv) {
//   // Get all elements with the box-content class
  const divs = document.querySelectorAll('.box-content');
  
//   // Remove the CSS class from all divs
  divs.forEach(div => div.classList.remove('opacityVisible'));
  
//   // Add the CSS class to the clicked div
  clickedDiv.classList.toggle('opacityVisible');
}


