const { Profile, Reference } = require('../../models')



const addReference = async (req, res) => {
    const { user } = req;
    try {
        const profile = await Profile.findOne({
            where: { applicantId: user.id }
        })
        const newReference = await Reference.create({...req.body, profileId:profile.id})
        res.status(200).send(newReference)
    } catch (error) {
        res.status(500).send(error)
    }
}

const removeReference = async(req, res) =>{
    const {id} = req.params;
    try {
        await Reference.destroy({
            where: {
                id,
            }
        })
        res.status(200).send("xóa thành công")
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateReference = async(req, res) =>{
    const {id} = req.params;
    try {
        await Reference.update(
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
    addReference,
    removeReference,
    updateReference
}