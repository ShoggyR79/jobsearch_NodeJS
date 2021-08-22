const express = require("express");
const { addWorkHistory, updateWorkHistory, removeWorkHistory } = require("../../controllers/profile-controllers/workHistory.controllers");
const { checkProfileExists, checkExist, checkSubTabBelongs } = require("../../middlewares/check-exist.middlewares");
const { authenticate, authorize } = require("../../middlewares/verify-token.middlewares");
const {WorkHistory} = require("../../models")

const workHistoryRouter = express.Router()

//add new work history to profile
workHistoryRouter.post("/", authenticate, authorize(["APPLICANT"]), checkProfileExists, addWorkHistory)

//update existing work history 
workHistoryRouter.put("/:id", authenticate, authorize(["APPLICANT", "ADMIN"]), checkExist(WorkHistory), checkSubTabBelongs(WorkHistory), updateWorkHistory)

//delete work history
workHistoryRouter.delete("/:id", authenticate, authorize(["APPLICANT", "ADMIN"]), checkExist(WorkHistory), checkSubTabBelongs(WorkHistory), removeWorkHistory)



module.exports = {
    workHistoryRouter
}