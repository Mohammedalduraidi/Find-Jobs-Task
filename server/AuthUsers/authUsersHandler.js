const bcrypt = require('bcryptjs');
const saltRounds = 10;
const db = require('../data-base/index');
const helper = require('../helper/utility')


exports.signupPM = (req, res) => {
    const { username } = req.body;
    const { password } = req.body;
    const { email } = req.body;
    db.pmSchema.find({
        username: username
    }, (err, data) => {
        if (err) {
            console.log(err);
            return
        } else {
            if (data.length > 0) {
                res.sendStatus(409); // user already exist, status code is 409 (conflict)
            } else {
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    if (err) {
                        throw err;
                    }
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        let user = new db.pmSchema({
                            username: username,
                            email: email,
                            password: hash
                        });
                        user.save((err, data) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            helper.createSession(req, res, data.username);
                        });
                    });
                });
            }
        }
    });
};

exports.signupBM = (req, res) => {
    let { username } = req.body;
    let { password } = req.body;
    let { email } = req.body;
    db.bmSchema.find({
        username: username
    }, (err, data) => {
        if (err) {
            console.log(err);
            return

        } else {
            if (data.length > 0) {
                res.sendStatus(409); // user already exist, status code is 409 (conflict)
            } else {
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    if (err) {
                        throw err;
                    }
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) {
                            console.log(err);
                            return;
                        }
                        let user = new db.bmSchema({
                            username: username,
                            email: email,
                            password: hash
                        });
                        user.save((err, data) => {
                            if (err) {
                                console.log(err);
                                return;
                            }
                            helper.createSession(req, res, data.username);
                        });
                    });
                });
            }
        }
    });
};


exports.LoginPM = (req, res) => {
    let { username } = req.body;
    let { password } = req.body;
    db.pmSchema.findOne({
        username: username
    }, (err, data) => {
        if (err) {
            console.log(err);
            return;
        } else {
            if (!data) { // if the user does not exist
                res.sendStatus(404);
            } else {
                bcrypt.compare(password, data.password, (err, found) => {
                    if (found) {
                        helper.createSession(req, res, data.username);
                    } else {
                        res.sendStatus(404);
                    }
                });
            }
        }
    });
};


exports.LoginBM = (req, res) => {
    let { username } = req.body;
    let { password } = req.body;
    db.bmSchema.findOne({
        username: username
    }, (err, data) => {
        if (err) {
            console.log(err);
            return;
        } else {
            if (!data) { // if the user does not exist
                res.sendStatus(404);
            } else {
                bcrypt.compare(password, data.password, (err, found) => {
                    if (found) {
                        helper.createSession(req, res, data.username);
                    } else {
                        res.sendStatus(404);
                    }
                });
            }
        }
    });
};
