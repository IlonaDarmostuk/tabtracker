const {Bookmark, Song} = require('../models')
const { Op } = require('sequelize')
const _ = require('lodash')
module.exports = {

    async index (req, res) {
        try {
            const userId = req.user.id
           const {songId} = req.query
            const where = {
                UserId: userId
            }
            if (songId) {
                where.SongId = songId
            }

            const bookmarksQuery = await Bookmark.findAll({
                where: where,
                include: [
                    {
                        model: Song
                    }
                ],
                order: [['createdAt', 'DESC']]
            })


            res.send(bookmarksQuery)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to fetch the bookmark'
            })
        }
    },
    async post (req, res) {
        try {
            const userId = req.user.id
            const {songId} = req.body

            const bookmark = await Bookmark.findOne({
                where: {
                    SongId: songId,
                    UserId: userId
                }
            })
            console.log(bookmark, 'bookmark')
            if (bookmark) {
                return res.status(400).send({
                    error: 'you have already set this as a bookmark'
                })
            }
            const newBookmark = await Bookmark.create({
                SongId: songId,
                UserId: userId
            })
            res.send(newBookmark)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to create the bookmark'
            })
        }
    },
    async delete (req, res) {
        try {
            const userId = req.user.id
            const {bookmarkId} = req.params
            const bookmark = await Bookmark.findOne({
                where: {
                    id: bookmarkId,
                    UserId: userId
                }
            })
            if(!bookmark){
                return res.status(403).send({
                    error: 'you do not have access to this bookmark'
                })
            }
            await bookmark.destroy()
            res.send(bookmark)
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to delete the bookmark'
            })
        }
    }

}
