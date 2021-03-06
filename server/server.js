const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const authUsers = require('./AuthUsers/index');

//-----------------------MIDDLE WARES---------------------------------------------//
app.use(express.static(path.join(__dirname, '../find-job-client/dist/find-job-client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev')); //log all the requests to the console
app.use(authUsers)
//--------------------------------------------------------------------------------//

//This route to handling all the request above
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '../find-job-client/dist/find-job-client/index.html')))
});

const PORT = process.env.PORT || 3000;
if (!module.parent) {
    app.listen(PORT, () => {
        console.log(`Its working on port: ${PORT}`);
    });
}

module.exports = app;