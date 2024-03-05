console.log('JS connected')
const form = document.getElementById('task-form')
const taskName = document.getElementById('task-name')
const taskDate = document.getElementById('task-date')
const taskDesc = document.getElementById('task-desc')

const sendTask = (e) => {
    e.preventDefault() 

    const newTask = {
        name: taskName.value,
        date: taskDate.value,
        description: taskDesc.value
    }

    axios.post('http://localhost:4545/api/task', newTask)
        .then(res => {
            console.log(res.data)
            alert("Your task has been added")
        })
        .catch(err => console.log(err))
}

form.addEventListener('submit', sendTask)