const mongoose = require('mongoose');

const message = mongoose.Schema({
    message: String
});

module.exports = mongoose.model('Message', message);
