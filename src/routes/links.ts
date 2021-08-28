import { Router } from 'express';
import { check, param } from 'express-validator'
import { getLinks, postLink, updateLink, deleteLink, getLinkById } from '../controllers/links';
import { validationFields } from '../middlewares/validationField';

export const router = Router();

router.get('/', getLinks);

router.get('/:id',
[
    param('id', 'ID is not valid').isMongoId(),
    validationFields
],
getLinkById);

router.post('/',
[
    check('link', 'Uri is required').isURL(),
    check('name', 'Name is required').notEmpty(),
    validationFields
], 
postLink);

router.put('/:id',
[
    param('id', 'ID is not valid').isMongoId(),
    check('link', 'Uri is required').isURL(),
    check('name', 'Name is required').notEmpty(),
    validationFields
], 
updateLink);

router.delete('/:id', 
[
    param('id', 'ID is not valid').isMongoId(),
    validationFields
],
deleteLink);