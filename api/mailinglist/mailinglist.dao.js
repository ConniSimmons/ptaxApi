<<<<<<< HEAD
const mongoose = require('mongoose');
const schema = require('./mailinglist.model');

schema.statics = {
    create: function(data, callback)
    {
        const document = new this(data);
        document.save(callback)
    },
    get: function(query, callback)
    {
        this.find(query, callback);
    },
    update: function(query, data, callback)
    {
        this.findOneAndUpdate(query, {$set: data}, {new: true}, callback);
    },
    delete: function(query, callback)
    {
        this.findOneAndDelete(query, callback);
    }
}

const model = mongoose.model('Mailinglist', schema);
=======
const mongoose = require('mongoose');
const schema = require('./mailinglist.model');

schema.statics = {
    create: function(data, callback)
    {
        const document = new this(data);
        document.save(callback)
    },
    get: function(query, callback)
    {
        this.find(query, callback);
    },
    update: function(query, data, callback)
    {
        this.findOneAndUpdate(query, {$set: data}, {new: true}, callback);
    },
    delete: function(query, callback)
    {
        this.findOneAndDelete(query, callback);
    }
}

const model = mongoose.model('Mailinglist', schema);
>>>>>>> 6a08c7037774f91d9b02a60efd97bb1ebc6d4296
module.exports = model;