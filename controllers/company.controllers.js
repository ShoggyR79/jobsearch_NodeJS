const { production } = require("../config/config.json");

const domain = `http://${production.host}:${process.env.PORT}/`

const bcryptjs = require("bcryptjs");
const { Company } = require("../models");

const searchCompanies = async (req, res) => {
    const { name } = req.query
    try {
        const result = await Company.findAll({
            where: {
                name: {
                    [Op.like]: `%${name}%`
                },

            },
        })
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
}
const getCompanies = async (req, res) => {
    try {
        const companiesArr = await Company.findAll();
        res.status(200).send(companiesArr);
    } catch (error) {
        res.status(500).send(error);
    }
};


const getCompaniesPaginate = async (req, res) => {
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
        const companyList = await Company.findAndCountAll({
            offset: pageSize * page,
            limit: pageSize
        })
        const returnObject = {
            page: page + 1,
            pageSize,
            totalPages: Math.ceil(companyList.count / pageSize),
            totalCount: companyList.count,
            applicant: companyList.rows
        }
        res.status(200).send(returnObject)
    } catch (error) {
        res.status(500).send(error)
    }
}



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


const uploadAvatar = async (req, res) => {
    const { file, user } = req;
    const urlImage = domain + file.path;
    // lưu link hinh xuống db
    try {
        const companyDetail = await Company.findByPk(user.id);
        companyDetail.image = urlImage;
        await companyDetail.save();
        res.send(companyDetail);
    } catch (error) {
        res.status(500).send(error);
    }
};
module.exports = {
    getCompanies,
    getCompanyDetail,
    createCompany,
    removeCompany,
    updateCompany,
    uploadAvatar,
    searchCompanies,
    getCompaniesPaginate
}