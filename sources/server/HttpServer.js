"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
class HttpServer {
    constructor() {
        console.info("I Am Http Server");
        this.handleRequest = this.handleRequest.bind(this);
    }
    start(port, host) {
        this.server = Http.createServer(this.handleRequest);
        this.server.listen(port, host);
    }
    handleRequest(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        });
        res.end(`<h1>Barev</h1>`);
    }
}
exports.HttpServer = HttpServer;
