const express = require("express");
const { authenticate, authorize } = require("../../middlewares/verify-token.middlewares");
const { checkProfileExists, checkExist, checkSubTabBelongs } = require("../../middlewares/check-exist.middlewares");
const {Reference} = require("../../models");
const { updateReference, addReference, removeReference } = require("../../controllers/profile-controllers/reference.controllers");
const referenceRouter = express.Router()

//add new work history to profile
referenceRouter.post("/", authenticate, authorize(["APPLICANT"]), checkProfileExists, addReference)

//update existing work history 
referenceRouter.put("/:id", authenticate, authorize(["APPLICANT", "ADMIN"]), checkExist(Reference), checkSubTabBelongs(Reference), updateReference)

//delete work history
referenceRouter.delete("/:id", authenticate, authorize(["APPLICANT", "ADMIN"]), checkExist(Reference), checkSubTabBelongs(Reference), removeReference)



module.exports = {
    referenceRouter
}