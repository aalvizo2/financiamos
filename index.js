const express= require('express')
const app= express()
const path= require('path')
const connection= require('./routes/db')
const login= require('./routes/login')
const registro= require('./routes/registro')
const bodyParser= require('body-parser')
const session= require('express-session')
app.use(session({
    secret: 'secreto', 
    resave: true, 
    saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'views')))
app.listen(9000, ()=>{
    console.log('app corriendo en puerto 9000')
    app.get('/', (req, res)=>{
        res.render('index')
        app.use('/', login)
        app.use('/', registro)
    })
    
})
