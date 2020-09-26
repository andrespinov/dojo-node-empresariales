module.exports = async app => {
    const trackController = require('../controllers/track.controller.js')

    let router = require('express').Router()
    router.get('/', await trackController.findAllTracks)

    router.post('/', await trackController.createTrack)

    app.use('/v1/canciones', router)
}
