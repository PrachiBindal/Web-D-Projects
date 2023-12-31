const express=require('express');
// const bodyParser=require('body-parser');
const app=express();
const path=require('path');
app.use(express.urlencoded({extended:true}));
app.get("/",function(req, res){
    res.sendFile(path.join(__dirname, "calculator.html"));
});
app.post("/", function (req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var sum = num1 + num2;
    res.send("The result of the calculation is " + sum);
});
app.listen(3000,function(){
    console.log("server is running at port 3000.");
    
});

