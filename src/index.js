//importing express, path, morgan and mysql
const express= require('express')
const path= require('path')
const morgan= require('morgan')
const mysql= require('mysql')
const myConnection= require('express-myconnection')

//importing routes
const customerRoutes= require('./routes/customer.js') 

//creating an instance of express
const app= express()

//settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//settings for connection to database
const dbOptions= {
    host: 'localhost',
    database: 'test3',
    user: 'root',
    password: '',
}

//connection to database
app.use(myConnection(mysql, dbOptions, 'single'))

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))

//routes
app.use('/', customerRoutes)

//server
app.listen(app.get('port'), () => {
    console.log(`Server live on port ${app.get('port')}`)
})

 