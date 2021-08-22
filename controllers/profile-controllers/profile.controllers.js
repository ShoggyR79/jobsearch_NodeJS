const { Profile, WorkHistory, Language, Reference, Education } = require("../../models")

const getProfile = async (req, res) =>{
    const {id} = req.params;
    try{
        const profile = await Profile.findOne({
            where:{
                id
            },
            include:[
                {
                    model: Education
                },
                {
                    model: WorkHistory
                },
                {
                    model: Language
                },
                {
                    model: Reference
                }
            ]
        })

        res.status(200).send(profile)
    }catch(error) {
        res.status(500).send(error)
    }
}


const createProfile = async (id) => {
    try {
        const newProfile = await Profile.create({ applicantId: id })
        return { success: true, data: newProfile }
    } catch (error) {
        return { success: false, data: error }
    }
}

const updateProfile = async (req, res) => {
    const { id } = req.params;

    try {
        await Profile.update(
            { ...req.body },
            {
                where: {
                    id,
                }
            }
        )
        res.status(200).send("sửa thành công")
    } catch (error) {
        res.status(500).send(error)
    }
}

const removeProfile = async (applicantId) => {
    try {
        await Profile.destroy({
            where: {
                applicantId,
            },
        });
        return { success: true, data: "Delete Successful" }
    } catch (error) {
        return { success: true, data: error }
    }
};

module.exports = {
    createProfile,
    updateProfile,
    removeProfile,
    getProfile
}