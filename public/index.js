console.log("Index.js connected")
const taskContainer = document.getElementById('task-container')

const removeTask = (id) => {
     axios.delete(`http://localhost:4545/api/task/${id}`)
     .then(res => {
        taskContainer.innerHTML = ''
        res.data.forEach(createCard)
     })
     .catch(err => console.log(err))
}

const createCard = task => {
    let card = document.createElement('div')
    card.classList += 'task-card'

    let cardHeader = document.createElement('div')
    cardHeader.classList += 'task-header'

    let options = document.createElement('div')
    options.classList += 'task-options'

    let taskName = document.createElement('h3')
    taskName.textContent = task.name

    let trashIcon = document.createElement('h3')
    trashIcon.addEventListener('click', () => removeTask(task.id))
    trashIcon.textContent = '🧺'


    card.appendChild(cardHeader)
    cardHeader.appendChild(taskName)
    cardHeader.appendChild(options)
    options.appendChild(trashIcon)

    let description = document.createElement('p')
    description.textContent = task.description
    card.appendChild(description)

    taskContainer.appendChild(card)
}

const fetchTasks = () => {
    axios.get('http://localhost:4545/api/tasks')
        .then(res => {
            console.log(res.data)
            res.data.forEach(createCard)
        })
}

fetchTasks()