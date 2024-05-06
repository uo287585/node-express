const express = require("express")
let app = express()

//localhost:8081/gato.jpg
app.use(express.static("public"))

app.get("/", (req,res)=>{
    res.send("Hello")
})

app.listen(8081, ()=>{
    console.log("Server in 8081")
})