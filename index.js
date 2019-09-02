/* 
PSEUDOCODE
========================================

STORE openingDay with 7
STORE daysAmount with 31
STORE members in array of array with value of Tono, 2; Anton, 4; Budi, 5

STORE result with empty string

DO LOOP 
    STORE i with openingDay value, when i is LESS or EQUAL TO daysAmount, i increment by 1
        STORE today with empty string
    
        DO LOOP
            STORE j with 0, when j is LESS than the length of members array, j increment by 2,

            IF i is EQUAL TO openingDay
                IF j is EQUAL TO the length of members minus by 1, add today with the value of members[j][0]
                ELSE add today with the value of members[j][0] plus comma
            ELSE IF i is MOD by 5 is EQUAL TO 0,
                set today value with 'Tempat Fitness Tutup' AND BREAK the loop.
            ELSE IF i minus Opening Day MOD by the value of members[j][1] is EQUAL TO 0,
                IF the value of today is empty string, add today with the value of members[j][0],
                ELSE add today with comma plus space plus the value of members[j][0]
        END LOOP
    add result with string of tanggal plus the value of i plus ':' plus the value of today plus next line

END LOOP

DISPLAY result

*/


let openingDay = 7;
let daysInMonth = 31;
let members = [['Tono', 2],
['Anton', 4],
['Budi', 5]];

let result = '';

for (let i = openingDay; i <= daysInMonth; i++) {
    let today = '';
    for (let j = 0; j < members.length; j++) {
        if (i === openingDay) {
            if (j === members.length - 1) {
                today += `${members[j][0]}`
            } else {
                today += `${members[j][0]},`
            }
        } else if (i % 5 === 0) {
            today += 'Tempat Fitness Tutup'
            break;
        } else if ((i - openingDay) % members[j][1] === 0) {
            if (today === '') {
                today += `${members[j][0]}`
            } else {
                today += `, ${members[j][0]}`
            }
        }
    }
    result += `tanggal ${i}: ${today}\n`
}

console.log(result);