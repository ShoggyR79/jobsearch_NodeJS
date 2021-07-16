const express = require("express");
const { getDetailUser } = require("../../project-movie/controllers/user.controllers");
const { getApplicantList, createApplicant } = require("../controllers/applicant.controllers");
const { checkExist } = require("../middlewares/check-exist.middlewares");
const {Applicant} = require("../models")

const applicantRouter = express.Router();

//get list of applicants account
applicantRouter.get("/", getApplicantList)

//get applicant by id
applicantRouter.get("/:id", checkExist(Applicant) ,getDetailUser);

//create new user
applicantRouter.post("/", createApplicant)


module.exports = {
    applicantRouter
}