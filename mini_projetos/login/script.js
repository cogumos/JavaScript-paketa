let btn = document.querySelector('button')
let user = document.querySelector('#user')
let password = document.querySelector('#password')

btn.addEventListener('click', () => {
    alert(`Your login: ${user.value} \nYour password: ${password.value}`)
})

user.addEventListener('input', () => {
    password.addEventListener('input', () => {
        if (user.value.length == 0 && password.value.length == 0) btn.disabled = true
        else btn.disabled = false
    })

})