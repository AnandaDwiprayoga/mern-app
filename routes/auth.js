const router = require('express').Router();
const UserModel = require('./../models/User');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('./../utils/schemaValidation');

const isEmailExist = async (email) => {
    const checkEmail = await UserModel.findOne({email : email});
    return checkEmail;
}

router.get('/', (req,res) => {
    UserModel
        .find()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(400).json(error);
        });
});

router.post('/register', async (req,res) => {

    // LATS VALIDATE WITH JOI
    const {error} = registerValidation(req.body);
    if(error) return res.status(400).json(error.details[0].message);

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const algorithm = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, algorithm);

    if(await isEmailExist(email)) return res.status(400).send({message: `email ${email} is already exists`});

    const user = new UserModel({
        name : name,
        email : email,
        password: passwordHash
    });

    try{
        await user.save();
        res.status(200).json({message: `${name} is successfully registered`});
    }catch(error){
        res.status(400).json(error);
    }
});

router.post('/login', async (req,res) => {
     // LATS VALIDATE WITH JOI
     const {error} = loginValidation(req.body);
     if(error) return res.status(400).json(error.details[0].message);

     const email = req.body.email;
     const password = req.body.password;

    //  FIRST, WE NEED CHECK EMAIL IS EXIST OR NOT
    const userFound = await UserModel.findOne({email});
    if(!userFound) return res.status(401).send({message: `email ${email} is not registered`});

    const isPasswordValid = await bcrypt.compare(password, userFound.password);
    if(!isPasswordValid) return res.status(401).send({message: `Invalid password`});

    // Create and assing a token
    const token = JWT.sign({_id: userFound._id, name : userFound.name}, process.env.TOKEN_SECRET);
    res.header('X-Auth-Token', token).json({isUserFound: true, token})
})


module.exports = router;