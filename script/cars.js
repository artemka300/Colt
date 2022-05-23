const sled =document.querySelector('.slader_line');
const cart =document.querySelectorAll('.cart');
let oiu = 0;
sled.style.width = `${cart.length*100}%;`

setInterval(() => {
    oiu += 1; 
    if (oiu >=cart.length) {
        oiu = 0;
    }
sled.style.left = -oiu + `00%`
}, 6000);