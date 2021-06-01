const { Schema, model } = require('mongoose');

const StadiumSchema = Schema({
    key: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
    ,
    capacity: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    timezone: {
        type: String,
        required: true
    },
    tournament: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    }
});

StadiumSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Stadiums', StadiumSchema);