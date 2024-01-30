const express= require('express')
const Router= express.Router()
const connection= require('./db')


Router.post('/auth', (req, res)=>{
    const {usuario}= req.body
    const {pass}= req.body
    connection.query('SELECT * FROM usuario WHERE usuario=? AND pass=?', [usuario, pass], (err, dato)=>{
        if(dato.length > 0){
            req.session.user= true
            req.session.user= usuario
            
            res.redirect('inicio')
            
        }else{
            connection.query('SELECT * FROM admin WHERE usuario=? AND pass=?', [usuario, pass], (err, admin)=>{
                if(admin.length > 0){
                    req.session.admin= true
                    req.session.admin= usuario
                    res.redirect('admin')
                    
                }else{
                    res.json('Error de autenticacion')
                }
            })
        }
    })
})
Router.get('/login', (req, res)=>{
    res.render('login')
    
})
Router.get('/inicio', (req, res)=>{
    const usuario= req.session.user
    if(!usuario){
        res.redirect('login')
    }else{
        res.render('inicio', {
              login: true,
              usuario: usuario
        })
    } 
})

Router.get('/logout', (req, res)=>{
    req.session.destroy()
    res.redirect('login')
})
Router.get('/admin', (req, res)=>{
    const administrador= req.session.admin
    if(!administrador){
        res.redirect('login')
    }else{
        res.render('admin', {
            login: true, 
            administrador: administrador
        })
    }
    
})

module.exports= Router