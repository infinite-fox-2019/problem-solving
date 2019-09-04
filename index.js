/* PSEUDOCODE
FOR LOOP FROM 7 TO 31
    SET CLOSEDFITNESS EQUALS TO EMPTY STRING
    SET OUTPUT EQUALS TO EMPTY ARRAY
    IF INDEX MOD 5 EQUALS TO 0 THEN CLOSEDFITNESS EQUALS TO 'Tempat Fitness Tutup'
    ELSE 
        IF (INDEX MINUS 7) MOD 2 EQUALS TO 0 THEN OUTPUT PUSH 'Tono'
        ENDIF
        IF (INDEX MINUS 7) MOD 4 EQUALS TO 0 THEN OUTPUT PUSH 'Anton'
        ENDIF
        IF (INDEX MINUS 7) MOD 5 EQUALS TO 0 THEN OUTPUT PUSH 'Budi'
        ENDIF
    ENDIF
    IF LENGTH OF OUTPUT EQUALS TO 0 THEN DISPLAY TANGGAL I : CLOSEDFITNESS
    ELSE DISPLAY TANGGAL I : OUTPUT
    ENDIF
ENDFOR
*/

function calendar(date) {
    for (var i = 7; i <= date; i++) {
        var closedFitness = ""
        var output = []
        if (i % 5 === 0) {
            closedFitness = 'Tempat Fitness Tutup'
        }
        else {
            if ((i - 7) % 2 === 0) {
                output.push('Tono')
            }
            if ((i - 7) % 4 === 0) {
                output.push('Anton')
            }
            if ((i - 7) % 5 === 0) {
                output.push('Budi')
            }
        }
        if (output.length === 0) {
            console.log('Tanggal ' + i + ': ' + closedFitness)
        } else {
            console.log('Tanggal ' + i + ': ' + output.join(', '))
        }
    }
}

calendar(31)