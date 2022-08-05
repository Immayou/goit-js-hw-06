const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit (event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    console.log(formData)
    formData.forEach((value, name) => {
    if(event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
    const message = 'Будь ласка, заповніть усі поля форми!'
    alert(message)
    } else {
    let vallueArray = {name: value}
    
    console.log()
    }

    })
}


// якщо є незаповнене поле -  alert с предупреждением о том, что все поля должны быть заполнены.
// якщо заповнено все поля и отправил форму, збери значения полів в обьект, де имя поля будет именем свойства, 
// а значение поля - значением свойства. 
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.