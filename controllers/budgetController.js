var Budget = require('../models/budget');
var Account = require('../models/account');
var async = require('async');

// Index
exports.index = function(req, res, next) {
    res.render('index', { title:'Budget Time'});
};

// List of all budgets
exports.budget_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// Detail for specific budget
exports.budget_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// budget create form on GET
exports.budget_create_get = function(req, res, next) {
    // Get all accounts
    async.parallel({
        accounts: function(callback) {
            Account.find(callback);
        }
    }, (err, results) => {
        if (err) { return next(err); }
        res.render('budget_form', { title: 'Create a budget', accounts: results.accounts});
    });
};

// budget create on POST
exports.budget_create_post = function(req, res, next) {
    // Check fields on POST
    req.checkBody('name', 'Budget name required').notEmpty();

    //Trim and escape name field
    req.sanitize('name').escape();
    req.sanitize('name').trim();

    //Run validators
    var errors = req.validationErrors();

    var budget = new Budget (
        {
            name: res.body.name,
            accounts: (typeof req.body.account==='undefined') ? [] : req.body.account.split(",")
        }
    );

    console.log ('Budget' + budget);
    
};

// budget delete form on GET
exports.budget_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// budget delete on POST
exports.budget_delete_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// budget update form on GET
exports.budget_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// budget update on POST
exports.budget_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};