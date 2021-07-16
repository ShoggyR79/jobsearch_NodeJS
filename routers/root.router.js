const express = require("express");
const { applicantRouter } = require("./applicant.router");
const rootRouter = express.Router();

rootRouter.use("/applicant", applicantRouter)

module.exports = {
    rootRouter
}