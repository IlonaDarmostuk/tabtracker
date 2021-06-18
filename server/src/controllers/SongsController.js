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
    }

}
