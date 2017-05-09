var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TransactionSchema = Schema(
    {
        name: {type: String, required: true},
        amount: {type: Number, requires: true},
        type: {type: String, enum: ['Debit', 'Credit'], default: 'Debit', required: true},
        recurrence: {type: String, enum: ['Once', 'Weekly', 'Bi-Weekly', 'Monthly'], default: 'Once', required: true},
        recurDate: {type: Date, required: true},
        category: {type: Schema.ObjectId, ref: 'Category'},
        account: {type: Schema.ObjectId, ref: 'Account'}
    }
);

TransactionSchema.virtual('url').get(function() {
    return '/base/transaction/' + this._id;
});

module.exports = mongoose.model('Transaction', TransactionSchema);