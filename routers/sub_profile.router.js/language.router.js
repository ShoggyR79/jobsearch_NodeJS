const express = require("express");
const { authenticate, authorize } = require("../../middlewares/verify-token.middlewares");
const { checkProfileExists, checkExist, checkSubTabBelongs } = require("../../middlewares/check-exist.middlewares");
const {Language} = require("../../models");
const { addLanguage, updateLanguage, removeLanguage } = require("../../controllers/profile-controllers/language.controllers");

const languageRouter = express.Router()

//add new work history to profile
languageRouter.post("/", authenticate, authorize(["APPLICANT"]), checkProfileExists, addLanguage)

//update existing work history 
languageRouter.put("/:id", authenticate, authorize(["APPLICANT", "ADMIN"]), checkExist(Language), checkSubTabBelongs(Language), updateLanguage)

//delete work history
languageRouter.delete("/:id", authenticate, authorize(["APPLICANT", "ADMIN"]), checkExist(Language), checkSubTabBelongs(Language), removeLanguage)



module.exports = {
    languageRouter
}