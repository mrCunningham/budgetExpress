var Budget = require('../models/budget');

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
    res.send('NOT IMPLEMENTED');
};

// budget create on POST
exports.budget_create_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
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