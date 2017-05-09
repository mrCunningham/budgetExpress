var Category = require('../models/Category');

// List of all categories
exports.category_list = function(req, res, next) {
    Category.find({}, 'name')
        .exec(function(err, list_categories) {
            if (err) { return next(err); }
            res.render('category_list', { title: 'Category List', category_list: list_categories });
        });
};

// Detail for specific category
exports.category_detail = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// category create form on GET
exports.category_create_get = function(req, res, next) {
    res.render('category_form', { title: 'Create Category'});
};

// category create on POST
exports.category_create_post = function(req, res, next) {
    
    //Check name not empty
    req.checkBody('name', 'Category name required').notEmpty();

    //Trim and escape name field
    req.sanitize('name').escape();
    req.sanitize('name').trim();

    //Run validators
    var errors = req.validationErrors();

    //Create a category object
    var category = new Category(
        {
            name: req.body.name
        }
    );

    if (errors) {
        res.render('category_form', { title: 'Create Category', category: category, errors: errors });
    return;
    }
    else {
        Category.findOne({ 'name': req.body.name })
            .exec( function(err, found_category) {
                console.log('found_category: ' + found_category);
                if (err) { return next(err); }

                if (found_category) {
                    //If exists redirect to detail page
                    res.redirect(found_category.url);
                }
                else{
                    category.save(function(err) {
                        if (err) { return next(err); }

                        res.redirect(category.url);
                    });
                }
            });
    }
};

// category delete form on GET
exports.category_delete_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// category delete on POST
exports.category_delete_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// category update form on GET
exports.category_update_get = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};

// category update on POST
exports.category_update_post = function(req, res, next) {
    res.send('NOT IMPLEMENTED');
};