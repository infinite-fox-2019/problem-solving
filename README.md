# problem-solving

DECLARE and STORE Function scheduleFitness with two parameter, member and startDate
    DECLARE and STORE variable output1 with value empty object
        DECLARE variable i equal to startDate
        WHILE i lessthan equal 31 DO ITERATION
            DECLARE variable jadwal with value empty array
            ASSIGN output1 with KEY Tanggal i and value jadwal
            IF i MODULO 5 equal to 0
                PUSH Tempat Fitnes Tutup to jadwal
            ELSE i MODULO 5 not equal to 0
                IF i minus by startDate MODULO 2 equal to 0
                    PUSH Tono to jadwal
                    END IF
                IF i minus by startDate MODULO 4 equal to 0
                    PUSH Anton to jadwal
                    END IF
                IF i minus by startDate MODULO 5 equal to 0
                    PUSH Budi to jadwal
                    END IF
            END IF
        i equal to i plus 1
    END ITERATION
    DECLARE variable output with empty string
    DO ITERATION for the object output1
        output PLUS output PLUS string of key of output1 plus string of the value of key
    END ITERATION
    RETURN the value of function to output
END FUNCTION


function scheduleFitness (member, startDate) {
    //membuat kerangka output berupa objek terlebih dahulu
    var output1 = {}
    for (var i=startDate; i<=31; i++) {
        var jadwal = []
        output1[`Tanggal ${i}`] = jadwal
    //fitnes tutup tiap tanggalnya kelipatan 5
        if (i % 5 == 0) {
            jadwal.push(' Tempat Fitness Tutup')
        } else {
    //mengisi value dari key
            if ((i-startDate) % 2 == 0) {
                jadwal.push(' Tono')
                }
            if ((i-startDate) % 4 == 0) {
                jadwal.push(' Anton')
                }
            if ((i-startDate) % 5 == 0) {
                jadwal.push(' Budi')
                }
        }
    }
    //membuat output type string
    var output = ''
    for (var key in output1) {
        output += `${key}:${output1[key]} \n`
    }
    return output
  }
  
  // TEST CASE
  const member = [
    { name: 'Tono', frequency: 2 },
    { name: 'Anton', frequency: 4 },
    { name: 'Budi', frequency: 5 }
  ]
  
  console.log(scheduleFitness(member, 7))

/* 
(type : string)
Tanggal 7: Tono, Anton, Budi 
Tanggal 8:  
Tanggal 9: Tono 
Tanggal 10: Tempat Fitness Tutup 
Tanggal 11: Tono, Anton 
Tanggal 12: Budi 
Tanggal 13: Tono 
Tanggal 14:  
Tanggal 15: Tempat Fitness Tutup 
Tanggal 16:  
Tanggal 17: Tono, Budi 
Tanggal 18:  
Tanggal 19: Tono, Anton 
Tanggal 20: Tempat Fitness Tutup 
Tanggal 21: Tono 
Tanggal 22: Budi 
Tanggal 23: Tono, Anton 
Tanggal 24:  
Tanggal 25: Tempat Fitness Tutup 
Tanggal 26:  
Tanggal 27: Tono, Anton, Budi 
Tanggal 28:  
Tanggal 29: Tono 
Tanggal 30: Tempat Fitness Tutup 
Tanggal 31: Tono, Anton 
*/
  