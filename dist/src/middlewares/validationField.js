"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationFields = void 0;
const express_validator_1 = require("express-validator");
const validationFields = (req, res, next) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }
    next();
};
exports.validationFields = validationFields;
//# sourceMappingURL=validationField.js.map