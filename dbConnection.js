const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/emp-data",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err)
    {
        console.log("connected to db")
    }else{
        console.log("error")
    }
    console.log("name")
})