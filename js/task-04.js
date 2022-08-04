const counterValue = document.querySelector("#value");
let valueEl = counterValue.textContent;
const onIncrementButtonClick = document.querySelector('[data-action = "increment"]')
const onDecrementButtonClick = document.querySelector('[data-action = "decrement"]')
console.log(valueEl)

function counter () {
onIncrementButtonClick.addEventListener('click', pushIncrement)
onDecrementButtonClick.addEventListener('click', pushDecrement)
}

function pushIncrement () {
    valueEl += 1
    console.log("+")
}

function pushDecrement () {
    valueEl -= 1
    console.log("-")
}

// function buttonCounterClick (event) {
//     let valueEl = counterValue.textContent;
//     counterValue.textContent = parseInt(valueEl) + 1;
//     }

// onIncrementButtonClick.addEventListener('click', buttonCounterClick)
// onDecrementButtonClick.addEventListener('click', buttonCounterClick)
