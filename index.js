const express = require("express");
const { rootRouter } = require("./routers/root.router");
const path = require("path")
const app = express()
const cors = require('cors');
const { development } = require("./config/config.json");

//setup static file
const pathPublicDirectory = path.join(__dirname, "./public");

app.use("/public", express.static(pathPublicDirectory))


app.use(cors());
app.use(express.json())

app.use("/api", rootRouter)


const port = process.env .PORT || development.PORT;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
