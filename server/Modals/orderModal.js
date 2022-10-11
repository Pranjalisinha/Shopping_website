const mongoose=require("mongoose")
const OrderSchema=new mongoose.Schema({
    Email:String,
    Order:Array,
    Payment:String,
      
})
const OrderModel=mongoose.model("Order_add",OrderSchema)
module.exports=OrderModel