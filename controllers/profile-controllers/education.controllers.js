const { Profile, Education } = require('../../models')



const addEducation = async (req, res) => {
    const { user } = req;
    try {
        const profile = await Profile.findOne({
            where: { applicantId: user.id }
        })
        const newEducation = await Education.create({...req.body, profileId:profile.id})
        res.status(200).send(newEducation)
    } catch (error) {
        res.status(500).send(error)
    }
}

const removeEducation = async(req, res) =>{
    const {id} = req.params;
    try {
        await Education.destroy({
            where: {
                id,
            }
        })
        res.status(200).send("xóa thành công")
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateEducation = async(req, res) =>{
    const {id} = req.params;
    try {
        await Education.update(
            {...req.body},
            {
                where:{
                    id
                }
            }
        )
        res.status(200).send("Update thành công")
    }catch(error){
        res.status(500).send(error)
    }
}


module.exports = {
    addEducation,
    removeEducation,
    updateEducation
}