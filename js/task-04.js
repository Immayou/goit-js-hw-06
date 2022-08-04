let counterValue = document.querySelector("#value");
const onButtonIncrementClick = document.querySelector('[data-action = "increment"]')
const onButtonDecrementClick = document.querySelector('[data-action = "decrement"]')

function counter () {
counterValue = 0;
onButtonIncrementClick.addEventListener('click', () => {
counterValue += 1
})
}