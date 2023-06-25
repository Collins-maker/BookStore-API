const express = require('express')


require('dotenv').config();

const app = express();
app.use(express.json())
app.set("view engine", "ejs");
const bookrouter = require('./src/routes/bookroutes');

const memberrouter = require('./src/routes/memberroutes');

const loansRouter = require('./src/routes/loansRoutes');

const authenticationRouter = require('./src/routes/authenticationRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello, Welcome to our Bookstore API")
})



app.use(memberrouter);

app.use(bookrouter);

app.use(loansRouter);

app.use(authenticationRouter);




const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is loading ${port}`)
});