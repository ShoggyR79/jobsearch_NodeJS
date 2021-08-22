const {Admin, Applicant, Company} = require("../models")
const restoreUser = async (req, res) => {
    const { id , role} = req.params;
    try {
        let userType;
        switch (role) {
            case "admin":
              userType = Admin;
              break;
            case "applicant":
              userType = Applicant;
              break;
            case "company":
              userType = Company;
              break;
            default:
              break;
          }
        let account = await userType.findByPk(id, { paranoid: false })
        if (!account) {
            res.status(400).send("User not found")
        }
        if (account.deletedAt === null) {
            return res.status(200).send("User has not been deleted")
        }
        const restoredAccount = await account.restore();
        res.status(200).send(restoredAccount.toJSON())
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    restoreUser
}