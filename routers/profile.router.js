const express = require("express");
const { updateProfile, getProfile } = require("../controllers/profile-controllers/profile.controllers");
const { checkExist, checkProfileBelongs } = require("../middlewares/check-exist.middlewares");
const { authenticate, authorize } = require("../middlewares/verify-token.middlewares");
const { Profile } = require("../models");
const { educationRouter } = require("./sub_profile.router.js/education.router");
const { languageRouter } = require("./sub_profile.router.js/language.router");
const { referenceRouter } = require("./sub_profile.router.js/reference.router");
const { workHistoryRouter } = require("./sub_profile.router.js/workHistory.router");

const profileRouter = express.Router()

//get profile by id
profileRouter.get("/:id", checkExist(Profile), getProfile) 
//update profile
profileRouter.put("/:id", authenticate, authorize(["APPLICANT", "ADMIN"]), checkExist(Profile), checkProfileBelongs, updateProfile)

profileRouter.use("/education", educationRouter)
profileRouter.use("/work-history", workHistoryRouter)
profileRouter.use("/language", languageRouter)
profileRouter.use("/reference", referenceRouter)


module.exports = {
    profileRouter
}