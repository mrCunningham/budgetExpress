var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AccountSchema = Schema(
    {
        name: {type: String, required: true},
        balance: {type: Number, required: true},
    }
);

AccountSchema.virtual('url').get(function() {
    return '/base/account/' + this._id;
});

module.exports = mongoose.model('Account', AccountSchema);