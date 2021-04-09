const mongoose = require('mongoose');
const userSchema = require('../models/users-schema');

const userModel =
    mongoose.model("UserModel", userSchema)

const deleteUserById = (id) => {
    userModel.remove({_id: id}, (err, status) => {
        console.log(status)
    })
}

const createUser = (newUser) => {
    userModel.create(newUser, (err, data) => {
        console.log(data)
    })
}

const updateUserById = (id, newUserValues) => {
    userModel.update({_id: id}, {
        $set: {
            fistName: newUserValues.firstName,
            username: newUserValues.username
        }
    }, (err, status) => {
        console.log(status)
    })
}

const findOneUserById = (id) => {
    userModel.findById(id, (err, data) => {
        console.log(data)
    })
}

const findUserById = (id) => {
    return userModel.find({_id: id})
}

const findOneUserByUsername = (username) => {
    userModel.findOne({username: username}, (err, data) => {
        console.log(data);
    })
}

const findUserByUsername = (username) => {
    userModel.find({username: username}, (err, data) => {
        console.log(data);
    })
}

const findAllUsers = (callback) => {
    return userModel.find((err, data) => {
        // console.log(err)
        // console.log(data)
    })
}

module.exports = {
    findUserById,
    findAllUsers,
    findUserByUsername,
    findOneUserById,
    findOneUserByUsername,
    createUser,
    deleteUserById,
    updateUserById
}