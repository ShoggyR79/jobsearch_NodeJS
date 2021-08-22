const express = require("express");
const { signIn } = require("../controllers/auth.controllers");
const { getCompanies, updateCompany, removeCompany, getCompanyDetail, createCompany, uploadAvatar, searchCompanies, getCompaniesPaginate } = require("../controllers/company.controllers");
const { checkExist, checkEmail, checkChangePerms } = require("../middlewares/check-exist.middlewares");
const { authenticate, authorize } = require("../middlewares/verify-token.middlewares");
const { Company } = require("../models");
const { uploadImageSingle } = require("../upload/upload-file.middlewares");

const companyRouter = express.Router();

//upload avatar
companyRouter.post("/upload-avatar", authenticate, uploadImageSingle(), uploadAvatar)

//search for company (key = "name")
companyRouter.get("/search/", searchCompanies)

//get companies with pagination
companyRouter.get("/paginate", getCompaniesPaginate)

//get all company
companyRouter.get("/", getCompanies)

//get company by id
companyRouter.get("/:id", checkExist(Company), getCompanyDetail);

//create new company
companyRouter.post("/", checkEmail(Company), createCompany)

//update company
companyRouter.put("/:id", checkExist(Company), authenticate, authorize(["ADMIN", "COMPANY"]), checkChangePerms, updateCompany)

//delete company
companyRouter.delete("/:id", checkExist(Company), authenticate, authorize(["ADMIN", "COMPANY"]), checkChangePerms, removeCompany)

//sign in
companyRouter.post("/sign-in", signIn(Company))



module.exports = {
    companyRouter
}