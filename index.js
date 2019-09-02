// Membuat sebuah Program Fitness
// Tono, 2 hari sekali
// Anton, 4 hari sekali
// Budi, 5 hari sekali
// Tempat fitness dibukan dari tgl 7, dan akhir bulan tgl 31


// Release 0
/*
PSEDEUCODE:
STORE tglAwal with 7
STORE tglAkhir with 31
STORE counter with 0
STORE output with empty string

FOR counter = 0 to tglAkhir
  IF CALCULATE counter add tglAwal mod 5 EQUALS TO 0 THEN
    SET output with template literal 'Tanggal {counter + tglAwal}: Tempat Fitness Tutup'
  ELSE IF CALCULATE counter add tglAwal <= tglAkhir THEN
    SET output with template literal 'Tanggal {counter + tglAwal}: '
    SET nama with empty array
    IF CALCULATE counter mod 2 EQUALS TO 0 THEN
      PUSH 'Tono' into nama
    END IF
    IF CALCULATE counter mod 4 EQUALS TO 0 THEN
      PUSH 'Anton' into nama
    END IF
    IF CALCULATE counter mod 5 EQUALS TO 0 THEN
      PUSH 'Budi' into nama
    END IF
    CALCULATE output add JOIN all element in array name into one string
  ELSE
    BREAK
  END IF
  DISPLAY output
END FOR
*/

function myFitness(tglAwal, tglAkhir){
  for(var i = 0; i < tglAkhir; i++){
    if((i+tglAwal)%5 == 0){
      var output = `Tanggal ${i + tglAwal}: Tempat Fitness Tutup`;
    } 
    else if(i+tglAwal <= tglAkhir){
      var output = `Tanggal ${i + tglAwal}: `;
      var name = [];
      if(i%2 == 0){
        name.push('Tono');
      }
      if(i%4 == 0){
        name.push('Anton');
      }
      if(i%5 == 0){
        name.push('Budi');
      }
      output += name.join(', ')
    }
    else{
      break;
    }
    console.log(output);
  }
}

myFitness(7,31)