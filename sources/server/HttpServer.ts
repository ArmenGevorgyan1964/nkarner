import * as Http from 'http';
import * as  Url from 'url';
const {URLSearchParams} = require('url') ;
import * as Fs from 'fs';
var myReadStream = Fs.createReadStream(__dirname + '/pictures.txt', 'utf8');
var myWriteStream = Fs.createWriteStream(__dirname + '/wrstr_pict.txt');
var myWriteStreamPipe = Fs.createWriteStream(__dirname + '/wrstr_pipe_pict.txt');

myReadStream.on('data', function(chunk){
    console.log('new chunk received: ');
    //console.log(chunk);
    myWriteStream.write(chunk);
});
myReadStream.pipe(myWriteStreamPipe);

let nktext = Fs.readFileSync('./sources/server/pictures.txt','utf8');
var apictline = nktext.split("\n");
//console.log(apictline);
const totalrows:number = apictline.length;
/*
console.log(apictline.length);
console.log(apictline[0]);
console.log(apictline[1]);
console.log(apictline[2]);
console.log(apictline[3]);
*/

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
        var q = Url.parse(req.url, true);
        var params = new URLSearchParams(q.search);
        let pStart:number=0;
        let pEnd:number=1000;
        let lpp:number=10;

        if(params.get('page_start')!=undefined || params.get('page_start') !== null){
            let ps:string=params.get('page_start');
            pStart=Number(ps);
        }
        if(params.get('page_end')!=undefined || params.get('page_end') !== null){
            let pnd:string=params.get('page_end');
            pEnd = Number(pnd);
            //pEnd = parseInt(pnd, 10);
        }
        if(params.get('lines_per_page')!=undefined || params.get('lines_per_page') !== null){
            let pl:string=params.get('lines_per_page');
            lpp=Number(pl);
        }
        console.log(pStart);
        console.log(pEnd);
        console.log(lpp);
        res.writeHead(200,{
            'Content-Type':'text/html; charset=utf-8'
        });
        res.write(q.pathname);
        res.write(q.search);
        res.write(`<p> ${pStart} </p>`);
        res.write(`<p> ${pEnd} </p>`);
        res.write(`<p> ${lpp} </p>`);
        res.write(`<p> ${totalrows} </p>`);
        for(let i:number = pStart; i<(pStart+lpp); i++){
            res.write(`<p> ${apictline[i]} </p>`);
        }
        if(pStart>0){
            res.write(`<span>
            <a href="http://localhost:3000/sources/server/index.js/?page_start=${pStart-lpp}&lines_per_page=${lpp}&page_end="${pStart}>
            << prev. </a> </span>`);
        }
        if(pEnd<totalrows){
            res.write(`<span>
            <a href="http://localhost:3000/sources/server/index.js/?page_start=${pStart+lpp}&lines_per_page=${lpp}&page_end="${pStart+2*lpp}>
            next >> </a> </span>`);
        }
        //res.write(params.get('page_end'));
       // res.write(params.get('lines_per_page'));
        res.end(`<h1>Barev</h1>`);
        // http://localhost:3000/?op=lpoi&vava=loyuip&page_start=0&page_end=15&lines_per_page=10
    }
}