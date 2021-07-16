const bcryptjs = require("bcryptjs");
const {Applicant} = require("../models")

const getApplicantList = async (req, res) => {
    try {
      const applicantList = await Applicant.findAll();
      res.status(200).send(applicantList);
    } catch (error) {
      res.status(500).send(error);
    }
};

const getApplicantDetail = async (req, res) => {
    const { id } = req.params;
    try {
      const applicantDetail = await Applicant.findByPk(id);
      res.status(200).send(applicantDetail);
    } catch (error) {
      res.status(500).send(error);
    }
  
};

const createApplicant = async(req, res) =>{
    const {firstName, lastName, email, password, birthday} = req.body;
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(password, salt);
    const newApplicant = await Applicant.create({firstName, lastName, email, password:hashPassword, birthday})
    res.status(201).send(newApplicant)
    try {
        const 
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports ={
    getApplicantList,
    getApplicantDetail,
    createApplicant
}