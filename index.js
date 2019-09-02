// Kondisi :
// Tono 2 hari sekali
// Anton 4 hari sekali
// Budi 5 hari sekali
// Tempat fitnes buka tanggal 7
// semua member datang pada tanggal 7
// fitnes libur setiap tanggal kelipatan 5
// kalender berjumlah 31 hari
/*
output:
Tanggal 7: Tono, Anton, Budi
Tanggal 8: 
Tanggal 9: Tono
Tanggal 10: Tempat Fitnes Tutup
Tanggal 11: Tono, Anton
Tanggal 12: Budi
Tanggal 13: Tono
Tanggal 14:
Tanggal 15: Tempat Fitness Tutup
Tanggal 16:
.....

*/
/*
PSEUDOCODE :
SET base with 7
SET hasil with empty string
FOR SET tanggal equals to 7 while tanggal < 32 AND tanggal plus one THEN
  SET check with false
  IF tanggal equals to 7 THEN
    SET hasil with "Tono, Anton, Budi"
  ELSE 
    IF (tanggal minus with base) MOD 2 equals to 0 THEN
      SET hasil with hasil plus "Tono"
      SET check with true
    END IF
    IF (tanggal minus with base) MOD 4 equals to 0 THEN
      IF check THEN
        SET hasil equals to hasil plus ", Anton"
      ELSE
        SET hasil with hasil plus "Anton"
      SET check with true
      END IF
    END IF
    IF (tanggal minus with base) MOD 5 equals to 0 THEN
      IF check THEN
        SET hasil equals to hasil plus ", Budi"
      ELSE
        SET hasil with hasil plus "Budi"
      END IF
    END IF
    IF tanggal MOD 5 equals to 0 THEN
      hasil equals to "Tempat fitness tutup"
    END IF
  END IF
  DISPLAY 'Tanggal ' plus tanggal plus ': ' plus hasil
  SET hasil with empty string
END FOR 

*/

var base= 7
var hasil = ''
for (var tanggal = 7 ; tanggal < 32; tanggal++){
  var check = false
  if (tanggal == 7) {
    hasil = "Tono, Anton, Budi"
  } else {
    if ((tanggal-base)%2==0){
      hasil = hasil + "Tono"
      check = true
    } 
    if ((tanggal-base)%4==0){
      if (check) {
        hasil = hasil + ", Anton"
      } else {
        hasil = hasil + "Anton"
      }
      check = true
    } 
    if ((tanggal-base)%5==0){
      if (check){
        hasil = hasil + ", Budi"
      } else {
        hasil = hasil + "Budi"
      }
    }
    if (tanggal % 5 === 0 ){
      hasil = "Tempat fitness tutup"
    } 
  }
  console.log('Tanggal '+tanggal+ ': '+hasil)
  hasil = ''
}

