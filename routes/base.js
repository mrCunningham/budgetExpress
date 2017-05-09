var express = require('express');
var router = express.Router();

// Controller Module req's
var category_controller = require('../controllers/categoryController');
var transaction_controller = require('../controllers/transactionController');
var account_controller = require('../controllers/accountController');
var budget_controller = require('../controllers/budgetController');

        /// Budget Routes ///

// Index
router.get('/', budget_controller.index);

// Create budget GET request
router.get('/budget/create', budget_controller.budget_create_get);

// Create budget POST request
router.post('/budget/create', budget_controller.budget_create_post);

// Delete budget GET request
router.get('/budget/:id/delete', budget_controller.budget_delete_get)

// Delete budget POST request
router.post('/budget/:id/delete', budget_controller.budget_delete_post);

// Update budget GET request
router.get('/budget/:id/update', budget_controller.budget_update_get);

// Update budget POST request
router.post('/budget/:id/update', budget_controller.budget_update_post);

// GET request for single budget
router.get('/budget/:id', budget_controller.budget_detail);

// GET request for all budgets
router.get('/budgets', budget_controller.budget_list);


        /// Account Routes ///

// Create account GET request
router.get('/account/create', account_controller.account_create_get);

// Create account POST request
router.post('/account/create', account_controller.account_create_post);

// Delete account GET request
router.get('/account/:id/delete', account_controller.account_delete_get)

// Delete account POST request
router.post('/account/:id/delete', account_controller.account_delete_post);

// Update account GET request
router.get('/account/:id/update', account_controller.account_update_get);

// Update account POST request
router.post('/account/:id/update', account_controller.account_update_post);

// GET request for single account
router.get('/account/:id', account_controller.account_detail);

// GET request for all accounts
router.get('/accounts', account_controller.account_list);



        /// transaction Routes ///

// Create transaction GET request
router.get('/transaction/create', transaction_controller.transaction_create_get);

// Create transaction POST request
router.post('/transaction/create', transaction_controller.transaction_create_post);

// Delete transaction GET request
router.get('/transaction/:id/delete', transaction_controller.transaction_delete_get)

// Delete transaction POST request
router.post('/transaction/:id/delete', transaction_controller.transaction_delete_post);

// Update transaction GET request
router.get('/transaction/:id/update', transaction_controller.transaction_update_get);

// Update transaction POST request
router.post('/transaction/:id/update', transaction_controller.transaction_update_post);

// GET request for single transaction
router.get('/transaction/:id', transaction_controller.transaction_detail);

// GET request for all transactions
router.get('/transactions', transaction_controller.transaction_list);


        /// category Routes ///

// Create category GET request
router.get('/category/create', category_controller.category_create_get);

// Create category POST request
router.post('/category/create', category_controller.category_create_post);

// Delete category GET request
router.get('/category/:id/delete', category_controller.category_delete_get)

// Delete category POST request
router.post('/category/:id/delete', category_controller.category_delete_post);

// Update category GET request
router.get('/category/:id/update', category_controller.category_update_get);

// Update category POST request
router.post('/category/:id/update', category_controller.category_update_post);

// GET request for single category
router.get('/category/:id', category_controller.category_detail);

// GET request for all categories
router.get('/categories', category_controller.category_list);

module.exports = router;