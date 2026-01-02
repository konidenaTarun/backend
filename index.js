// // import http from 'http';
// // import { json } from 'stream/consumers';
// // const server =http.createServer((req,res) => {
// //     console.log(req.method);
// //     if(req.url=="/user") {
// //         res.writeHead(200,{"content-Type" : "application/json"});
// //         res.end(JSON.stringify({name:"thub"}))
// //     } else{
// //         res.writeHead(200,{"content-Type" : "text/plain"});
// //         res.end("Hello this is from Backend")
// //     }

// // });
// // server.listen(7007 , () =>{
// //     console.log(`server running at port ${7007}`)
// // }); 

// // import express from 'express';
// // const app= express();
// // app.get('/users' ,(req,res) =>{
// //     res.send("Heldgjm,vczdn");
// // })
// // app.get('/get-users' , (req,res) => {
// //     res.send("Hello this is backend");
// // })
// // app.listen(7007 ,() =>{
// //     console.log("server running at port 7007")
// // });

// import express from 'express';
// import mongoose from 'mongoose';
// import router from './Router/StudentRouter.js';
// import cors from 'cors';

// mongoose.connect("mongodb://localhost:27017/").then(()=> console.log("DB Connected"))
// .catch(error => console.log(error));
// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use('/' , router);

// app.get("/user" ,(req, res) =>{
//     res.send("data is add");
// });


// app.listen(4000,() =>{
//     console.log("data get")
// });



import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRouter from './Routers/StudentsRouters.js';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://bhanumanthu450_db_user:hanu123@cluster0.ypr52oi.mongodb.net/").then(() => console.log("db connected"))
.catch((error) => console.log(error));

app.use('/', studentRouter);
app.get('/users', (req, res) => {
    console.log("hello this is");
    res.send("hello this is from backend");
})

app.listen(2885, () => {
    console.log("server running at port 2885")
});