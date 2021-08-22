const express = require("express");
const { getApplicantList, createApplicant, getApplicantDetail, updateApplicant, removeApplicant } = require("../controllers/applicant.controllers");
const { signIn } = require("../controllers/auth.controllers");
const { checkExist } = require("../middlewares/check-exist.middlewares");
const {Applicant} = require("../models")

const applicantRouter = express.Router();

//get list of applicants account
applicantRouter.get("/", getApplicantList)

//get applicant by id
applicantRouter.get("/:id", checkExist(Applicant) , getApplicantDetail);

//create new applicant
applicantRouter.post("/", createApplicant)

//update applicant
applicantRouter.put("/:id", checkExist(Applicant), updateApplicant)

//delete applicant
applicantRouter.delete("/:id", checkExist(Applicant), removeApplicant)


applicantRouter.post("/sign-in", signIn(Applicant))

module.exports = {
    applicantRouter
}