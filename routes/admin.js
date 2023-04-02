const express = require('express');
const router = express.Router();
const path = require('path');
const admincontroller = require('../controller/admin');

//   /admin/add-expense
router.post('/add-expense',admincontroller.addexpense);

router.get('/get-expenses',admincontroller.getallexpenses);

router.post('/delete-expense/:expenseId',admincontroller.deleteExpense);



module.exports = router;

