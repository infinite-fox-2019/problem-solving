
/*


STORE 'member' with empty array
STORE 'hasil' with emty string
STORE 'isLibur' with false
STORE 'tanggal' with 7
STORE 'i' to 'tanggal'

FOR 'i' less than 31
    SET 'member' to empty array
    SET 'hasil' to empty string
    SET 'isLibur' to false


    IF 'i' equals 'tanggal'
        PUSH 'Tono', 'Anton', 'Budi' to array 'member'
    ELSE
        IF 'i' modulo 5 equals 0
            SET 'hasil' to `Tanggal ${i}: Tempat Fitness Tutup`
            SET 'isLibur' to true
        END IF
        IF 'i' modulo 2 equals 1
            PUSH 'Tono' to array 'member'
        END IF
        IF ('i' minus 'tanggal') modulo 4 equals 0
            PUSH 'Anton' to array 'member'
        END IF
        IF ('i' minus 'tanggal') modulo 5 equals 0
            PUSH 'Budi' to array 'member'
        END IF
    END IF

    IF 'isLibur' equals true
        PRINT 'hasil'
    ELSE IF length of 'member' equals 0 and 'isLibur' equals false
        SET 'hasil' to `Tanggal ${i}:`
        PRINT hasil
    ELSE IF length of 'member' equals 1
        SET 'hasil' to `tanggal ${i}: ${member[0]}`
        PRINT 'hasil'
    ELSE
        STORE 'j' with 0
        FOR 'j' less than length of 'member
            IF 'j' equals 0
                SET 'hasil' to `Tanggal ${i}: ${member[j]}`
            ELSE
                SET 'hasil' to `, ${member[j]}`
            END IF
        END FOR
        PRINT 'hasil'
    END IF
END FOR
*/

// STORE "score" to any number

// IF "score" < 70
//   DO "learn more"
// ELSE
//   DO "reward myself"
// DO "continue with life..."

var member = [];
var hasil = ``;
var isLibur = false;
var tanggal = 7;

for(var i = tanggal; i<=31; i++){
    member = [];
    hasil = ``;
    isLibur = false;
    if(i == tanggal){
        member.push('Tono', 'Anton', 'Budi');
    }
    else{
        if(i % 5 == 0){
            hasil = `Tanggal ${i}: Tempat Fitness Tutup`;
            isLibur = true;
        }

        if(i % 2 == 1){
            member.push('Tono');
        }
    
        if((i-tanggal) % 4 == 0){
            member.push('Anton');
        }
    
        if((i-tanggal) % 5 == 0){
            member.push('Budi');
        }
    }

    if(isLibur == true){
        console.log(hasil);
    }
    else if(member.length == 0 && isLibur == false){   
        hasil = `Tanggal ${i}:`;
        console.log(hasil);
        
    }
    else if(member.length == 1){
        hasil = `tanggal ${i}: ${member[0]}`;
        console.log(hasil);
    }
    else{
        for(j = 0; j<member.length; j++){
            if(j == 0){
                hasil += `Tanggal ${i}: ${member[j]}`;
            }
            else{
                hasil += `, ${member[j]}`;
            }
        }

        console.log(hasil);
    }
}