const express = require('express')
const cors = require('cors')

const sequelize = require('./database')

const seed = require('./seed.js')
const {addTask, getTasks, deleteTask} = require('./controller.js')

const app = express()
app.use(express.json())
app.use(cors())

app.post('/api/seed', seed)

app.post('/api/task', addTask)
app.get('/api/tasks', getTasks)
app.delete('/api/task/:id', deleteTask)

sequelize.sync()

app.listen(4545, () => console.log(`Take us to warp 4545!`))