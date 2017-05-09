var Account = require('../models/account');

// List of all accounts
exports.account_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// Detail for specific account
exports.account_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// account create form on GET
exports.account_create_get = function(req, res, next) {
    res.render('account_form', { title: 'Create Account' });
};

// account create on POST
exports.account_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// account delete form on GET
exports.account_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// account delete on POST
exports.account_delete_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// account update form on GET
exports.account_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// account update on POST
exports.account_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};