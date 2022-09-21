const express=require("express");
const app=express();
require("./db/dbConnection");
const monmodel=require("./models/employees");
app.use(express.json());

//post

app.post("/post",async(req,res)=>{
    console.log("inside post function");

    const data=new monmodel({
        ename:req.body.ename,
        age:req.body.age,
        loc:req.body.loc,
        id:req.body.id
        
    })
    const val=await data.save();
    res.json(val);
})

app.listen(3000,()=>{
    console.log("on port 3000")
})

//get
app.get("/fetch/:id",function(req,res){
    fetchid=req.params.id;
    monmodel.find(({id:fetchid}),function(err,val){
           res.send(val);
    })
})

//put

app.put("/update/:ename",async(req,res)=>{
     let upename=req.params.ename;//corresponds to url
     let upid=req.body.id;//corresponds to body
     let upage=req.body.age;//corresponds to body

     monmodel.findOneAndUpdate({ename:upename},{$set:{id:upid,age:upage}},{new:true},(err,data)=>{
        if(data==null)
        {
            res.send("nothing found")
        }else{
            res.send(data)
        }
     })
})

//delete

app.delete("/del/:id",function(req,res){
    let delid=req.params.id;
    monmodel.findOneAndDelete({id:delid}),function(err,data){
        if(data==null)
        {
            res.send("wrong id")
        }else{
         
        
         res.send(data)
    }
}

})