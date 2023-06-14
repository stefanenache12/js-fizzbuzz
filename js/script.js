let i = 1;
let container = document.querySelector('div.fizz-buzz-container');

for (i; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        let elemet = `<div class="box fizz-buzz-box">FizzBuzz</div>`;
        container.innerHTML += elemet 
    } 
    else if (i % 3 === 0) {
        let elemet = `<div class="box fizz-box">Fizz</div>`;
        container.innerHTML += elemet 
    } 
    else if (i % 5 === 0) {
        let elemet = `<div class="box buzz-box">Buzz</div>`;
        container.innerHTML += elemet 
    } 
    else {
        let elemet = `<div class="box element-box">${i}</div>`;
        container.innerHTML += elemet 
    }
  }
  