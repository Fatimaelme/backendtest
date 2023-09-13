const { stringify } = require('jade/lib/utils')
const mongoose = require('mongoose')


const userschema = mongoose.Schema({
    nom : {
        type : String
    },
    prenom: {
        type: String
    },
    email: {
        type: String,
        unique: true
    }, 
    telephone: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
}, {timestamp: true
})

const users = mongoose.model('users', userschema)
module.exports= users