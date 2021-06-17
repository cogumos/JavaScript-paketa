const users = [
    {
        "img": "https://randomuser.me/api/portraits/men/11.jpg",
        "name": "Luffy",
        "description": "Gommu Gommu No"
    },
    {
        "img": "https://randomuser.me/api/portraits/men/12.jpg",
        "name": "Zoro",
        "description": "Santoryu"
    },
    {
        "img": "https://randomuser.me/api/portraits/men/13.jpg",
        "name": "Eren",
        "description": "Tatakae"
    },
    {
        "img": "https://randomuser.me/api/portraits/men/14.jpg",
        "name": "Levi",
        "description": "Sasagayo"
    },
    {
        "img": "https://randomuser.me/api/portraits/men/15.jpg",
        "name": "Naruto",
        "description": "Dattebayo"
    },
    {
        "img": "https://randomuser.me/api/portraits/men/16.jpg",
        "name": "Edward",
        "description": "Rage"
    },
]

const renderData = (users) => {
    list.innerHTML = ""
    users.forEach(user => {
        const li = document.createElement("li")
        li.innerHTML = `
            <img class="user_img" src="${user.img}" alt="${user.name}">
            <div>
                <h1 class="user_title">${user.name}</h1>
                <p class="user_desc">${user.description}</p>
            </div>
        `
        li.classList.add("user")
        list.appendChild(li)
    })

}

const filterData = (value) => {
    const newUsers = users.filter(user => {
        if (user.name.toLowerCase().includes(value.toLowerCase()) || user.description.toLowerCase().includes(value.toLowerCase())) {
            return user
        }
    })
    renderData(newUsers)
}
const list = document.getElementById("list_container")
const input = document.getElementById("input_user")

renderData(users)
input.addEventListener("input", event => {
    filterData(event.target.value)
})
