const { Schema, model } = require('mongoose');

const TeamSchema = Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    continent: {
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

TeamSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Team', TeamSchema);