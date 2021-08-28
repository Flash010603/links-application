import { Request, Response } from 'express'
import linkSchema from '../models/Links'

export const getLinks = async (req: Request, res: Response) => {

    const links = await linkSchema.find({}).sort({start:-1});
    

    res.json({
        msg: 'Show links',
        data: links
    })

};

export const getLinkById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const link = await linkSchema.findOne({ _id: id });

    res.json({
        msg: 'Get Link by id',
        data: link
    })

};

export const postLink = async (req: Request, res: Response) => {

    try {
        const newlink = new linkSchema(req.body);
        const saveLink = await newlink.save();
        
        res.json({
            msg: 'Link created',
            data: saveLink
        });

    } catch (error) {

        console.log(error)
        res.status(500).json({
            error: {
                title: 'Ha ocurrido un error',
                msg: 'Comunicate con el administrador'
            }
        });
    }
};

export const updateLink = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const link = await linkSchema.findOne({ _id: id });

        if (!link) {
            return res.status(404).json({
                msg: "The event you're looking for doesn't exist"
            });
        }

        const updatedLink = await linkSchema.findByIdAndUpdate(id, req.body, { new: true });

        res.json({
            msg: "The data has been updated",
            data: updatedLink
        });

    } catch (error) {

        console.log(error)
        res.status(500).json({
            error: {
                title: 'Ha ocurrido un error',
                msg: 'Comunicate con el administrador'
            }
        });
    }
};

export const deleteLink = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const link = await linkSchema.findOne({ _id: id });

        if (!link) {
            return res.status(404).json({
                msg: "The event you're looking for doesn't exist"
            });
        }

        await linkSchema.findByIdAndDelete(id);

        res.json({
            msg: 'The data has been successfully deleted',
        });

    } catch (error) {

        console.log(error)
        res.status(500).json({
            error: {
                title: 'Ha ocurrido un error',
                msg: 'Comunicate con el administrador'
            }
        });
    }
};