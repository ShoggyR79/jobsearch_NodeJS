const bcryptjs = require("bcryptjs");
const { Company } = require("../models")

const getCompanies = async (req, res) => {
    try {
        const companiesArr = await Company.findAll();
        res.status(200).send(companiesArr);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getCompanyDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const companyDetail = await Company.findByPk(id)
        res.status(200).send(companyDetail);
    } catch (error) {
        res.status(500).send(error);
    }

};


const createCompany = async (req, res) => {
    const { password } = req.body;

    try {
        const salt = bcryptjs.genSaltSync(10);
        const hashPassword = bcryptjs.hashSync(password, salt);
        const newCompany = await Company.create({ ...req.body, password: hashPassword })
        res.status(201).send(newCompany)
    } catch (error) {
        res.status(500).send(error)
    }
}

const removeCompany = async (req, res) => {
    const { id } = req.params;
    try {
        await Company.destroy({
            where: {
                id,
            },
        });
        res.status(200).send("xóa thành công");
    } catch (error) {
        res.status(500).send(error);
    }
};


const updateCompany = async (req, res) => {
    const { id } = req.params;

    try {
        await Company.update(
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
    getCompanies,
    getCompanyDetail,
    createCompany,
    removeCompany,
    updateCompany
}