const bcryptjs = require("bcryptjs");
const { Applicant } = require("../models")


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
    const applicantDetail = await Applicant.findByPk(id)
    res.status(200).send(applicantDetail);
  } catch (error) {
    res.status(500).send(error);
  }

};

const createApplicant = async (req, res) => {
  const { password } = req.body;

  try {
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(password, salt);
    const newApplicant = await Applicant.create({ ...req.body, password: hashPassword})
    res.status(201).send(newApplicant)
  } catch (error) {
    res.status(500).send(error)
  }
}

const removeApplicant = async (req, res) => {
  const { id } = req.params;
  try {
    await Applicant.destroy({
      where: {
        id,
      },
    });
    res.status(200).send("xóa thành công");
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateApplicant = async (req, res) => {
  const { id } = req.params;

  try {
    await Applicant.update(
      { ...req.body },
      {
        where: {
          id,
        }
      }
    );
    res.status(200).send("update Successful");
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getApplicantList,
  getApplicantDetail,
  createApplicant,
  removeApplicant,
  updateApplicant
}