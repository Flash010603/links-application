"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLink = exports.updateLink = exports.postLink = exports.getLinkById = exports.getLinks = void 0;
const Links_1 = __importDefault(require("../models/Links"));
const getLinks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const links = yield Links_1.default.find({}).sort({ start: -1 });
    res.json({
        msg: 'Show links',
        data: links
    });
});
exports.getLinks = getLinks;
const getLinkById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const link = yield Links_1.default.findOne({ _id: id });
    res.json({
        msg: 'Get Link by id',
        data: link
    });
});
exports.getLinkById = getLinkById;
const postLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newlink = new Links_1.default(req.body);
        const saveLink = yield newlink.save();
        res.json({
            msg: 'Link created',
            data: saveLink
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: {
                title: 'Ha ocurrido un error',
                msg: 'Comunicate con el administrador'
            }
        });
    }
});
exports.postLink = postLink;
const updateLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const link = yield Links_1.default.findOne({ _id: id });
        if (!link) {
            return res.status(404).json({
                msg: "The event you're looking for doesn't exist"
            });
        }
        const updatedLink = yield Links_1.default.findByIdAndUpdate(id, req.body, { new: true });
        res.json({
            msg: "The data has been updated",
            data: updatedLink
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: {
                title: 'Ha ocurrido un error',
                msg: 'Comunicate con el administrador'
            }
        });
    }
});
exports.updateLink = updateLink;
const deleteLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const link = yield Links_1.default.findOne({ _id: id });
        if (!link) {
            return res.status(404).json({
                msg: "The event you're looking for doesn't exist"
            });
        }
        yield Links_1.default.findByIdAndDelete(id);
        res.json({
            msg: 'The data has been successfully deleted',
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            error: {
                title: 'Ha ocurrido un error',
                msg: 'Comunicate con el administrador'
            }
        });
    }
});
exports.deleteLink = deleteLink;
//# sourceMappingURL=links.js.map