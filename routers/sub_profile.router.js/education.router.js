const express = require("express");
const { addEducation, updateEducation, removeEducation } = require("../../controllers/profile-controllers/education.controllers");
const { checkProfileExists, checkExist, checkSubTabBelongs } = require("../../middlewares/check-exist.middlewares");
const { authenticate, authorize } = require("../../middlewares/verify-token.middlewares");
const { Education } = require("../../models")
const educationRouter = express.Router()

//add new education tab to profile
educationRouter.post("/", authenticate, authorize(["APPLICANT"]), checkProfileExists, addEducation)

//update exisitng education tab
educationRouter.put("/:id", authenticate, authorize(["APPLICANT", "ADMIN"]), checkExist(Education), checkSubTabBelongs(Education), updateEducation)

//delete education tab
educationRouter.delete("/:id", authenticate, authorize(["APPLICANT", "ADMIN"]), checkExist(Education), checkSubTabBelongs(Education), removeEducation)

module.exports = {
    educationRouter
}