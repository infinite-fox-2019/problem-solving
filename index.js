/*
PSEUDOCODE

FOR 'i' equals 7, i LESS THAN or EQUALS 'date', DO
    STORE 'closed' = ''
    STORE 'member' as an empty array
    IF i MOD 5 EQUALS 0
        SET 'closed' EQUALS 'closed' PLUS 'Tempat Fitness Tutup'
    ELSE
        IF ('i' MINUS 7) MOD 2 EQUALS 0
            PUSH 'Tono' to 'member'
        IF ('i' MINUS 7) MOD 4 EQUALS 0
            PUSH 'Anton' to 'member'
        IF ('i' MINUS 7) MOD 5 EQUALS 0
            PUSH 'Budi' to 'member'
    IF the total length of 'member' EQUALS 0
        DISPLAY 'Tanggal ' PLUS 'i' PLUS ': ' PLUS 'closed'
    ELSE
        DISPLAY 'Tanggal ' PLUS 'i' PLUS ': ' PLUS 'member'
END FOR        
*/

function gymCalendar(date) {
    for(var i = 7; i <= date; i++) {
        var closed = ''
        var member = [];
        if(i % 5 === 0) {
            closed = closed + 'Tempat Fitness Tutup';
        } else {
            if((i-7) % 2 === 0) {
                member.push('Tono');
            }
            if((i-7) % 4 === 0) {
                member.push('Anton');
            }
            if((i-7) % 5 === 0) {
                member.push('Budi');
            }
        }
        if(member.length === 0) {
            console.log(`Tanggal ${i}: ${closed}`);
        } else {
            console.log(`Tanggal ${i}: ${member}`)
        }
    }

}
gymCalendar(31);