var Events = require('events');
var util = require('util');


class Person{
    private name:string;
    constructor(nm){
        this.name=nm;
        this.showName=this.showName.bind(this);
    }
    showName(){
        console.log(this.name);
        return this.name;
    }
}

util.inherits(Person, Events.EventEmitter)
var sako = new Person('Sako');
var margo = new Person('Margarita');
var aramo = new Person('Aramo singer');
var aPeople:Person[] = [sako, margo, aramo];
/*
aPeople.forEach(function(prs:Person){
    prs.on('speak', function(mssgg){
        console.log(prs.showName() + ' said ' + mssgg);
    });
});
sako.emit('speak', 'barev sakoyots');
margo.emit('speak', 'Hi from  Margo');
aramo.emit('speak', 'voghjuyn aramoyits');
var myEmitter = new Events.EventEmitter();
myEmitter.on('someEvent', function(msg){
    console.log(msg);
});
myEmitter.emit('someEvent', 'msg');
*/