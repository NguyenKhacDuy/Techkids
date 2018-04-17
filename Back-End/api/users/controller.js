const userModel = require('./model');

const createUser = ({ avatarUrl, username, password, email }) =>
    new Promise((resolve, reject) => {
        userModel.create({
            avatarUrl,
            username,
            password,
            email
        })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

const getAllUser = list => new Promise((resolve, reject) => {
    userModel.find({
        "active": true
    })
        .sort({ createdAt: -1 })
        .skip((list - 1) * 20)
        .select("_id avaterUrl username password email createdAt")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const getUser = id => new Promise((resolve, reject) => {
    userModel.findOne({
        active: true,
        _id: id
    })
        .select("_id avaterUrl username password email createdAt")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
});

const updateUserAvatar = (id, { avatarUrl }) =>
    new Promise((resolve, reject) => {
        userModel.update({
            _id: id
        }, {
                avatarUrl
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

    const updateUserName = (id, { username }) =>
    new Promise((resolve, reject) => {
        userModel.update({
            _id: id
        }, {
            username
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

const updateUserPassword = (id, { password }) =>
    new Promise((resolve, reject) => {
        userModel.update({
            _id: id
        }, {
                password
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

const updateUserEmail = (id, { email }) =>
    new Promise((resolve, reject) => {
        userModel.update({
            _id: id
        }, {
                email
            })
            .then(data => resolve({ id: data._id }))
            .catch(err => reject(err))
    });

const deleteUser = id => new Promise((resolve, reject) => {
    userModel.update({
        _id: id
    }, {
            active: false
        })
        .then(data => resolve({ id: data._id }))
        .catch(err => reject(err))
});

module.exports = {
    createUser,
    getAllUser,
    getUser,
    updateUserAvatar,
    updateUserEmail,
    updateUserPassword,
    deleteUser,
    updateUserName
}