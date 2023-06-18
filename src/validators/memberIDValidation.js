const Joi = require('joi');

const validateMemberID = (req, res, next) => {
    const schema = Joi.object({
        MemberID: Joi.number().integer().positive().required(),
    });

    const { error } = schema.validate(req.params);
    if (error) {
        return res.status(400).json({ success: false, message: error.details[0].message });
    }

    next();
};

module.exports = validateMemberID;