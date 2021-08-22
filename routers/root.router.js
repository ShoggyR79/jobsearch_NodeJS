const express = require("express");
const { adminRouter } = require("./admin.router");
const { applicantRouter } = require("./applicant.router");
const { applicationRouter } = require("./application.router");
const { companyRouter } = require("./company.router");
const { jobManageRouter } = require("./job-management.router");
const { profileRouter } = require("./profile.router");
const rootRouter = express.Router();

rootRouter.use("/applicant", applicantRouter);
rootRouter.use("/company", companyRouter);
rootRouter.use("/admin", adminRouter)
rootRouter.use("/job", jobManageRouter)
rootRouter.use("/application-management", applicationRouter)
rootRouter.use("/profile", profileRouter)


module.exports = {
    rootRouter
}