//main file
const express=require('express');

const router=require('./route')

require('dotenv').config();
const app=express();
app.use(express.json());
const mongoose=require('mongoose');



mongoose.connect(process.env.URL,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(con=>{console.log("connnected")});

const cors=require('cors');

app.use(cors({
    origin:["http://localhost:3000"]
}));

app.use(router)

app.listen(8000,()=>{
    console.log("server running");
})
