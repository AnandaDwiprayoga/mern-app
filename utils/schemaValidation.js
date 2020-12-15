// Joi is input validation
const Joi = require("@hapi/joi");

module.exports = {
    registerValidation : (requestBody) => {
        const reqBodyValidation = Joi.object({
            name : Joi.string().min(6).required().max(255),
            email: Joi.string().required().email().max(255),
            password: Joi.string().min(6).required()
        });

        return reqBodyValidation.validate(requestBody);
    },

    loginValidation : (requestBody) => {
        const validation = Joi.object({
            email: Joi.string().required().email(),
            password: Joi.string().min(6).required()
        });

        return validation.validate(requestBody);
    }
}
        