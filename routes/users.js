const { ajout, getpofile, modifier, spr, uploadfile } = require('../controllers/Usersctrl')

const users = require ('express').Router()

users.get('/', getpofile)
users.post('/',ajout)
users.post('/upload', uploadfile)
users.put('/:id',modifier)
users.delete('/:id', spr)

module.exports = users

