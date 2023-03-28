/*
Author: Parampal Singh
*/
const express = require('express')
const notificationRouter = express.Router()
const {getNotifications, 
    sendNotifications} = require('../controller/notificationController')

// Get notifications 
notificationRouter.get('/', getNotifications)

// Post notification
notificationRouter.post('/', sendNotifications)

module.exports = notificationRouter
