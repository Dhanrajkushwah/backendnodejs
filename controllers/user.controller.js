const manageUserModel = require("../models/user.model");
const status = require("../config/status");

// Add user
exports.create = async (req, res) => {
    try {
        var obj = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            country: req.body.country,
            discussionTopic: req.body.discussionTopic,
        };
        const newManageUserModel = new manageUserModel(obj);
        await newManageUserModel.save();
        res.json({ success: true, status: status.OK, msg: 'Adding Users is successfully.' });
    } catch (err) {
        console.log("err", err);
        return res.json({ success: false, status: status.INTERNAL_SERVER_ERROR, err: err, msg: 'Adding Users failed.' });
    }
};

// Get all users 
exports.list = async (req, res) => {
    try {
        const data = await manageUserModel.find({}).lean().exec();
        return res.json({ data: data, success: true, status: status.OK });
    } catch (err) {
        return res.json({ success: false, status: status.INTERNAL_SERVER_ERROR, err: err, msg: 'Get Users failed.' });
    }
};
