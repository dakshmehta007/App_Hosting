// const express =require('express')
// const app = express()
// const mongoDB = require('./db')
// require('dotenv').config();
// const port =process.env.PORT;

// const cors = require('cors');

// // Use CORS middleware
// app.use(cors({
//   origin: 'https://effervescent-rugelach-862f50.netlify.app/' // Replace with your frontend URL
// }));

// mongoDB();

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin,X-Requested-With,Content-Type,Accept"
//     );
//     next();
// })

// app.get('/',(req,res)=>{
//     res.send(" Hello world!");
// })

// app.use(express.json());
// app.use('/api',require("./Routes/CreatUser"));
// app.use('/api',require("./Routes/DisplayData"));
// app.use('/api',require("./Routes/OrderData"));

// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}`);
// })


const express = require('express');
const app = express();
const mongoDB = require('./db');
require('dotenv').config();
const port = process.env.PORT;

const cors = require('cors');

// Use CORS middleware
app.use(cors({
  origin: 'https://dakfood.netlify.app/' // Replace with your Netlify frontend URL
}));

mongoDB();

app.get('/', (req, res) => {
  res.send("Hello world!");
});

app.use(express.json());
app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
