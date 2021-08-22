const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secretKey = "cybersoft"


const signIn = (Model) => async(req, res) =>{
    const {email, password} = req.body;
    try {
        const userLogin = await Model.findOne({where: {email}});
        if (userLogin){
            const isAuth = bcryptjs.compareSync(password, userLogin.password);
            if (isAuth){
                const payload = {
                    id: userLogin.id,
                    email: userLogin.email,
                    role: userLogin.role
                };
                const token = jwt.sign(payload,secretKey, {expiresIn: "10h"})
                res.status(200).send({message: "Đăng nhập thành công", token});
            }else{
                res.status(400).send("Sai mật khẩu")
            }
        } else{
            res.status(404).send("email không tồn tại")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    signIn
}