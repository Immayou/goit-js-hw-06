const number = document.querySelector('[type="number"]')
const createButton = document.querySelector("[data-create]")
const destroyButton = document.querySelector("[data-destroy]")
const divBoxesContainer = document.querySelector('#boxes')

number.addEventListener('input', onGetNumberInput)
createButton.addEventListener('click', createBoxes)
destroyButton.addEventListener('click', destroyBoxes)

function onGetNumberInput (event) {
  createBoxes(event.currentTarget.value)
}

function createBoxes(amount) {
  let divBoxes = []

  for (let i = 0; i <= amount - 1; i += 1) {
  let div = document.createElement('div')
  div.style.width = "30px" 
  div.style.heigth = "30px" 
  // divBoxes[i].style.width += 10
  // divBoxes[i].style.heigth += 10
  div.style.backgroundColor = getRandomHexColor() 
  divBoxes.push(div)
}
  divBoxesContainer.append(...divBoxes)
}

function destroyBoxes() {
  divBoxesContainer.innerHTML = ''
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
