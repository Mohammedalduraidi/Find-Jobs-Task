const mongoose = require('mongoose');
mongoose.connect('mongodb://find-jobs:Jackel12@ds215370.mlab.com:15370/find-jobs');
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', () => {
    console.log('mongoose connection error');
});

db.once('open', () => {
    console.log('mongoose connected successfully');
});

let Schema = mongoose.Schema; // Create a mongoose schema 

let pmSchema = new Schema({ //project manager schema
    username: { type: String },
    email: { type: String },
    password: { type: String }
})

let bmSchema = new Schema({ //business manager schema
    username: { type: String },
    email: { type: String },
    password: { type: String }
})
bmSchema = mongoose.model('bmSchema', bmSchema)
pmSchema = mongoose.model('pmSchema', pmSchema)

module.exports.pmSchema = pmSchema
module.exports.bmSchema = bmSchema
