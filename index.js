/*
PSEUDOCODE

STORE startDate WITH 7
STORE nameArray WITH ['tono','anton','budi']
STORE sumArray WITH [7,7,7];

    LOOP i Equals to starDate, i LESS or EQUALS than 31, i INCREMENT

        STORE arraysName WITH empty arrays 

            LOOP j EQUALS to 0, j LESS THAN nameArray length; j INCREMENT
                IF i EQUALS to sumArray index j THEN
                    nameArray index j INSERT TO arraysName
                IF i EQUALS to sumArray index j AND nameArray index j EQUALS TO 'tono'
                    STORE rek with sumArray[j]
                        ASSIGN rek with rek plus 2
                        ASSIGN sumArray[j] WITH rek
                IF i EQUALS to sumArray index j AND nameArray index j EQUALS TO 'anton'
                    STORE rek with sumArray[j]
                        ASSIGN rek with rek plus 2
                        ASSIGN sumArray[j] WITH rek
                IF i EQUALS to sumArray index j AND nameArray index j EQUALS TO 'budi'
                    STORE rek with sumArray[j]
                        ASSIGN rek with rek plus 2
                        ASSIGN sumArray[j] WITH rek
                


        IF i mod 5 EQUALS to 0 THEN 
            DISPLAY "Tanggal " PLUS i PLUS ": " PLUS "Tempat Fitness Tutup"
        ELSE 
            DISPLAY "Tanggal " PLUS i PLUS ": " PLUS arraysName
*/


let starDate = 7;
let nameArray = ['tono','anton','budi'];
let sumArray = [7,7,7];

for (let i = starDate;i<=31;i++) {

        let arraysName = [];
        for (let j = 0;j<nameArray.length;j++) {
            if (i===sumArray[j]) {
                arraysName.push(nameArray[j])
            }
            if (i === sumArray[j] && nameArray[j] === 'tono') {
                let rek = sumArray[j];
                rek = rek+2;
                sumArray[j] = rek;
            }
            if (i === sumArray[j] && nameArray[j] === 'anton') {
                let rek = sumArray[j];
                rek = rek+4;
                sumArray[j] = rek;
            }
            if (i === sumArray[j] && nameArray[j] === 'budi') {
                let rek = sumArray[j];
                rek = rek+5;
                sumArray[j] = rek;
            }

            
        }//end loop j

    if (i%5 === 0) {
        console.log(`Tanggal ${i}: Tempat Fitness Tutup`)
    }else {
        console.log(`Tanggal ${i}: ${arraysName}`)
    }
}//end loop i





