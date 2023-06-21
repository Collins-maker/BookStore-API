const Joi = require('joi');

const validateMakeBook = (req, res, next) => {
    // Joi schema definition for validation
    const schema = Joi.object({
        Title: Joi.string().required(),
        Author: Joi.string().required(),
        PublicationYear: Joi.number().integer().required(),
        Status: Joi.string().required()
    });

    // Validate the request body against the schema
    const { error } = schema.validate(req.body);

    // If there is an error, return a 400 response with the error message
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }

    // If validation passes, call the next middleware or route handler
    next();
};
module.exports = validateMakeBook;