var mongoose = require('mongoose');
mongoose.models = {};
mongoose.modelSchemas = {};
var Schema = mongoose.Schema;

var TransactionSchema = Schema(
    {
        name: {type: String, required: true},
        account: {type: Schema.ObjectId, ref: 'Account'},
        category: {type: Schema.ObjectId, ref: 'Category'},
        type: {type: String, enum: ['Debit', 'Credit'], default: 'Debit', required: true},
        amount: {type: Number, required: true},
        recurrence: {type: String, enum: ['Once', 'Weekly', 'Bi-Weekly', 'Monthly'], default: 'Once', required: true},
        recurDate: {type: Date, required: true}
    }
);

TransactionSchema.virtual('url').get(function() {
    return '/base/transaction/' + this._id;
});

module.exports = mongoose.model('Transaction', TransactionSchema);