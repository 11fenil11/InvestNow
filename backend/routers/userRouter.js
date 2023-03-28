// Author: Neelansh Gulati
const express = require("express");
const authRouter=express.Router();
const {
    signup: signup,
    login: login,
    forgotPassword:forgotPassword,
    fetchUserByEmail:fetchUserByEmail,
    updateUserProfile:updateUserProfile
}=require('../controller/userController')

authRouter
.route('/signup')
.post(signup)

authRouter
.route('/login')
.post(login)

authRouter
.route("/forgotPassword")
.post(forgotPassword);

authRouter
.route("/fetchUserByEmail")
.get(fetchUserByEmail);

authRouter
.route("/updateUserProfile")
.put(updateUserProfile);

module.exports=authRouter;
