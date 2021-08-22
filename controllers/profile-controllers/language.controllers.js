const { Profile, Language } = require('../../models')



const addLanguage = async (req, res) => {
    const { user } = req;
    try {
        const profile = await Profile.findOne({
            where: { applicantId: user.id }
        })
        const newLanguage = await Language.create({ ...req.body, profileId: profile.id })
        res.status(200).send(newLanguage)
    } catch (error) {
        res.status(500).send(error)
    }
}

const removeLanguage = async (req, res) => {
    const { id } = req.params;
    try {
        await Language.destroy({
            where: {
                id,
            }
        })
        res.status(200).send("xóa thành công")
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateLanguage = async (req, res) => {
    const { id } = req.params;
    try {
        await Language.update(
            { ...req.body },
            {
                where: {
                    id
                }
            }
        )
        res.status(200).send("Update thành công")

    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    addLanguage,
    removeLanguage,
    updateLanguage
}