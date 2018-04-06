"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
var qs = require("querystring");
var Stringbuilder = require("stringbuilder");
var Url = require('url');
var port = 9000;
// let rawdata = Fs.readFileSync('./sources/server/pictures.json', "utf8");  
function getHome(req, resp) {
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    resp.write("<html><head><title>Home</title></head><body>Click <a href='/calc'>here</a> to do some calculations</body></html>");
    resp.end();
}
function get404(req, resp) {
    resp.writeHead(404, "Resource not found", { 'Content-Type': 'text/html' });
    resp.write("<html><head><title>404</title></head><body>404: Resource not found. <a href='/'>Go to home</a></body></html>");
    resp.end();
}
function get405(req, resp) {
    resp.writeHead(405, "Method not supported", { 'Content-Type': 'text/html' });
    resp.write("<html><head><title>405</title></head><body>405: Method not supported. <a href='/'>Go to home</a></body></html>");
    resp.end();
}
function getCalcHtml(req, resp, data) {
    var sb = new Stringbuilder({ newline: "\r\n" });
    sb.appendLine("<html>");
    sb.appendLine("<body>");
    sb.appendLine(" <form method = 'POST'>");
    sb.appendLine("     <table>");
    sb.appendLine("         <tr>");
    sb.appendLine("             <td>Enter first number</td>");
    if (data && data.txtFirstNo) {
        sb.appendLine("         <td><input type='text' id='txtFirstNo' name = 'txtFirstNo' value= '{0}' /></td>", data.txtFirstNo);
    }
    else {
        sb.appendLine("         <td><input type='text' id='txtFirstNo' name = 'txtFirstNo' value= '' /></td>");
    }
    sb.appendLine("         </tr>");
    sb.appendLine("         <tr>");
    sb.appendLine("             <td>Enter Second number</td>");
    if (data && data.txtSecondNo) {
        sb.appendLine("         <td><input type='text' id='txtSecondNo' name = 'txtSecondNo' value= '{0}' /></td>", data.txtSecondNo);
    }
    else {
        sb.appendLine("         <td><input type='text' id='txtSecondNo' name = 'txtSecondNo' value= '' /></td>");
    }
    sb.appendLine("         </tr>");
    sb.appendLine("         <tr>");
    sb.appendLine("             <td><input type='submit' value = 'Calculate' /></td>");
    sb.appendLine("         </tr>");
    if (data && data.txtSecondNo && data.txtSecondNo) {
        let sum = parseInt(data.txtFirstNo) + parseInt(data.txtSecondNo);
        sb.appendLine("         <tr>");
        sb.appendLine("             <td><span>SUM = <b>{0}</b></span></td>", sum.toString());
        sb.appendLine("         </tr>");
    }
    sb.appendLine("     </table>");
    sb.appendLine(" </form>");
    sb.appendLine("</body>");
    sb.appendLine("</html>");
    sb.build(function (error, result) {
        resp.write(result);
        resp.end();
    });
}
function getCalcForm(req, resp, data) {
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    getCalcHtml(req, resp, data);
}
Http.createServer(function (req, resp) {
    console.log(req.url);
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                getHome(req, resp);
            }
            else if (req.url === "/calc") {
                getCalcForm(req, resp, null);
            }
            else {
                get404(req, resp);
            }
            break;
        case 'POST':
            var requestBody = '';
            if (req.url === "/calc") {
                req.on('data', function (data) {
                    requestBody += data;
                    if (requestBody.length > 1e7) {
                        resp.writeHead(413, "Request Entity is too large", { 'Content-Type': 'text/html' });
                        resp.write("<html><head><title>413</title></head><body>413: Too much information. <a href='/'>Go to home</a></body></html>");
                        resp.end();
                    }
                });
                req.on('end', function (data) {
                    console.log(requestBody);
                    var formData = qs.parse(requestBody);
                    console.log("type of formdata is: " + typeof (formData));
                    getCalcForm(req, resp, formData);
                });
            }
            else {
                get404(req, resp);
            }
            break;
        default:
            get405(req, resp);
            break;
    }
}).listen(port);
