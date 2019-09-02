/*
PSEUDOCODE

FOR each date from 7 to 31 (inclusively)
    IF date is divisible by 5
        Display 'Tempat Fitness Tutup'
    ELSE
        SET attendance to empty string
        SET day to date - 7
        IF day is divisible by 2
            SET attendance to attendance + 'Tono, '
        IF day is divisible by 4
            SET attendance to attendance + 'Anton, '
        IF day is divisible by 5
            SET attendance to attendance + 'Budi, '
        Display attendance without the last 2 characters of attendance
    ENDIF
ENDFOR
*/

for(i = 7; i <= 31; i++) {
    if(i % 5 === 0) {
        console.log('Tanggal ' + i + ': Tempat Fitness Tutup');
    } else {
        var attendance = '';
        var day = i - 7;
        if(day % 2 === 0) {
            attendance += 'Tono, ';
        }
        if(day % 4 === 0) {
            attendance += 'Anton, ';
        }
        if(day % 5 === 0) {
            attendance += 'Budi, ';
        }
        console.log('Tanggal ' + i + ': ' + attendance.substring(0, attendance.length - 2));
    }
}