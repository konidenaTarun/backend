// import http from 'http';
// import { json } from 'stream/consumers';
// const server =http.createServer((req,res) => {
//     console.log(req.method);
//     if(req.url=="/user") {
//         res.writeHead(200,{"content-Type" : "application/json"});
//         res.end(JSON.stringify({name:"thub"}))
//     } else{
//         res.writeHead(200,{"content-Type" : "text/plain"});
//         res.end("Hello this is from Backend")
//     }

// });
// server.listen(7007 , () =>{
//     console.log(`server running at port ${7007}`)
// }); 

// import express from 'express';
// const app= express();
// app.get('/users' ,(req,res) =>{
//     res.send("Heldgjm,vczdn");
// })
// app.get('/get-users' , (req,res) => {
//     res.send("Hello this is backend");
// })
// app.listen(7007 ,() =>{
//     console.log("server running at port 7007")
// });

import express from 'express';
import router from './Router/StudentRouter.js';

const app = express();
app.use(express.json())

app.get("/", (req,res)=>{
    
});
app.post("/user" ,(req, res) =>{
    
    res.send("data is added");
});
app.listen(4000,() =>{
    console.log("data get")
});
