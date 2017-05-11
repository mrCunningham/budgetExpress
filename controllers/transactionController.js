var Transaction = require('../models/transaction');
var Category = require('../models/category');
var Account = require('../models/account');

var async = require('async');

// List of all transactions
exports.transaction_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// Detail for specific transaction
exports.transaction_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// transaction create form on GET
exports.transaction_create_get = function(req, res, next) {
    //Get categories and accounts
    async.parallel({
        categories: function(callback) {
            Category.find(callback);
        },
        accounts: function (callback) {
            Account.find(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        res.render('transaction_form', { title: 'Create Transaction', categories: results.categories, accounts: results.accounts });
    });
};

// transaction create on POST
exports.transaction_create_post = function(req, res, next) {
    // Check fields on POST
    var schema = {
         'amount': {
            isCurrency : true,
            errorMessage : 'Invalid amount'
         },
         'name': {
             notEmpty: true,
             errorMessage: 'Name required'
         }
    };  
    
    req.checkBody(schema);

    // Trim and sanitize the fields
    req.sanitize('amount').escape();
    req.sanitize('amount').trim();

    req.sanitize('name').escape();
    req.sanitize('name').trim();

    // Create new transaction
    var transaction = new Transaction(
        {
            name: req.body.name,
            account: req.body.account,
            category: req.body.category,
            type: req.body.type,
            amount: req.body.amount,
            recurrence: req.body.recurrence,
            recurDate: req.body.recurDate
        }
    );

    // Run validators
    var errors = req.validationErrors();

    if (errors) {
        //Get categories and accounts
        async.parallel({
        categories: function(callback) {
            Category.find(callback);
        },
        accounts: function (callback) {
            Account.find(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }

    });
        res.render('transaction_form', { title: 'Create Transaction', accounts: results.accounts, categories: results.categories, transaction: transaction, errors: errors});
    } 
    else {
        transaction.save( (err) => {
            if (err) { return next(err); }

            res.redirect(transaction.url);
        });
    }
};

// transaction delete form on GET
exports.transaction_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// transaction delete on POST
exports.transaction_delete_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// transaction update form on GET
exports.transaction_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// transaction update on POST
exports.transaction_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};