const bcrypt = require("bcryptjs")
const userController = require('../users/controller')

const login = ({ username, password }) =>
    new Promise((resolve, reject) => {
        //success
        //incorrect username
        //incoerrect password
        //internal server error
        userController
            .getUserForAuth(username)
            .then(user => {
                if (!user || !user.password) {
                    reject({
                        status: 400, //bad request
                        err: "Incorrect username"
                    })
                }
                else {
                    bcrypt
                        .compare(password, user.password)
                        .then(result => {
                            if (result) {
                                //success
                                resolve({username: user.username, id: user._id});
                            }
                            else {
                                reject({
                                    status: 400,
                                    err: "Incorrect Password"
                                })
                            }
                        })
                        .catch(err => {
                            reject({
                                status: 501,
                                err: err
                            })
                        })
                }
            })
            .catch(err => reject({
                status: 501,
                err: err
            }))
    })

module.exports = {
    login
}