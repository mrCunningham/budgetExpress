var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BudgetSchema = Schema(
    {
        name: {type: String, required: true},
        accounts: [{type: Schema.ObjectId, ref: 'Account'}]
    }
);

BudgetSchema.virtual('url').get(function() {
    return '/budget/' + this._id;
});

module.exports = mongoose.model('Budget', BudgetSchema);