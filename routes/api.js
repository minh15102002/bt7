/**
 * author hungtt
*/
const express = require("express")
const router  = express.Router()

const userApiController = require("../controller/Api/user.controller")
const generalMiddleware = require('../middlewares/general.middleware'),
      authMiddleware    = require('../middlewares/jwt.middleware'),
      userMiddleware    = require('../middlewares/user.middleware')
/**
 * Init all APIs on your application
 * @param {*} app from express
 */
let initAPIs = app => {
    ////////////////////////////////////////////////////////////////////////////
    router.use([ generalMiddleware.formatJsonApi, generalMiddleware.setAllowOrigin ])
    ////////////////////////////////////////////////////////////////////////////
    /////////////////// Route không cần login ////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    router.post('/register', [ userMiddleware.REGISTER ], userApiController.register)
    router.post('/login', [ userMiddleware.LOGIN ], userApiController.login)
    ////////////////////////////////////////////////////////////////////////////
    router.use([ authMiddleware.isAuth])
    ////////////////////////////////////////////////////////////////////////////
    /////////// route cần verify thành công jwt ////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    router.get('/users', userApiController.getUser )
    
    return app.use( "/api", router )
}
module.exports = initAPIs