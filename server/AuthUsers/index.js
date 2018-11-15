const express = require('express');
const router = express.Router();
const session = require('express-session');
const handler = require('./authUsersHandler');

router.use(session({
    secret: 'very very secret',
    resave: true,
    saveUninitialized: true
}));

router.post('/signupPM', handler.signupPM);
router.post('/signupBM', handler.signupBM);
router.post('/LoginPM', handler.LoginPM);
router.post('/LoginBM', handler.LoginBM);

module.exports = router;