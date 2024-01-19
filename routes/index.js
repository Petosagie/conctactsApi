const router = require('express').Router();
const contacts = require('./contacts');
const swagger = require('./swagger');

// Main router middle ware, index route
router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World!');
})

router.use('/', require('./swagger'));

router.use('/contacts', require('./contacts'));

module.exports = router;