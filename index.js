/*
GET an array of member which have a length by 3 and contains a string data as Tono, Anton and Budi to each array index respectively
FOR day = 7 to 31
    set message as "Tanggal day:"
    IF day EQUALS TO 7
        DISPLAY message PlUS all three member's data
    
    ELSE IF day MODULO 2
        DISPLAY message Plus Tono
    ELSE IF day MODULO 4 
*/
/*
var member = ['Tono', 'Anton', 'Budi'];
console.log(`Tanggal 7: ` + member);
var count = 0;
for (var i = 8; i <= 31; i++) {
  var message = `Tanggal ${i}: `;
  count++;
  if (i % 5 === 0) {
    console.log(message + `Tempat Fitnes Tutup`);
  } else if (count % 2 === 0 && count % 4 === 0) {
    console.log(message + member[0], ',', member[1]);
  } else if (count % 2 === 0) {
    console.log(message + member[0]);
  } else if (count % 5 === 0) {
    console.log(message + member[2]);
  } else {
    console.log(message);
  }
}
*/
var member = ['Tono', 'Anton', 'Budi'];
for (var i = 7; i <= 31; i++) {
  var message = `Tanggal ${i}: `;
  var hariIni = i - 7;
  if (i % 5 === 0) {
    console.log(message + `Tempat Fitness Tutup`);
  } else if (hariIni === 2) {
    console.log(message);
  }
}
