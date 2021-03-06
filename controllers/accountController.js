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
    // Check fields on POST
    var schema = {
        'name' : {
            notEmpty : true,
            errorMessage: 'Invalid Name'
        },
        'balance': { 
            isCurrency : true,
            errorMessage : 'Invalid Balance'
         }
    };

    req.checkBody(schema);

    // Trim and sanitize the fields
    req.sanitize('name').escape();
    req.sanitize('name').trim();

    req.sanitize('balance').escape();
    req.sanitize('balance').trim();

    // Run validators
    var errors = req.validationErrors();

    // Create new account object
    var account = new Account(
        {
            name: req.body.name,
            balance: req.body.balance

        }
    );

    if (errors) {
        res.render('account_form', { title: 'Create Account', account: account, errors: errors});
        return;
    }
    else {
        Account.findOne({ 'name': req.body.name })
            .exec( (err, found_account) => {
                console.log('found_account ' + found_account);
                if (err) { return next(err); }

                if (found_account) {
                    res.redirect(found_account.url);
                }
                else {
                    account.save((err) => {
                        if (err) { return next(err); }

                        res.redirect(account.url);
                    });
                }
            });
    }

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