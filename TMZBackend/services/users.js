const userValidation = require('../validation/userValidation');

exports.validate = async (username,password)=>{
    return await userValidation.validate(username,password);
}