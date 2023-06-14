const express = require('express')

const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
res.send("Hello, Welcome to our Bookstore API")
})




port = 4000;
app.listen(port,()=>{
    console.log(`server is loading ${port}`)
});