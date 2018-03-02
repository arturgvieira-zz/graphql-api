const mongoose = require('mongoose');
const Message = require('./model/message');

mongoose.connect(
    'connection string here'
);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to DB.');
});

// The resolvers
module.exports = {
    Query: {
        hello: async (obj, args, context, info) => {
            const result = await Message.find().limit(1);
            return result[0].message;
        }
    },
    Mutation: {
        writeHello: (obj, args, context, info) =>
            new Message({ message: args.message }).save()
    }
};
