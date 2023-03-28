/*
Author: Parampal Singh
*/
const mongoose = require('mongoose')

const notificationSchema = mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    type:{
        type:String,
        required: true
    }
}, {
    timestamps: true
})

const notificationModel = mongoose.model('notificationModel', notificationSchema);

module.exports = notificationModel;