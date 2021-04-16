const express = require('express')
const app = express()
app.use(express.json());

let fun1=(req,res,next)=>{
  req.body.sname="sharma";
  req.body.result="hello";
 next();

}
let fun2=(req,res,next)=>{
  req.body.result=req.body.result +  " rosh";
  next();

}
let fun3=(req,res,next)=>{
  req.body.result=req.body.result +  " how";
  next();
}
let fun4=(req,res,next)=>{
  req.body.result=req.body.result + " are";
  next();
}
let fun5=(req,res,next)=>{
  req.body.result=req.body.result + " you ?";
  next();
}
app.post('/s',fun1,fun2,fun3,fun4, fun5,function (req, res) {
  let n=req.body.sname;
  let sn=req.body.sname;
  let r=req.body.result;
  res.send({
    msg:r
  });
})
 let port=3000;
app.listen(port,function(){
    console.log(`server is running on port ${port}`);
})