const { Profile, WorkHistory } = require('../../models')



const addWorkHistory = async (req, res) => {
    const { user } = req;
    try {
        const profile = await Profile.findOne({
            where: { applicantId: user.id }
        })
        const newWorkHistory = await WorkHistory.create({...req.body, profileId:profile.id})
        res.status(200).send(newWorkHistory)
    } catch (error) {
        res.status(500).send(error)
    }
}

const removeWorkHistory = async(req, res) =>{
    const {id} = req.params;
    try {
        await WorkHistory.destroy({
            where: {
                id,
            }
        })
        res.status(200).send("xóa thành công")
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateWorkHistory = async(req, res) =>{
    const {id} = req.params;
    try {
        await WorkHistory.update(
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
    addWorkHistory,
    removeWorkHistory,
    updateWorkHistory
}