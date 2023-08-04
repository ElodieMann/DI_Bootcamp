// 2- 
let div = document.getElementById('navBar')
div.setAttribute('id', 'socialNetworkNavigation')

// 3- 
let newLi = document.createElement('li')
let node = "Logout"
newLi.textContent = node
document.querySelector('ul').appendChild(newLi)

console.log(document.querySelector('ul').firstElementChild.textContent);
console.log(document.querySelector('ul').lastElementChild.textContent);