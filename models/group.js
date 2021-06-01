const { Schema, model } = require('mongoose');

const GroupSchema = Schema({
    name: {
        type: String,
        required: true
    },
    tournament: {
        type: String,
        required: true
    }
});

GroupSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Group', GroupSchema);