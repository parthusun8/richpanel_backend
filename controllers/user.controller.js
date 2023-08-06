const User = require('../models/user.model');


const plans = {
    "Mobile" : {
    "planName" : "Mobile",
    "videoQuality" : "Good",
    "Resolution" : "480p",
    "MonthlyPrice" : "₹ 100",
    "yearlyPrice" : "₹ 1000",
    "devices" : ["Phone", "Tablet"],
    "mId" : "price_1NbzdHSErffaDKeGV2EYkHoz",
    "yId" : "price_1Nbze0SErffaDKeGD0w3ANJf"
    },
    "Basic" : {
    "planName" : "Basic",
    "videoQuality" : "Good",
    "Resolution" : "480p",
    "MonthlyPrice" : "₹ 200",
    "yearlyPrice" : "₹ 2000",
    "devices" : ["Phone", "Tablet", "Computer", "TV"],
    "mId" : "price_1NbzeSSErffaDKeG0XkPTHAS",
    "yId" : "price_1NbzejSErffaDKeGe3KrRrA6"
    },
    "Standard" : {
        "planName" : "Standard",
        "videoQuality" : "Better",
        "Resolution" : "1080p",
        "MonthlyPrice" : "₹ 500",
        "yearlyPrice" : "₹ 5000",
        "devices" : ["Phone", "Tablet", "Computer", "TV"],
        "mId" : "price_1Nc1TuSErffaDKeGRZxyNtQq",
        "yId" : "price_1Nc1VHSErffaDKeGdiD7OQCS"
    },
    "Premimum" : {
        "planName" : "Premimum",
        "videoQuality" : "Best",
        "Resolution" : "4k+HDR",
        "MonthlyPrice" : "₹ 700",
        "yearlyPrice" : "₹ 7000",
        "devices" : ["Phone", "Tablet", "Computer", "TV"],
        "mId" : "price_1Nc1UPSErffaDKeGp78A5KoV",
        "yId" : "price_1Nc1UxSErffaDKeG27W2bFsa"    
    }};

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

const login = async(req, res) => {
    try{
        const { email, password } = req.body;
        if(email!="" && password!=""){
            const checkExists = await User.findOne({email: email});
            if(checkExists==null){
                res.status(201).send({
                    'msg' : 'User does not exist',
                });
                return;
            } else{
                if(checkExists.password==password){
                    res.status(200).send({
                        'msg' : 'User logged in successfully',
                        name : checkExists.name,
                        email : checkExists.email,
                        current_plan : checkExists.current_plan,
                        plan_details : plans[checkExists.current_plan]!="Free" ? plans[checkExists.current_plan] : {},
                        subscriptionId : checkExists.subscriptionId,
                    });
                } else{
                    res.status(201).send({
                        'msg' : 'Incorrect Password',
                    });
                }
            }
        } else{
            res.status(400).json({
                message: "All fields are required"
            })
        }
    } catch(err){
        console.log(err);
        res.status(500).send({
            'msg' : 'Internal Server Error',
        });
    }
}

const updateCurrentPlan = async (req, res) => {
    try{
        const userExists = await User.findOneAndUpdate({email: req.body.email}, {
            $set : {
                current_plan : req.body.planName,
                subscriptionId : req.body.subscriptionId,
            }
        });
        if(userExists){
            res.status(200).send({
                'msg' : 'Current Plan Updated',
            });
        } else{
            res.status(201).send({
                'msg' : 'User does not exist',
            });
        }
    } catch(err){
        console.log(err);
        res.status(500).send({
            'msg' : 'Internal Server Error',
        });
    }
}



module.exports = {
    register,
    login,
    updateCurrentPlan,
}