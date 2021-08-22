const { Application } = require("../models")
const { production } = require("../config/config.json");

const domain = `http://${production.host}:${process.env.PORT}/`


const getApplicationById = async(req, res) =>{
    const {id} = req.params;
    try {
        const application = await Application.findByPk(id);
        res.status(200).send(application)
    } catch (error) {
        res.status(500).send(error)
    }
}


const getOwnApplications = async(req, res) =>{
    const {user} = req
    try {
        const applicationList = await Application.findAll({
            where:{
                applicantId: user.id
            }
        })
        res.status(200).send(applicationList);
    } catch (error) {
        res.status(500).send(error)
    }
}

const createApplication = async (req, res) => {
    const { file, user } = req
    const urlResume = domain + file.path;
    // job-id
    const { id } = req.params;
    const { contactPoint } = req.body
    try {
        const newApplication = await Application.create({ applicantId: user.id, jobId: id, resume: urlResume, contactPoint })
        res.status(201).send(newApplication)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateResume = async (req, res) => {
    const { file } = req
    const urlResume = domain + file.path;
    // application-id
    const { id } = req.params;
    try {
        await Application.update(
            { resume: urlResume },
            {
                where: {
                    id,
                }
            }
        )
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteApplication = async (req, res) => {
    const { id } = req.params;
    try {
        await Application.destroy({
            where: {
                id,
            }
        });
        res.status(200).send("xóa thành công")
    } catch (error) {
        res.status(500).send(error)
    }

}

module.exports = {
    createApplication,
    updateResume,
    deleteApplication,
    getApplicationById,
    getOwnApplications
}