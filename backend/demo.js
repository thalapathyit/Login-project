const express=require("express")
const cors=require("cors")
var app=express()
app.use(cors())
app.listen(5000,function()
{
  console.log("SERVER STARTED")
})
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.post("/",function(req,res)
{
  var fname="jhon"
  var pname="123"
  if(fname=== req.body.username && pname==req.body.password)
    {

  res.send(true)
    }
    else{
      res.send(false)
    }
})