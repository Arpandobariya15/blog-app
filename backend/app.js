const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("hello world")
})
app.listen(1000, () => {
    console.log("server running");
});
