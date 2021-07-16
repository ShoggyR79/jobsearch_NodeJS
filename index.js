const express = require("express");
const { rootRouter } = require("./routers/root.router");
const app = express()
app.use(express.json())

app.use("/api", rootRouter)

const port = 7000;
app.listen(port, ()=>{
    console.log(`App listening on port ${port}`)
})
