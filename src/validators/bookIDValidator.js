const Joi = require('joi');

const validateBookID = (req, res, next) => {
    const schema = Joi.object({
        BookID: Joi.number().integer().positive().required(),
    });

    const { error } = schema.validate(req.params);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }

    next();
};

module.exports = validateBookID;