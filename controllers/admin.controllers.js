const bcryptjs = require("bcryptjs");
const { Admin } = require("../models")


const getAdminList = async (req, res) => {
    try {
        const adminList = await Admin.findAll();
        res.status(200).send(adminList)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAdminDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const adminDetail = await Admin.findByPk(id)
        res.status(200).send(adminDetail);
    } catch (error) {
        res.status(500).send(error);
    }

};

const createAdmin = async (req, res) => {
    const { password } = req.body;

    try {
        const salt = bcryptjs.genSaltSync(10);
        const hashPassword = bcryptjs.hashSync(password, salt);
        const newAdmin = await Admin.create({ ...req.body, password: hashPassword })
        res.status(201).send(newAdmin)
    } catch (error) {
        res.status(500).send(error)
    }
}

const removeAdmin = async (req, res) => {
    const { id } = req.params;
    try {
        await Admin.destroy({
            where: {
                id,
            },
        });
        res.status(200).send("xóa thành công");
    } catch (error) {
        res.status(500).send(error);
    }
};


const updateAdmin = async (req, res) => {
    const { id } = req.params;

    try {
        await Admin.update(
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
    getAdminList,
    getAdminDetail,
    createAdmin,
    updateAdmin,
    removeAdmin
}