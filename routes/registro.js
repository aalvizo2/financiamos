const express= require('express')
const Router= express.Router()

Router.get('/registro', (req, res)=>{
    res.render('registro')
})

module.exports= Router