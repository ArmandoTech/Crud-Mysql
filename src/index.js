//importing express, path, morgan and mysql
const express= require('express')
const path= require('path')
const morgan= require('morgan')
const mysql= require('mysql')

//importing routes
const customerRoutes= require('./routes/customer.js') 

const app= express()

//settings
app.set('port', process.env.PORT || 3000)
app.set('views engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//settings for connection to database
const connectionsql=mysql.createConnection({
    host: 'localhost',
    database: 'test3',
    user: 'root',
    password: '',
})

//connection to database
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

 