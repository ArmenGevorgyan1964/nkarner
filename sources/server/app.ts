import * as Http from 'http';
var Url = require('url');
import * as Fs from 'fs';
// let rawdata = Fs.readFileSync('./sources/server/pictures.json', "utf8");  

function renderHtml(path:string, response:Http.ServerResponse){
    Fs.readFile(path, null, function(error, data){
        if(error){
            response.writeHead(404);
            response.write('File not found');
        } else{
            response.writeHead(200, {'Content-Type':'text/html'} );
            response.write(data);
        }
        response.end();
    });
}


module.exports = {
    handleAllRequests: function(request:Http.IncomingMessage, response:Http.ServerResponse ){
        response.writeHead(200, {'Content-Type':'text/html'} )
        var path = Url.parse(request.url).pathname;
        console.log(path);
        switch(path){
            case '/':
                renderHtml('./sources/server/index.html', response);
                break;
            case '/login':
                renderHtml('./sources/server/login.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('The Route Not Defined');
                response.end();
        }
    }
}