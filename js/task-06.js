const inputBlock = document.querySelector("#validation-input")
const inputValidSymbolLength = inputBlock.getAttribute("data-length")

inputBlock.addEventListener("blur", onValidationCheckInput)

function onValidationCheckInput (event) {
    event.currentTarget.value.length === inputValidSymbolLength ?
    
}

