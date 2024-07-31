const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 13    
    },
    country: {
        type: String,
    },
    discussionTopic: {
        type: String,
    }
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const userData = mongoose.model('user', userSchema);
module.exports = userData;
