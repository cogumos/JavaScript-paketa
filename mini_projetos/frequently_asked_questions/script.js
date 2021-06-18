const buttons = document.querySelectorAll(".faq_button")
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        button.parentNode.classList.toggle("active")
    })
})
