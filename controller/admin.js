const path = require('path');
const expenses =require('../model/expenses');

exports.addexpense = (req,res,next)=>{
   const amount = req.body.amount;
   const description = req.body.description;
   const category = req.body.category;
   expenses.create({
      amount : amount,
      description : description,
      category: category
   })
   .then((response)=>{
      console.log('updated successfully');
   })
   .catch(err => console.log(err));
}

exports.getallexpenses = (req,res,next)=>{
   expenses.findAll()
   .then((data)=>{
      res.json(data);
   })
   .catch(err=> console.log(err));
}

exports.deleteExpense = (req,res,next) =>{
   let expenseid = req.params.expenseId;
   console.log(expenseid);
   expenses.findOne({where : { id : expenseid }})
   .then((expense)=> {
      expense.destroy();
      console.log("expense deleted");
   })
   .catch(err=> console.log(err));
}