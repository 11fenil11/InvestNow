/*
Author: Parampal Singh
Reference: https://git.cs.dal.ca/shah3/group22_tutorly/-/blob/main/backend/src/api/notification/controllers/notification.js
*/
const Notifications = require('../models/notificationModel')

async function getNotifications(req, res)  {
    try {
        const notifications = await Notifications.find().sort({ createdAt: -1 })

        res.status(200).json({
            message: notifications.length,
            success: true,
            notification: notifications
        });

    }
    catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            success: false,
            error: error
        });
    }
}

async function sendNotifications(req, res){
    try {
        if(!req.body.text){
            res.status(400)
            throw new Error('Please add a notification description')
        }
        if(!req.body.type){
            res.status(400)
            throw new Error('Please select a valid notification type')       
        }

        const notification = await Notifications.create({
            text: req.body.text,
            type: req.body.type,
        })

        res.status(200).json({
            message: 'Send notifications',
            success: true,
            notification: notification     
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            success: false,
            error: error
        });
    }
}

module.exports = {
    getNotifications,
    sendNotifications
}
