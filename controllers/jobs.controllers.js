const { Sequelize } = require("sequelize")
const { Job, Company, sequelize, Applicant, Application } = require("../models")

const Op = Sequelize.Op

const searchJob = async (req, res) => {
    const { name, location } = req.query

    try {
        let result = []
        if (location && name) {
            console.log("Both")
            result = await Job.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    },
                    location: {
                        [Op.like]: `%${location}%`
                    }
                },
                include: [
                    {
                        model: Company,
                        attributes: ["id", "name", "location", "description"]
                    }
                ]
            })
        } else if (name && !location) {
            console.log("just name")

            result = await Job.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    },
                },
                include: [
                    {
                        model: Company,
                        attributes: ["id", "name", "location", "description"]
                    }
                ]
            })
        } else if (location && !name) {
            console.log("just location")

            result = await Job.findAll({
                where: {
                    location: {
                        [Op.like]: `%${location}%`
                    },
                },
                include: [
                    {
                        model: Company,
                        attributes: ["id", "name", "location", "description"]
                    }
                ]
            })
        } else {
            res.status(400).send("Name and Location should not be both Empty")
        }
        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }


}


const getAllJobs = async (req, res) => {
    try {
        const jobList = await Job.findAll({
            include: [
                {
                    model: Company,
                    attributes: ["id", "name", "location", "description"]
                }
            ]
        })
        res.status(200).send(jobList)
    } catch (error) {
        res.status(500).send(error)
    }
}


const getJobPaginate = async (req, res) => {
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
        const jobList = await Job.findAndCountAll({
            offset: pageSize * page,
            limit: pageSize,
            include: [
                {
                    model: Company,
                    attributes: ["id", "name", "location", "description"]
                }
            ]
        })
        const returnObject = {
            page: page + 1,
            pageSize,
            totalPages: Math.ceil(jobList.count / pageSize),
            totalCount: jobList.count,
            applicant: jobList.rows
        }
        res.status(200).send(returnObject)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getJobById = async (req, res) => {
    const { id } = req.params
    try {
        const job = await Job.findOne({
            where: {
                id
            }
            ,
            include: [
                {
                    model: Company,
                    attributes: ["id", "name", "location", "description"]
                }
            ]
        })
        res.status(200).send(job)
    } catch (error) {
        res.status(500).send(error)
    }
}


const getJobsByCompany = async (req, res) => {
    const { id } = req.params
    try {
        const jobList = await Job.findAll({ where: { companyId: id } })
        res.status(200).send(jobList);

    } catch (error) {
        res.status(500).send(error)
    }
}


const postJob = async (req, res) => {
    const { user } = req;
    try {
        const newJob = await Job.create({ ...req.body, companyId: user.id })
        res.status(200).send(newJob);
    } catch (error) {
        res.status(500).send(error)
    }
}

const getPostedJobs = async (req, res) => {
    const { user } = req;
    try {
        const jobList = await Job.findAll({ where: { companyId: user.id } })
        res.status(200).send(jobList);

    } catch (error) {
        res.status(500).send(error)
    }
}

const updateJob = async (req, res) => {
    const { id } = req.params;

    try {
        await Job.update(
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

const deleteJob = async (req, res) => {
    const { id } = req.params;
    try {
        await Job.destroy({
            where: {
                id,
            }
        });
        res.status(200).send("xóa thành công")
    } catch (error) {
        res.status(500).send(error)
    }
}

const getApplications = async (req, res) => {
    const { id } = req.params;
    try {
        const applicationList = await Application.findAll({
            where: { jobId: id },
            include: {
                model: Applicant,
                attributes: ["firstName", 'lastName', 'email', 'birthday', 'image']
            }
        })
        console.log(applicationList)
        res.status(200).send(applicationList)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

module.exports = {
    postJob,
    getPostedJobs,
    updateJob,
    deleteJob,
    getAllJobs,
    getJobById,
    getJobsByCompany,
    getApplications,
    searchJob,
    getJobPaginate
}