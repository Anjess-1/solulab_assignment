let mongoose = require('mongoose')

mongoose.connect("mongodb+srv://anjali:anjali123@cluster0.xd5y3n4.mongodb.net/product")

mongoose.connection.on('error', error => {
    console.log('Mongo connection error : ', error)
})

mongoose.connection.on('connected', ()=>{
    console.log('Connected with mongodb')
})