const { Profile, Skill } = require('../../models')



const addSkill = async (req, res) => {
    const { user } = req;
    try {
        const profile = await Profile.findOne({
            where: { applicantId: user.id }
        })
        const newSkill = await Skill.create({ ...req.body, profileId: profile.id })
        res.status(200).send(newSkill)
    } catch (error) {
        res.status(500).send(error)
    }
}

const removeSkill = async (req, res) => {
    const { id } = req.params;
    try {
        await Skill.destroy({
            where: {
                id,
            }
        })
        res.status(200).send("xóa thành công")
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateSkill = async (req, res) => {
    const { id } = req.params;
    try {
        await Skill.update(
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
    addSkill,
    removeSkill,
    updateSkill
}