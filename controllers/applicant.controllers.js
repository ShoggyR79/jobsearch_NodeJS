const { production } = require("../config/config.json");

const domain = `http://${production.host}:${process.env.PORT}/`


const bcryptjs = require("bcryptjs");
const { Applicant } = require("../models");
const { createProfile, removeProfile } = require("./profile-controllers/profile.controllers");


const getApplicantList = async (req, res) => {
  try {
    const applicantList = await Applicant.findAll();
    res.status(200).send(applicantList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getApplicantListPaginate = async (req, res) => {
  let defaultPage = 0;
  let defaultPageSize = 10;
  let { page, pageSize } = req.query;
  if (!page || page < 0) {
    page = defaultPage;
  } else {
    page = parseInt(page) - 1
  }
  if (!pageSize || pageSize < 0) {
    pageSize = defaultPageSize
  } else {
    pageSize = parseInt(pageSize)
  }

  try {
    const applicantList = await Applicant.findAndCountAll({
      offset: pageSize * page,
      limit: pageSize
    })
    const returnObject = {
      page: page + 1,
      pageSize,
      totalPages: Math.ceil(applicantList.count / pageSize),
      totalCount: applicantList.count,
      applicant: applicantList.rows
    }
    res.status(200).send(returnObject)
  } catch (error) {
    res.status(500).send(error)
  }
}


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
    const newApplicant = await Applicant.create({ ...req.body, password: hashPassword })
    const newProfile = await createProfile(newApplicant.id)
    if (!newProfile.success) {
      res.status(500).send("error while creating profile")
    }
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
    removeProfile(id)
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

const uploadAvatar = async (req, res) => {
  const { file, user } = req;
  const urlImage = domain + file.path;
  // lưu link hinh xuống db
  try {
    const applicantDetail = await Applicant.findByPk(user.id);
    applicantDetail.image = urlImage;
    await applicantDetail.save();
    res.send(applicantDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = {
  getApplicantList,
  getApplicantDetail,
  createApplicant,
  removeApplicant,
  updateApplicant,
  uploadAvatar,
  getApplicantListPaginate
}