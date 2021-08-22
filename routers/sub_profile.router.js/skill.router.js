const express = require('express');
const { addSkill, updateSkill, removeSkill } = require('../../controllers/profile-controllers/skill.controllers');
const { checkProfileExists } = require('../../middlewares/check-exist.middlewares');
const { authenticate, authorize } = require('../../middlewares/verify-token.middlewares');
const {Skill} = require("../../models");

const skillRouter = express.Router()

//add new skill to profile
skillRouter.post("/", authenticate, authorize(["APPLICANT"]), checkProfileExists, addSkill)

//update existing skill 
skillRouter.put("/:id", authenticate, authorize(["APPLICANT", "ADMIN"]), checkExist(Skill), checkSubTabBelongs(Skill), updateSkill)

//delete skill
skillRouter.delete("/:id", authenticate, authorize(["APPLICANT", "ADMIN"]), checkExist(Skill), checkSubTabBelongs(Skill), removeSkill)



module.exports = {
    skillRouter
}