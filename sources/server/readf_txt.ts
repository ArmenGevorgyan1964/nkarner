var http = require('http');
var Fs = require('fs');
const elasticsearch = require('elasticsearch');
const esClient = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
  });
/*
// Creating index
esClient.indices.create({  
    index: 'nkarner'
  },function(err,resp,status) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("create",resp);
    }
});
*/
// inserting data
/*
esClient.index({  
    index: 'nkarner',
    id: '1848',
    type: 'tbl_pict',
    body: {
        "Tema": "",
        "CD_Num": "1351",
        "Filename": "vb038609.jpg",
        "type": "Բնակելի տուն",
        "name": "",
        "Country": "Վրաստան",
        "Region": "Թբիլիսի",
        "District": "Թբիլիսի",
        "Settlement": "Թբիլիսի",
        "y_from": "",
        "y_to": "",
        "c_from": "",
        "c_to": "",
        "photo_year": "",
        "Ph_author": "Սարգիս Դարչինյան",
        "meridian": null,
        "parallel": null,
        "user_id": "1",
        "created_at": null,
        "updated_at": null
    }
  },function(err,resp,status) {
      console.log(resp);
  });
//
esClient.index({  
    index: 'nkarner',
    id: '2047',
    type: 'tbl_pict',
    body: {
        "Tema": "",
        "CD_Num": "1374",
        "Filename": "as039429.jpg",
        "type": "Եկեղեցի",
        "name": "Վերին թաղի Սբ. Աստվածածին",
        "Country": "Ադրբեջան",
        "Region": "Բուն Աղվանք",
        "District": "Կուտկաշեն",
        "Settlement": "Նիժ",
        "y_from": "",
        "y_to": "",
        "c_from": "",
        "c_to": "",
        "photo_year": "",
        "Ph_author": "Հակոբ Սանասարյան",
        "meridian": null,
        "parallel": null,
        "user_id": "1",
        "created_at": null,
        "updated_at": null
    }
  },function(err,resp,status) {
      console.log(resp);
  });
//
esClient.index({  
    index: 'nkarner',
    id: '2049',
    type: 'tbl_pict',
    body: {
        "Tema": "",
        "CD_Num": "1374",
        "Filename": "as039431.jpg",
        "type": "Եկեղեցի",
        "name": "Վերին թաղի Սբ. Աստվածածին",
        "Country": "Ադրբեջան",
        "Region": "Բուն Աղվանք",
        "District": "Կուտկաշեն",
        "Settlement": "Նիժ",
        "y_from": "",
        "y_to": "",
        "c_from": "",
        "c_to": "",
        "photo_year": "",
        "Ph_author": "Հակոբ Սանասարյան",
        "meridian": null,
        "parallel": null,
        "user_id": "1",
        "created_at": null,
        "updated_at": null
    }
  },function(err,resp,status) {
      console.log(resp);
  });
  //
  esClient.index({  
    index: 'nkarner',
    id: '2050',
    type: 'tbl_pict',
    body: {
        "Tema": "",
        "CD_Num": "1374",
        "Filename": "as039432.jpg",
        "type": "Խմբանկար",
        "name": "Աշակերտներ",
        "Country": "Ադրբեջան",
        "Region": "Բուն Աղվանք",
        "District": "Կուտկաշեն",
        "Settlement": "Նիժ",
        "y_from": "",
        "y_to": "",
        "c_from": "",
        "c_to": "",
        "photo_year": "",
        "Ph_author": "Հակոբ Սանասարյան",
        "meridian": null,
        "parallel": null,
        "user_id": "1",
        "created_at": null,
        "updated_at": null
    }
  },function(err,resp,status) {
      console.log(resp);
  });
//
esClient.index({  
    index: 'nkarner',
    id: '2110',
    type: 'tbl_pict',
    body: {
        "Tema": "",
        "CD_Num": "1356",
        "Filename": "vb038818.jpg",
        "type": "Բնակելի տուն",
        "name": "Միխայլովսկայա (այժմ Դ. Աղմաշենեբելի) պող., Ալ. Մանթաշյանի տներից մեկը: ճարտ. Ղազար ՍաԱլ. Մանթաշյանի տներից մեկը: ճարտ. Ղազար Սարգսյան",
        "Country": "Վրաստան",
        "Region": "Թբիլիսի",
        "District": "Թբիլիսի",
        "Settlement": "Թբիլիսի",
        "y_from": "",
        "y_to": "",
        "c_from": "",
        "c_to": "",
        "photo_year": "1989",
        "Ph_author": "Ռոբերտ Գեւորգյան",
        "meridian": null,
        "parallel": null,
        "user_id": "1",
        "created_at": null,
        "updated_at": null
    }
  },function(err,resp,status) {
      console.log(resp);
  });
  */
//
esClient.search({  
    index: 'nkarner',
    type: 'tbl_pict',
    body: {
      query: {
        match: { "District": "Բոլնիս" }
      },
    }
  },function (error, response, status) {
      if (error){
        console.log("search error: "+error)
      }
      else {
        console.log("--- Response ---");
        console.log(response);
        console.log("--- Hits ---");
        response.hits.hits.forEach(function(hit){
          console.log(hit);
        })
      }
  });
/*
// Deleting Index 'nkarner'
esClient.indices.delete({index: 'nkarner'},function(err,resp,status) {  
    console.log("delete",resp);
  });
*/

//

//
var data = '';
var k:number = 0;
var apictline:string[];
var i:number=0;
var j:number=0;

class nkar {
    id:number;
    Tema: string;
    CD_Num:number;
    Filename: string;
    type: string;
    name: string;
    Country: string;
    Region: string;
    District: string;
    Settlement: string;
    y_from: string;
    y_to: string;
    c_from: string;
    c_to: string;
    photo_year: string;
    Ph_author: string;
    meridian:number;
    parallel:number;
    //user_id:number;
    //created_at:Date;
    //updated_at:Date;
    fieldNames:string[];
    armTitles:string[];
    allDataArr:any[];
    isValidInput: boolean = false;
    constructor(oneline){
        this.fieldNames = ["id", "Tema", "CD_Num", "Filename", "type", "name",
            "Country", "Region", "District", "Settlement",
            "photo_year", "Ph_author",
            "meridian", "parallel", 
            "y_from", "y_to", "c_from", "c_to"];
        this.armTitles = ["ID",  "Թեմա", "CD", "File", "Տեսակ", "Անուն", 
            "Երկիր", "Մարզ", "Շրջան", "Բնակավայր", 
            "Լուսանկարման տարին", "Լուսանկարի հեղինակը", 
            "Միջօրեական", "Հորիզոնական",
            "Տարի սկիզբ", "Տարի վերջ", "Դար սկիզբ", "Դար վերջ",];
        let aline:string[] = oneline.split('|');
        //console.log("length of oneline is: ***"+aline.length+"***<br>");
        if(aline.length == 22){
            //making members
            this.id = Number(aline[1]);
            if(aline[2].length>0){
                this.Tema=String(aline[2]);
            }
            else{
                this.Tema=null;
            }
            this.CD_Num = Number(aline[3]);
            this.Filename = aline[4].length > 0 ? String(aline[4]) : null;
            if(this.id > 0 && this.CD_Num > 0 && this.Filename.length > 0){
                 this.isValidInput = true;
            }
            else{
                this.isValidInput=false;
            }
            //var result = num > 0 ?"positive":"non-positive" 
            this.type = aline[5].length > 0 ? String(aline[5]) : null;
            this.name = aline[6].length > 0 ? String(aline[6]) : null;
            this.Country = aline[7].length > 0 ? String(aline[7]) : null;
            this.Region = aline[8].length > 0 ? String(aline[8]) : null;
            this.District = aline[9].length > 0 ? String(aline[9]) : null;
            this.Settlement = aline[10].length > 0 ? String(aline[10]) : null;
            this.y_from = aline[11].length > 0 ? String(aline[11]) : null;
            this.y_to = aline[12].length > 0 ? String(aline[12]) : null;
            this.c_from = aline[13].length > 0 ? String(aline[13]) : null;
            this.c_to = aline[14].length > 0 ? String(aline[14]) : null;
            this.photo_year = aline[14].length > 0 ? String(aline[15]) : null;
            this.Ph_author = aline[14].length > 0 ? String(aline[16]) : null;
            this.meridian = aline[14].length > 0 ? Number(aline[17]) : null;
            this.parallel = aline[14].length > 0 ? Number(aline[18]) : null;

            this.allDataArr = [this.id, this.Tema, this.CD_Num, this.Filename, this.type,  this.name, 
                this.Country, this.Region, this.District,  this.Settlement, 
                this.y_from, this.y_to, this.c_from, this.c_to, 
                this.photo_year, this.Ph_author, this.meridian, 
                this.parallel];
        }
        else{
            console.log("Wrong length of splitted array");
        } 
    }
    // function to insert into elasticsearch database
    addIndex = (elSearchClient, indexName, idVal, typeName) => {
        return elSearchClient.index({  
            index: indexName,
            id: idVal,
            type: typeName,
            body: {
                "Tema": this.Tema,
                "CD_Num": this.CD_Num,
                "Filename": this.Filename,
                "type": this.type,
                "name": this.name,
                "Country": this.Country,
                "Region": this.Region,
                "District": this.District,
                "Settlement": this.Settlement,
                "y_from": this.y_from,
                "y_to": this.y_to,
                "c_from": this.c_from,
                "c_to": this.c_to,
                "photo_year": this.photo_year,
                "Ph_author": this.Ph_author,
                "meridian": this.meridian,
                "parallel": this.parallel,
                "user_id": "1",
                "created_at": Date.now,
                "updated_at": Date.now
            }
          },function(err,resp,status) {
              console.log(resp);
          });

    }
    
    // displaying data as list
    
    showList = () => `id:  ${this.id} , CD_Num: <b> ${this.CD_Num}</b>, Filename: ${this.Filename}`;
    showTable = () => `<table border="1">
    <tr>
        <td> id </td> <td> CD_Num </td> <td> Filename </td> <td> type </td> <td> Country </td>
    </tr>
    <tr>
        <td>${this.id}</td> <td>${this.CD_Num}</td> <td>${this.Filename}</td> <td>${this.type}</td> <td>${this.Country}</td>
    </tr>
                     </table>
    
    `;
    inConsoleTest = () => console.log("id: "+String(this.id)+", CD_Num: "+ String(this.CD_Num) +", Filename: " + String(this.Filename) );
    
    
}
//
function meke_cell(itelval:string){
        let aa:string;
        if(!itelval || itelval == ""){
            aa = "<td key=''> </td>";
        }
        else{
            aa = "<td key=''>"+itelval+"</td>";
        }
        
        //console.log(aa);
        return aa;
    }   
//
http.createServer(function (req, res) {
    var ank:nkar[];
    var readStream = Fs.createReadStream('pictures_sm.txt', 'utf8');
    var i:number = 1;
    readStream.on('data', function(chunk) {
        //console.log(typeof(chunk));
        //console.log(i);
        i++;
            data += chunk;
        }).on('end', function() {
        //console.log(data);
    });
    const text = Fs.readFileSync('pictures_sm.txt','utf8')
    Fs.readFile('pictures_sm.txt', function(err, dd){
        res.writeHead(200, {'Content-Type': 'text/html'});
        //console.log(dd); ok
        dd=String(dd);
        apictline = dd.split("\n");
        res.write("<table border='1'>");
        for(i=0; i<apictline.length-1; i++){
            //let b:number=0;
            //res.write("<br>line number"+ i + " --- " + apictline[i]);
            let objnk = new nkar(apictline[i]);
            //objnk.addIndex(esClient, "nkarner", objnk.id, "tbl_pict"); // ok: once has been run

            let adatta = objnk.allDataArr;
            //console.log("array Length = "+adatta.length);
            let adata_str:string[];
            adata_str = adatta.map(String);
            //console.log("acells assay is: "+acells);
            //objnk.showList;
           // res.write("<br>list"+ i + " ### " + objnk.showList());
           res.write("<tr>");
            let acells = adata_str.map( (elmt) => meke_cell(elmt) );
            res.write(acells.toString()); 
            //console.log("acells assay is: "+acells);
            acells=[];
            adatta=[];
            adata_str=[];
           res.write("</tr>");
            //console.log( objnk.showList());
            //console.log(objnk.allDataArr);
            //objnk.inConsoleTest;

       }
       res.end("</table>");
    });
    


}).listen(8081);