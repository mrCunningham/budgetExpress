var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = Schema(
    {
        name: {type: String, required: true},
    }
);

CategorySchema.virtual('url').get(function() {
    return '/category/' + this._id;
});

module.exports = mongoose.model('Category', CategorySchema);