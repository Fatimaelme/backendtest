const Persons = require("../Models/Persons")

const ajout = async(req, res) =>{
    const add = new Persons({
        name: req.body.name, 
        age: req.body.age,
        favoritefoods: req.body.favoritefoods
    })

    await add.save()
    res.json('ajouter')
}
const getpersons = async (req,res) =>{
    const rest = await Persons.find()
    res.json(rest)
}

const change = async (req,res) =>{
    const modify = await Persons.findByIdAndUpdate(req.params.id,req.body)
    res.json(msg= 'updated')
}

const sup = async(req, res) =>{
    const suppr = await Persons.findByIdAndRemove(req.params.id)
    res.json(msg= 'supprimer')
}

const getbyname = async (req, res)=>{
    const check = await Persons.findOne({name:req.query.name})
    res.json(check)
}

module.exports = {
    ajout,
    getpersons,
    change, 
    sup,
    getbyname
}