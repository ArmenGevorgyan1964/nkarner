import * as Http from 'http';

export class HttpServer {
    
    private server:Http.Server;

    constructor(){
        console.info("I Am Http Server")
        this.handleRequest =this.handleRequest.bind(this);
    }

    start(port:number,host:string){
        this.server = Http.createServer(this.handleRequest);
        this.server.listen(port,host)
    }
    
    handleRequest(req:Http.IncomingMessage,res:Http.ServerResponse){
        res.writeHead(200,{
            'Content-Type':'text/plain; charset=utf-8'
        })
        res.end(`<h1>Barev</h1>`);

    }
}