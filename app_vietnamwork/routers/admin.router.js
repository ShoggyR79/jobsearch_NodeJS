const express = require("express");
const { getAdminList, getAdminDetail, createAdmin, updateAdmin, removeAdmin } = require("../controllers/admin.controllers");
const { signIn } = require("../controllers/auth.controllers");
const { checkExist } = require("../middlewares/check-exist.middlewares");
const {Admin} = require("../models")

const adminRouter = express.Router();

adminRouter.get("/", getAdminList)

//get admin by id
adminRouter.get("/:id", checkExist(Admin) , getAdminDetail);

//create new admin
adminRouter.post("/", createAdmin)

//update admin
adminRouter.put("/:id", checkExist(Admin), updateAdmin)

//delete admin
adminRouter.delete("/:id", checkExist(Admin), removeAdmin)

adminRouter.post("/sign-in", signIn(Admin))

module.exports = {
    adminRouter
}