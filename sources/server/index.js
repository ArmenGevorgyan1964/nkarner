"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpServer_1 = require("./HttpServer");
const Fs = require("fs");
//import * as  Url from 'url';
const server = new HttpServer_1.HttpServer();
server.start(3000, '0.0.0.0');
var db = [
    ['Anun', 'Azganun', null, 12],
    ['Anun1', 'Azganun11', 'MALE', 24],
    ['Anun2', 'Azganun222', 'female', 55],
    ['Anun3', 'Azganun33333', null, 15],
];
var users = db.map((el) => {
    return {
        anun: el[0],
        azganun: el[1],
        ser: el[2],
        tariq: el[3]
    };
});
function replacer(key, value) {
    // Filtering out properties
    if (key === 'azganun') {
        value = '*azganun is : * --  ' + value;
    }
    return value;
}
//console.info(JSON.stringify(users,null,2));
console.info(JSON.stringify(users, replacer, 2));
let rawdata = Fs.readFileSync('./sources/server/pictures.json', "utf8");
//let rawdata = Fs.readFileSync('./pictures_.json', "utf8");  
let nkarner = JSON.parse(rawdata);
//console.log(nkarner); 
//console.log(typeof(nkarner));  // object
//console.info(JSON.stringify(nkarner, null, 2));
