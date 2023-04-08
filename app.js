const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const Sequelize = require('sequelize');
const expenses = require('./model/expenses');

const cors = require('cors');

const adminRoutes =  require('./routes/admin');

app.use(bodyparser.json( {extended : false} ));

app.use(cors());

app.use('/admin',adminRoutes);


expenses.sync()
.then((response)=>{
    app.listen(2000);
})
.catch(err => console.log(err));