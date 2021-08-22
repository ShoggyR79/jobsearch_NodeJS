const express = require("express");
const { rootRouter } = require("./routers/root.router");
const { developement } = require("./config/config.json")
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json())

app.use("/api", rootRouter)

const port = process.env.PORT || development.PORT;

    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
