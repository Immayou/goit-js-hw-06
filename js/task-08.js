const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit (event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    console.log(event.currentTarget.elements)
    let valueArray = {};

    formData.forEach((value, key) => {
    if(event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
    const message = 'Будь ласка, заповніть усі поля форми!'
    alert(message)
    } else {
    valueArray = `{${key}: ${value}}`
    } 
    console.log(valueArray)
    // if(event.currentTarget.elements.email.value !== "" && event.currentTarget.elements.password.value !== "") {
    // event.currentTarget.reset()
    // } 
    
    })
}
// console.log(`Login: ${event.currentTarget.elements.email.value}, Password: ${event.currentTarget.elements.password.value}`)

// якщо є незаповнене поле -  alert с предупреждением о том, что все поля должны быть заполнены.
// якщо заповнено все поля и отправил форму, збери значения полів в обьект, де имя поля будет именем свойства, 
// а значение поля - значением свойства. 
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.