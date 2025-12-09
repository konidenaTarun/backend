import express from 'express';

const app = express();
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("Data mg");
});
app.post("/user" ,(req, res) =>{
    console.log(req.body);
    res.send("data is added");
});
app.put("/user-add" ,(req,res) =>{
    console.log(req.body);
    res.send("getting data");
});
app.delete("/user-delete" ,(req,res) =>{
    console.log(req.body);
    res.send("delete data");
});
app.listen(4000,() =>{
    console.log("data get")
});
