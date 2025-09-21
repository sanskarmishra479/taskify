import Router = require("express");

const userRouter = Router();

userRouter.post('/signin', function(req, res){
    res.json({
        "message" : "users"
    })
})

module.exports = {
    userRouter
}