const express= require('express')
const path= require('path')
const morgan= require('morgan')
const mysql= require('mysql')
const myConnection= require('express-myconnection')
const connection = require('express-myconnection')

const app= express()

//settings
app.set('port', process.env.PORT || 3000)
app.set('views engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//database settings
const dbOptions= {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'mydb'
}

const connectionsql=mysql.createConnection({
    host: 'localhost',
    database: 'mydb',
    user: 'root',
    password: '',
})

connectionsql.connect(err => {
    if (err) {
        console.log("Connection error " + err.stack)
        return
    } else {
        console.log("Connection completed")
    }
})

//middlewares
app.use(morgan('dev'))



//server
app.listen(app.get('port'), () => {
    console.log(`Server live on port ${app.get('port')}`)
})

 