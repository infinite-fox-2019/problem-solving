//PseudoCode
/*
SET hariTono AS NUMBER WITH VALUE 0
SET hariAnton AS NUMBER WITH VALUE 0
SET hariBudi AS NUMBER WITH VALUE 0

SET str AS STRING WITOUT ANY VALUE

FOR i = 7 AND i LESSER OR EQUAL TO 31 WITH i INCREMENT BY 1
    set tanggal WITH VALUE "Tanggal " PLUS i PLUS ": " 
    IF i EQUAL TO 7 THEN
        DISPLAY "Tanggal  7: Tono, Anton, Budi"
    ELSE IF i MOD 5 EQUAL TO 0
        ADD hariTono BY 1
        ADD hariAnton BY 1
        ADD hariBudi BY 1
        DISPLAY "TANGGAL " PLUS i PLUS":Tempat Fitness Tutup"
    ELSE 
        ADD hariTono BY 1
        ADD hariAnton BY 1
        ADD hariBudi BY 1
        IF hariTono MOD 2 EQUAL TO 0 THEN
            str EQUAL TO str PLUS " Tono"
            SET hariTono EQUAL TO 0
        ENDIF
        IF hariAnton MOD 4 EQUAL TO 0 THEN
            str EQUAL TO str PLUS " Anton"
            SET hariAnton EQUAL TO 0
        ENDIF
        IF hariBudi MOD 5 EQUAL TO 0 THEN
            str EQUAL TO str PLUS " Budi"
            SET hariBudi EQUAL TO 0
        ENDIF
        DISPLAY tanggal PLUS str
        SET str WITHOUT ANY VALUE
    ENDIF
END FOR
*/

var hariTono = 0;
var hariAnton = 0;
var hariBudi = 0;

var str = "";
// var obj = {2:"Tono",4:"Anton",5:"Budi"};
// for (var k in obj){
//     console.log(typeof Number(k));
// }


for (var i = 7; i<=31;i++){
    var tanggal = "Tanggal "+ i + ": ";
    if (i == 7){
        console.log(tanggal+ " Tono, Anton, Budi");
    } else if (i%5 == 0){
        hariTono++;
        hariAnton++;
        hariBudi++;
        console.log(tanggal+" Tempat Fitness Tutup");
    } else {
        hariTono++;
        hariAnton++;
        hariBudi++;
        if (hariTono%2 == 0){
            str+= " Tono";
            hariTono = 0;
        }
        if (hariAnton%4 == 0){
            str+= " Anton";
            hariAnton = 0;
        }
        if (hariBudi%5 == 0){
            str+= " Budi";
            hariBudi = 0;
        }
        console.log(tanggal+str);
        str = "";
    }
}