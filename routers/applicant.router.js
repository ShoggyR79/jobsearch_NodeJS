const express = require("express");
const { getApplicantList, createApplicant, getApplicantDetail, updateApplicant, removeApplicant, uploadAvatar, getApplicantListPaginate } = require("../controllers/applicant.controllers");
const { signIn } = require("../controllers/auth.controllers");
const { checkExist, checkEmail, checkChangePerms } = require("../middlewares/check-exist.middlewares");
const { authenticate, authorize } = require("../middlewares/verify-token.middlewares");
const { Applicant } = require("../models");
const { uploadImageSingle } = require("../upload/upload-file.middlewares");

const applicantRouter = express.Router();

//upload avatar
applicantRouter.post("/upload-avatar", authenticate, uploadImageSingle(), uploadAvatar)

//get applicants with pagination
applicantRouter.get("/paginate", getApplicantListPaginate)

//get list of applicants account
applicantRouter.get("/", getApplicantList)

//get applicant by id
applicantRouter.get("/:id", checkExist(Applicant), getApplicantDetail);

//create new applicant
applicantRouter.post("/register", checkEmail(Applicant), createApplicant)

//update applicant
applicantRouter.put("/:id", checkExist(Applicant), authenticate, authorize(["ADMIN","APPLICANT"]), checkChangePerms, updateApplicant)

//delete applicant
applicantRouter.delete("/:id", checkExist(Applicant), authenticate, authorize(["ADMIN","APPLICANT"]), checkChangePerms, removeApplicant)


applicantRouter.post("/sign-in", signIn(Applicant))



module.exports = {
    applicantRouter
}