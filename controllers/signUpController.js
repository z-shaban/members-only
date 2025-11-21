const db = require('../db/queries')
const {body, validationResult, matchedData} = require('express-validator')

const validateUser = [
    body('first_name')
    .trim()
    .notEmpty().withMessage('First name cannot be empty')
    .bail()
    .isAlpha().withMessage('First name must only contain letters'),

     body('last_name')
    .trim()
    .notEmpty().withMessage('Last name cannot be empty')
    .bail()
    .isAlpha().withMessage('Last name must only contain letters'),

    body('username')
    .trim()
    .notEmpty().withMessage('Username cannot be empty')
    .bail()
    .custom(async(value)=>{
       const username = await db.getUsername(value)
       if(username){
        throw new Error('username exists, choose another username')
       }
       return true;
    }),

    body('password')
    .notEmpty().withMessage('password cannot be empty')
    .bail()
    .isLength({min:8}).withMessage('password must have at least 8 letters'),

    body('confirm_password')
    .custom((value,{req})=>{
        if(!req.body.password){
            return true
        }

        if(!value){
            throw new Error('Confirm Password')
        }

        if(value !== req.body.password){
            throw new Error('Passwords do not match')
        }
        return true
    }
    
)
]

async function getSignUpForm(req,res){
    res.render('pages/sign-up',{title: 'Sign Up'})
}

const createUser = [
    validateUser,
    async (req,res)=>{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).render('pages/sign-up',{title: 'Sign Up', errors:errors.array()})
        }
         res.send('created')
        console.log(matchedData(req))
    }
]



module.exports = {
    getSignUpForm,
    createUser
}