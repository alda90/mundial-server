const { Schema, model } = require('mongoose');

const FixturesSchema = Schema({
    name: {
        type: String,
        required: true
    },
    tournament: {
        type: String,
        required: true
    }
});

FixturesSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Fixtures', FixturesSchema);