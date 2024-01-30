let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;


next.onclick = function(){
    active += 1;
    rightSlider();
}

function rightSlider(){
    dots[active].classList.add('active');
    slider.style.left = -items[active].offsetLeft + 'px';
    dots[active - 1].classList.remove('active');
}

prev.onclick = function(){
    active -= 1;
    leftSlider();
}

function leftSlider(){
    dots[active].classList.add('active');
    slider.style.left = -items[active].offsetLeft + 'px';
    dots[active + 1].classList.remove('active');
}
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider(); 
    })
})

function reloadSlider(){
    dots[active].classList.add('active');
    slider.style.left = -items[active].offsetLeft + 'px';
}
// next.onclick = function(){
//     active = active + 1 <= lengthItems ? active + 1 : 0;
//     reloadSlider();
// }
// prev.onclick = function(){
//     active = active - 1 >= 0 ? active - 1 : lengthItems;
//     reloadSlider();
// }
// let refreshInterval = setInterval(()=> {next.click()}, 3000);
// function reloadSlider(){
//     slider.style.left = -items[active].offsetLeft + 'px';
//     // 
//     let last_active_dot = document.querySelector('.slider .dots li .active');
//     last_active_dot.classList.remove('active');
//     dots[active].classList.add('active');

//     clearInterval(refreshInterval);
//     refreshInterval = setInterval(()=> {next.click()}, 3000);

    
// }

// dots.forEach((li, key) => {
//     li.addEventListener('click', ()=>{
//          active = key;
//          reloadSlider();
//     })
// })
// window.onresize = function(event) {
//     reloadSlider();
// };
// kurang gambar sama dots animation dan pelajari autonyas