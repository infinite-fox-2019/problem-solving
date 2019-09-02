/*PSEUDOCODE

STORE x with 0
FOR i = 7 to 31
    STORE str with string
    IF x MOD 2 EQUALS TO 0 THEN
        IF str EQUALS TO true THEN
            SET str add by ', Tono'
        ELSE
            SET str add by 'Tono'
        ENDIF
    ENDIF
    IF x MOD 4 EQUALS TO 0 THEN
        IF str EQUALS TO true THEN
            SET str add by ', Anton'
        ELSE
            SET str add by 'Anton'
        ENDIF
    ENDIF
    IF x MOD 5 EQUALS TO 0 THEN
        IF str EQUALS TO true THEN
            SET str add by ', Budi'
        ELSE
            SET str add by 'Budi'
        ENDIF
    ENDIF
    IF i MOD 5 EQUALS TO 0 THEN
        SET str with 'Tempat Fitness Tutup'
    ENDIF
    DISPLAY 'Tanggal ' plus by i plus by 'str'
    ADD 'x' by 1
ENDFOR


*/

var x = 0;

for (var i = 7; i <= 31; i++) {
    var str = '';
    if (x % 2 == 0) {
        str += 'Tono';
    }
    if (x % 4 == 0) {
        if (str) {
            str += ', Anton';
        } else {
            str += 'Anton';
        }
    }
    if (x % 5 == 0) {
        if (str) {
            str += ', Budi';
        } else {
            str += 'Budi';
        }
    }
    if (i % 5 == 0) {
        str = 'Tempat Fitness Tutup';
    }
    console.log('Tanggal ' + i + ': ' + str);
    x++;
}