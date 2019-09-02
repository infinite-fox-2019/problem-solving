// PSEUDOCODE:
/*
LET var out equals to empty array
LOOP FOR initiate i start with 7 until i less than equals to 31,  DO
    STORE 'out' with empty string
    IF 'i' MOD 5 equals to 0 DO
        DISPLAY "Tanggal " + 'i' + ":" + "Tempat Fitness Tutup"
    ELSE
        IF ('i'-7) MOD 2 equals to 0 DO
            ADD 'out' with "Tono"
        END IF
        IF ('i'-7) MOD 4 equals to 0 DO
            ADD 'out' with "Anton"
        END IF
        IF ('i'-7) MOD 5 equals to 0 DO
            ADD 'out' with "Budi"
        separate elemen out with ", "
        DISPLAY "Tanggal " + 'i' + ":" + out
    END IF
END FOR
*/


function fitness (){
    var out = [];
    for (var i=7; i<=31; i++){
        if (i % 5 === 0){
            console.log('Tanggal ' + i+ ':' + 'Tempat fitness tutup ')
        }else {
            out = []
            if ( (i-7) % 2 == 0){
                out.push('Tono');
            }
            if ((i-7) % 4 == 0){
            out.push('Anton');
            }
            if ((i-7) % 5 === 0){
            out.push('Budi');
            }
            console.log('Tanggal ' + i+ ':' + out.join(', '))
        }
    }
}

fitness()