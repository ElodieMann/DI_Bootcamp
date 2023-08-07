// Exercice 2

const btn = document.querySelector('input')
console.log(btn);
const option = document.getElementsByTagName('option')
console.log(option);
btn.addEventListener('click', function removeColor () {
    for (color of option) {
        if (color.selected) {
            color.remove()
        }
    }

})