const Joi = require("joi");

const categoryValidation = (body)=>{
 const schema = Joi.object({
   name: Joi.string().trim().required(),
 })
 return schema.validate(body, { abortEarly: false });
 
}
   

module.exports = categoryValidation;
