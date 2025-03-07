const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const depositSchema = Schema({
    type:{type:String},
    accountId:{type:String},
    amount:{type:Number},
    date:{type:Date},
})

const Deposit = mongoose.model("Deposit", depositSchema);
module.exports = Deposit;