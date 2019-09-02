/*
PSEUDOCODE

SET FUNCTION getCalendar with an empty parameter

  SET var calendar as an empty object
  SET var count with 0

  LOOP from 7 until 31
    IF i is EQUAL to 7
      SET "Tanggal (i)" as a keyName in calendar with the value of an empty array
        PUSH "Tono, Anton, Budi" to the "Tanggal (i)"
    END IF

    IF i MOD 5 is EQUAL to 0
      SET "Tanggal (i)" as a keyName in calendar with the value of "Tempat Fitness Tutup"
      
    ELSE
      IF "Tanggal (i)" is undefined
        SET "Tanggal (i)" as a keyName in calendar with the value of an empty array
      ELSE
        IF count MOD 2 is EQUAL to 0
          PUSH "Tono" to the "Tanggal (i)"
        END IF

        IF count MOD 4 is EQUAL to 0
          PUSH "Anton" to the "Tanggal (i)"
        END IF

        IF count MOD 5 is EQUAL to 0
          PUSH "Budi" to the "Tanggal (i)"
        END IF
      END IF
    END IF
    ADD count by 1
  END LOOP

  LOOP key in calendar
    DISPLAY "key: calendar[key]"

END FUNCTION

CALL THE FUNCTION

*/

function getCalendar() {
  var calendar = {};
  var count = 0;

  for (var i = 7; i <= 31; i++) {
    if (i === 7) {
      calendar[`Tanggal ${i}`] = [];
      calendar[`Tanggal ${i}`].push ("Tono, Anton, Budi");
    }
    
    if (i % 5 === 0) {
      calendar[`Tanggal ${i}`] = "Tempat Fitness Tutup";
    }
    else {
      if (calendar[`Tanggal ${i}`] === undefined) {
        calendar[`Tanggal ${i}`] = [];
      }
      if (count % 2 === 0 && count !== 0) {
        calendar[`Tanggal ${i}`].push ("Tono");
      }
      if (count % 4 === 0 && count !== 0) {
        calendar[`Tanggal ${i}`].push ("Anton");
      }
      if (count % 5 === 0 && count !== 0) {
        calendar[`Tanggal ${i}`].push ("Budi");
      }
    }
    count++;
  }
  for (key in calendar) {
    console.log(key + ":", String(calendar[key]));
  }
}

getCalendar();
