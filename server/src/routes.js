const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
  app.post('/register',
      AuthenticationControllerPolicy.register,
      AuthenticationController.register
  ),
   app.post('/login',
      AuthenticationController.login
  ),
   app.post('/songs',
       SongsController.create
   ),
    app.get('/songs/:songId',
        SongsController.show
    ),
   app.get('/songs',
       SongsController.index
   ),
    app.put('/songs/:songId',
        SongsController.put
    ),
    app.get('/bookmarks',
        BookmarksController.index
    )
}
