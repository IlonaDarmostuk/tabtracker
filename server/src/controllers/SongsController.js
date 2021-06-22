const {Song} = require('../models')

module.exports = {
    async create (req, res) {
        try {
            const song = await Song.create(req.body)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to create the song'
            })
        }
    },
    async put (req, res) {
        try {
            const song = await Song.update(req.body, {
                where: {
                    id: req.params.songId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'an error has occured trying to put the song'
            })
        }
    },
    async index (req, res) {
        try {
            const song =  await Song.findAll({
                limit: 10
            })
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the song'
            })
        }
    },
    async show (req, res) {
        try {
            const song =  await Song.findByPk(req.params.songId)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the song'
            })
        }
    }

}
