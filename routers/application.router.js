const express = require("express");
const { createApplication, updateResume, deleteApplication, getApplicationById, getOwnApplications } = require("../controllers/application.controllers");
const { checkApplicationBelongs, checkExist, checkAlreadyApplied } = require("../middlewares/check-exist.middlewares");
const { authenticate, authorize } = require("../middlewares/verify-token.middlewares");
const { Job, Application } = require("../models");
const { uploadFileSingle } = require("../upload/upload-file.middlewares");

const applicationRouter = express.Router();

//get own applications
applicationRouter.get("/", authenticate, authorize(["APPLICANT", "ADMIN"]), getOwnApplications)

//get application by id (must be related to that application);
applicationRouter.get("/:id", authenticate, authorize(["APPLICANT", "ADMIN", "COMPANY"]), checkExist(Application), checkApplicationBelongs, getApplicationById)

//apply for job
applicationRouter.post("/apply/:id", authenticate, authorize(["APPLICANT", "ADMIN"]), checkExist(Job), checkAlreadyApplied, uploadFileSingle(), createApplication)

//update resume
applicationRouter.put("/apply/update-resume/:id", authenticate, authorize(["APPLICANT", "ADMIN"]), checkExist(Application), checkApplicationBelongs, uploadFileSingle(), updateResume)

// delete application
applicationRouter.delete("/:id", authenticate, authorize(["APPLICANT", "ADMIN", "COMPANY"]), checkExist(Application), checkApplicationBelongs, deleteApplication)

module.exports = {
    applicationRouter
}