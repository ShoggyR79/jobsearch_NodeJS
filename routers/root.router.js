const express = require("express");
const { adminRouter } = require("./admin.router");
const { applicantRouter } = require("./applicant.router");
const { companyRouter } = require("./company.router");
const rootRouter = express.Router();

rootRouter.use("/applicant", applicantRouter);
rootRouter.use("/company", companyRouter);
rootRouter.use("/admin", adminRouter)

module.exports = {
    rootRouter
}