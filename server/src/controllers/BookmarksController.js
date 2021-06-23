const {Bookmark} = require('../models')
const { Op } = require('sequelize')
module.exports = {

    async index (req, res) {
        try {
            const {songId, userId} = req.query
            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })
            console.log(bookmark, 'bookmark')
            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the bookmark'
            })
        }
    }

}
