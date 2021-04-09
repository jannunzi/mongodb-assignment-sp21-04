const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost:27017/whiteboard-04',
        {useNewUrlParser: true, useUnifiedTopology: true});

const userDao = require("./daos/users-dao")

// const callback = (users) => {
//     console.log(users)
// }
// const promise = userDao.findAllUsers()
// promise.then(callback)

// userDao.findAllUsers()
//     .then((users) => {console.log(users)})

userDao.findUserById("6063852ac37118ade9bfbf33")
    .then((user) => {console.log(user)})

// console.log(promise)
// userDao.findUserById("6063852ac37118ade9bfbf33")