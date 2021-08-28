"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const links_1 = require("../controllers/links");
const validationField_1 = require("../middlewares/validationField");
exports.router = express_1.Router();
exports.router.get('/', links_1.getLinks);
exports.router.get('/:id', [
    express_validator_1.param('id', 'ID is not valid').isMongoId(),
    validationField_1.validationFields
], links_1.getLinkById);
exports.router.post('/', [
    express_validator_1.check('link', 'Uri is required').isURL(),
    express_validator_1.check('name', 'Name is required').notEmpty(),
    validationField_1.validationFields
], links_1.postLink);
exports.router.put('/:id', [
    express_validator_1.param('id', 'ID is not valid').isMongoId(),
    express_validator_1.check('link', 'Uri is required').isURL(),
    express_validator_1.check('name', 'Name is required').notEmpty(),
    validationField_1.validationFields
], links_1.updateLink);
exports.router.delete('/:id', [
    express_validator_1.param('id', 'ID is not valid').isMongoId(),
    validationField_1.validationFields
], links_1.deleteLink);
//# sourceMappingURL=links.js.map