const mongoose = require('mongoose');
const user = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true, //Making email as username
    },
    password : {
        type: String,
        required: true,
    },
    current_plan : {
        type: String,
        default: "Free",
    },
    subscriptionId : {
        type: String,
        default: "",
    },
    cancelled : {
        type: Boolean,
        default: false,
    },
    planType : {
        type: String,
        default: "Monthly",
    }
});

module.exports = mongoose.model('user', user);