const { Schema, model } = require('mongoose');

const GoalSchema = Schema({
    name: {
        type: String,
        required: true
    },
    minute: {
        type: Number,
        required: true
    },
    score1: {
        type: String,
        required: true
    },
    score2: {
        type: String,
        required: true
    },
    penalty: {
        type: Boolean,
        required: false
    },
    offset: {
        type: Number,
        required: false
    }
});

GoalSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Goal', GoalSchema);