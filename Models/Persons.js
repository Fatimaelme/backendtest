const mongoose = require ('mongoose')

const personSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number
    },
    favoritefoods: {
        type : [String]
    }
}, {timestamp : true}
)

const Persons = mongoose.model('Persons', personSchema)

module.exports=Persons