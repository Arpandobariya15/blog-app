const express = require("express");
const app = express();
const cors = require("cors");
const blogs = require("./Routes/blogs")
require("dotenv").config();
require("./Connection/connection")

app.use(cors());
app.use(express.json());

// http:localhost:1000/api/v1/post
app.use("/api/v1",blogs)


app.get("/",(req,res)=>{
    res.send("hello world")
})
app.listen(process.env.PORT, () => {
    console.log(`server running at : ${process.env.PORT}`);
});
