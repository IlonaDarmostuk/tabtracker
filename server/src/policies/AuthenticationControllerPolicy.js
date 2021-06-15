const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object({
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        })

        const {error} = schema.validate(req.body)
        if(error){
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'you must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `the password provided failed one of the following rules:
                        1.must contain onlu lowetr or upper case letters, numeric
                        <br>
                        2.it must be at least 8 characters and not greater than 32 characters in length
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'invalid registration information'
                    })
                    break
            }
        } else {
            next()
        }

    }
}
