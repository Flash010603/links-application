"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const links_1 = require("../routes/links");
const config_1 = require("../database/config");
class Server {
    constructor() {
        this.apiPath = {
            links: '/api/links'
        };
        this.port = process.env.PORT || '8000';
        this.app = express_1.default();
        this.middleware();
        this.routes();
    }
    routes() {
        this.app.use(this.apiPath.links, links_1.router);
    }
    middleware() {
        this.app.use(cors_1.default());
        // this.app.use( express.static('public') )
        this.app.use(express_1.default.json());
    }
    connectionDataBase() {
        config_1.dbConnection();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`--- Server is work in the port ${this.port} ---`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map