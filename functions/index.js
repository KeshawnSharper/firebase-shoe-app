const express = require('express');
const helmet = require('helmet')
const server = express();
const cors = require("cors")
const app = express();
const functions = require('firebase-functions')
const loginRouter = require("./router/authRouters/login-router")
let userRouter = require('./router/user-router')
let sneakerRouter = require("./router/sneaker-router")
let orderRouter = require("./router/order-router")
server.use(helmet());
server.use(express.json());

app.use(cors({origin:true}))



app.get('/', (req, res) => {
    res.send('helljkfreol')
});
app.use('/login',loginRouter);
app.use('/users',userRouter);
app.use('/sneakers',sneakerRouter);
app.use('/orders',orderRouter);


exports.expressApi = functions.https.onRequest(app)