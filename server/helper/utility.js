
//create session when user is signed up or logged in
exports.createSession = (req, res, newUser) => {
    req.session.regenerate(() => {
        req.session.user = newUser;
        res.sendStatus(201);
    });
};

// Check the user is logged in
exports.isLoggedIn = (req, res) => {
    if (req.session) {
        return !!req.session.user;
    }
    return false;
};

// Check if the user is logged in, if its true, the user will be redirected into the next page
exports.checkUser = (req, res, next) => {
    if (!exports.isLoggedIn(req)) {
        res.sendStatus(404);
    } else {
        next();
    }
};
