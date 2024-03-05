const sequelize = require('./database.js')

module.exports = {
    addTask: (req, res) => {
        const {name, date, description} = req.body 

        sequelize.query(`
            INSERT INTO tasks (name, date, description, complete)
            VALUES (
                '${name}',
                '${date}',
                '${description}',
                false
            )
            RETURNING *;
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        })
        .catch(err => console.log(err))
    },
    getTasks: (req, res) => {
        sequelize.query(`
            SELECT * FROM tasks
            ORDER BY date ASC;
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },
    deleteTask: (req, res) => {
        let {id} = req.params 
        sequelize.query(`
            DELETE FROM tasks WHERE id = ${id};
            SELECT * FROM tasks
            ORDER BY date ASC;
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        })
    }
}