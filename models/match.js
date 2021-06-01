const { Schema, model } = require('mongoose');

const MatchSchema = Schema({
    num: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    local: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: [false, 'El id del local es un campo obligatorio ']
    },
    visit: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: [false, 'El id del visitante es un campo obligatorio ']
    },
    score1: {
        type: Number,
        required: true
    },
    score2: {
        type: Number,
        required: true
    },
    score1i: {
        type: Number,
        required: true
    },
    score2i: {
        type: Number,
        required: true
    },
    score1et: {
        type: Number,
        required: false
    },
    score2et: {
        type: Number,
        required: false
    },
    score1p: {
        type: Number,
        required: false
    },
    score2p: {
        type: Number,
        required: false
    },
    goals1: [GoalSchema],
    goals2: [GoalSchema],
    group: {
        type: String,
        required: true
    },
    stadium: {
        type: Schema.Types.ObjectId,
        ref: 'Stadium',
        required: [false, 'El id del estadio es un campo obligatorio ']
    },
    city: {
        type: String,
        required: true
    },
    timezone: {
        type: String,
        required: true
    }
});

MatchSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
});

module.exports = model('Match', MatchSchema);