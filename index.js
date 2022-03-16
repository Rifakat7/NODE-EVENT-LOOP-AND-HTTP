const express = require("express");
const app = express();

app.listen(5000,()=>{

    console.log("listening at port 5000");
})

app.get("/home",function(req,res){

    res.send("Hello");
});

app.get("/books",function(req,res){
    res.send([
        {
            "name":"The Secret",
            "id":1
        },
        {
            "name":"The age of water",
            "id":2
        },
        {
            "name":"Theory of everything",
            "id":3
        },
        {
            "name":"The age of the earth",
            "id":4
        }
    ]);
});