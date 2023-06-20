const express = require('express')
// const router= require('./src/routes/bookroutes')

require('dotenv').config();

const app = express();
app.use(express.json())

const bookrouter = require('./src/routes/bookroutes');

const memberrouter = require('./src/routes/memberroutes')

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, Welcome to our Bookstore API")
})



app.use(memberrouter);

app.use(bookrouter);




const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server is loading ${port}`)
});