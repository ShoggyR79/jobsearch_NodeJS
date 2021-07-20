const express = require("express");
const { signIn } = require("../controllers/auth.controllers");
const { getCompanies, updateCompany, removeCompany, getCompanyDetail, createCompany } = require("../controllers/company.controllers");
const { checkExist } = require("../middlewares/check-exist.middlewares");
const {Company} = require("../models")

const companyRouter = express.Router();

companyRouter.get("/", getCompanies)

//get company by id
companyRouter.get("/:id", checkExist(Company) , getCompanyDetail);

//create new company
companyRouter.post("/", createCompany)

//update company
companyRouter.put("/:id", checkExist(Company), updateCompany)

//delete company
companyRouter.delete("/:id", checkExist(Company), removeCompany)

companyRouter.post("/sign-in", signIn(Company))

module.exports = {
    companyRouter
}