const mongoose = require('mongoose');
const Message = require('./model/message');

mongoose.connect(
    'mongodb://app:ev92ABCkRtxlCGQK@cluster0-shard-00-00-e7f4u.mongodb.net:27017,cluster0-shard-00-01-e7f4u.mongodb.net:27017,cluster0-shard-00-02-e7f4u.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
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
