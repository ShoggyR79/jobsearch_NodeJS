const express = require('express')
const { authenticate, authorize } = require('../middlewares/verify-token.middlewares')
const { checkExist, checkJobBelongs } = require('../middlewares/check-exist.middlewares')
const { Job } = require("../models")
const { postJob, getPostedJobs, updateJob, deleteJob, getAllJobs, getJobById, getJobsByCompany, getApplications, searchJob, getJobPaginate } = require('../controllers/jobs.controllers')
const jobManageRouter = express.Router()


jobManageRouter.get("/search/", searchJob)

///Get all job with pagination
jobManageRouter.get("/paginate", getJobPaginate)

//Get All Job (all companies)
jobManageRouter.get("/", getAllJobs)

// get specific job 
jobManageRouter.get("/:id", getJobById)

// get jobs by company id
jobManageRouter.get("/companyJobs/:id", getJobsByCompany)

// get applicant for that job
jobManageRouter.get("/mangage/applicants/:id", authenticate, authorize(["COMPANY", "ADMIN"]), checkExist(Job), checkJobBelongs, getApplications)

// get jobs by company using access token 
jobManageRouter.get("/mangage/companyJobs", authenticate, authorize(["COMPANY"]), getPostedJobs)

//Post Job - For Company
jobManageRouter.post("/mangage/postJob", authenticate, authorize(["COMPANY"]), postJob)

//Update Job (only for that company or if Admin)
jobManageRouter.put("/mangage/:id", authenticate, authorize(["COMPANY", "ADMIN"]), checkExist(Job), checkJobBelongs, updateJob)

//Delete Job (only for that company or if Admin)
jobManageRouter.delete("/mangage/:id", authenticate, authorize(["COMPANY", "ADMIN"]), checkExist(Job), checkJobBelongs, deleteJob)

module.exports = {
    jobManageRouter
}