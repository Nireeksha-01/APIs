const mongoose=require("mongoose");
const sch={
    ename:String,
    age:Number,
    loc:String,
    id:Number,
    std:Number,
    aid:Number,
    pid:Number
    
    
}
const monmodel=mongoose.model("employees",sch)
module.exports=monmodel;