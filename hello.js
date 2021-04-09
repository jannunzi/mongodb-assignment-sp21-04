const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost:27017/whiteboard-04',
        {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String
}, {collection: 'users'})

const userModel = mongoose.model("UserModel", userSchema)

const deleteUserById = (id) => {
    userModel.remove({_id: id}, (err, status) => {
        console.log(status)
    })
}

// deleteUserById("6063856cc37118ade9bfbf35")

const createUser = (newUser) => {
    userModel.create(newUser, (err, data) => {
        console.log(data)
    })
}

createUser({
    firstName: "Charlie",
    lastName: "Garcia",
    username: "cgarcia"
})

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

// updateUserById("60638544c37118ade9bfbf34", {
//     firstName: "Alicia",
//     username: "alicia"
// })

const findOneUserById = (id) => {
    userModel.findById(id, (err, data) => {
        console.log(data)
    })
}

// findOneUserById("6063852ac37118ade9bfbf33")

const findUserById = (id) => {
    userModel.find({_id: id}, (err, data) => {
        console.log(data)
    })
}

// findUserById("60638544c37118ade9bfbf34")

const findOneUserByUsername = (username) => {
    userModel.findOne({username: username}, (err, data) => {
        console.log(data);
    })
}

// findOneUserByUsername("tlee")

const findUserByUsername = (username) => {
    userModel.find({username: username}, (err, data) => {
        console.log(data);
    })
}

// findUserByUsername("alovelace")

const findAllUsers = () => {
    userModel.find((err, data) => {
        console.log(err)
        console.log(data)
    })
}

// findAllUsers();