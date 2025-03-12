import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';

server = express();
// server.use(cors());

server.get('/user/username',(req,res)=>
{

}
)

dotenv.config(); 
server.listen(process.env.port,console.log(`server started on port number : ${process.env.port}`));