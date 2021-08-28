import express, { Application } from 'express';
import cors from 'cors'

import { router } from '../routes/links';
import { dbConnection } from '../database/config';

export class Server{
    
    private app: Application;
    private port: string;
    private apiPath = {
        links:'/api/links'
    };

    constructor() {
        this.port = process.env.PORT || '8000';    
        this.app = express();
        this.middleware();
        this.routes();
    }

    routes(){
        this.app.use(this.apiPath.links, router);
    }

    middleware(){

        this.app.use( cors() )
        // this.app.use( express.static('public') )
        this.app.use( express.json() )

    }

    connectionDataBase(){
        dbConnection();
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`--- Server is work in the port ${this.port} ---`)
        })
    }


    
}