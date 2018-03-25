import {HttpServer} from "./HttpServer";


// const server = new HttpServer();
// server.start(3000,'0.0.0.0')

var db = [
    ['Anun','Azganun',null,12],
    ['Anun','Azganun','MALE',12],
    ['Anun','Azganun',null,12],
    ['Anun','Azganun',null,12],
];
var users  = db.map((el)=>{
    return {
        anun:el[0],
        azganun:el[1],
        ser:el[2],
        tariq:el[3]
    }
})
console.info(JSON.stringify(users,null,2));