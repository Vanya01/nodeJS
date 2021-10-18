const {Schema, model} = require('mongoose');

const oAuthSchema = new Schema({
    accessToken: {
        type: String,
        required: true,
        trim: true
    },
    refreshToken: {
        type: String,
        required: true,
        trim: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
}, {timestamps: true});

module.exports = model('o-auth', oAuthSchema);
