class nk {
    constructor(oneline) {
        this.isValidInput = false;
        this.showList = () => "<ul><li>id: " + this.id + " </li><li>CD_Num: " + this.CD_Num + "</li> <li>Filename: " + this.Filename + "</li></ul>";
        this.inConsoleTest = () => console.log("id: " + this.id + ", CD_Num: " + this.CD_Num + ", Filename: " + this.Filename);
        this.fieldNames = ["id", "Tema", "CD_Num", "Filename", "type", "name",
            "Country", "Region", "District", "Settlement",
            "photo_year", "Ph_author",
            "meridian", "parallel",
            "y_from", "y_to", "c_from", "c_to"];
        this.armTitles = ["ID", "Թեմա", "CD", "File", "Տեսակ", "Անուն",
            "Երկիր", "Մարզ", "Շրջան", "Բնակավայր",
            "Լուսանկարման տարին", "Լուսանկարի հեղինակը",
            "Միջօրեական", "Հորիզոնական",
            "Տարի սկիզբ", "Տարի վերջ", "Դար սկիզբ", "Դար վերջ",];
        let aline = oneline.split('|');
        console.log("length of oneline is: ***" + aline.length + "***<br>");
        if (aline.length == 21) {
            //making members
            this.id = Number(aline[1]);
            if (aline[2].length > 0) {
                this.Tema = String(aline[2]);
            }
            else {
                this.Tema = null;
            }
            this.CD_Num = Number(aline[3]);
            alert(this.CD_Num);
            this.Filename = aline[4].length > 0 ? String(aline[4]) : null;
            if (this.id > 0 && this.CD_Num > 0 && this.Filename.length > 0) {
                this.isValidInput = true;
            }
            else {
                this.isValidInput = false;
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
        }
        else {
            throw ("Wrong length of splitted array");
        }
        // displaying data as list
    }
}
