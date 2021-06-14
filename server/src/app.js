const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// eslint-disable-next-line no-undef
require('./routes.js')(app)
sequelize.sync()
    .then( () => {
        app.listen(config.port)
        console.log(`server started ${config.port}`)
    })
// app.listen(process.env.PORT || 8081)
