let create = document.getElementById('createDiv')
console.log(create);
let section = document.querySelector('section')
console.log(section);

create.addEventListener('click', function () {
    let div = document.createElement('div')
    div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    section.appendChild(div)
})

let firstText = document.getElementById('load')
let counter = 0
function dots () {
  let dot = ["", ".", "..", "..."]
firstText.textContent =  `loading ${dot[counter]}` 
counter++

if(counter === 4) {
    counter = 0
}
}

setInterval(dots, 1000)

let secondText = document.getElementById('loading');
let counter2 = 0;

function letters() {
  secondText.textContent = "LOADING".substring(0, counter2 + 1);;
  counter2 = (counter2 + 1) ; 
}

setInterval(letters, 500);

let mouse = document.querySelector('span')
console.log(mouse);


window.addEventListener("mousemove", function (e) {
    mouse.style.top = e.y + "px"
    mouse.style.left = e.x + "px"
    mouse.style.border =`1px solid rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
})