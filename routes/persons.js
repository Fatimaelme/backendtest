const { ajout, getpersons, change, sup, getbyname } = require('../controllers/Personsctrl')

const personrouter = require('express').Router()


personrouter.post('/', ajout)
personrouter.get('/', getpersons)
personrouter.get('/find',getbyname)
personrouter.put('/:id',change)
personrouter.delete('/:id',sup)


module.exports = personrouter