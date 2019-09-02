// CODE:

for(var i = 7 ; i<=31 ; i++){
    var hasil = ""
    if(i%5 == 0){
        hasil += " Tempat Fitness Tutup"
    }
    else{
        if((i-7)%2 == 0){
            hasil += " Tono,"
        }
        if((i-7)%4 == 0){
            hasil += " Anton,"
        }
        if((i-7)%5 == 0){
            hasil += " Budi,"
        }
        hasil = hasil.slice(0, hasil.length-1)
    }
    console.log(`Tanggal ${i}:` + hasil)
}

// PSEUDOCODE:
/*
STORE 'i' = 7
FOR i less than OR equals to 31 DO
    STORE 'hasil' with empty string
    IF 'i' MOD 5 equals to 0 DO
        ADD 'hasil' with " Tempat Fitness Tutup"
    ELSE
        IF ('i'-7) MOD 2 equals to 0 DO
            ADD 'hasil' with " Tono,"
        END IF
        IF ('i'-7) MOD 4 equals to 0 DO
            ADD 'hasil' with " Anton,"
        END IF
        IF ('i'-7) MOD 5 equals to 0 DO
            ADD 'hasil' with " Budi,"
        END IF
        ADD 'hasil' with slice of 'hasil' from 0 to length of hasil -1
    END IF
    DISPLAY "Tanggal " + 'i' + ":" + 'hasil'
    ADD i with 1
END FOR
*/