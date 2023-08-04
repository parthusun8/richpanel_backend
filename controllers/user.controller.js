const User = require('../models/user.model');


const register = async(req, res) => {
    try{
        const { name, email, password } = req.body;
        if(name!="" && email!="" && password!=""){
            const userExists = await User.findOne({email: email});
            console.log(userExists);
            if(userExists!=null){
                res.status(201).send({
                    'msg' : 'User already exists',
                });
                return;
            }
            const user = new User({
                name : name,
                email : email,
                password : password
            }).save();
            if(user){
                res.status(200).send({
                    'msg' : 'User registered successfully',
                });
            } else{
                res.status(201).send({
                    'msg' : 'Error in User registration',
                })
            }
        } else{
            res.status(400).json({
                message: "All fields are required"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({
            'msg' : 'Internal Server Error',
        })
    }
}

module.exports = {
    register
}