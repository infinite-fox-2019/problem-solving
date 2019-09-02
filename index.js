/*
Set string to ''
Set tanggal to []

for numbers 7 to 31
  push values to tanggal
END FOR

for values in tanggal
  if value of tanggal is divisible by 5
    string += `Tanggal ${tanggal value}: Tempat Fitness tutup \n`
  ELSE IF value of tanggal is divisible by 2, 4 and 5
    string += `Tanggal ${tanggal value}: Tono, Anton, Budi \n`
  ELSE IF value of tanggal is divisible by 2
    string += `Tanggal ${tanggal value}: Tono \n`
  ELSE IF value of tanggal is divisible by 4
    string += `Tanggal ${tanggal value}: Anton \n`
  ELSE IF value of tanggal is divisible by 5
    string += `Tanggal ${tanggal value}: Budi \n`
  ELSE IF value of tanggal is divisible by 2 and 4
    string += `Tanggal ${tanggal value}: Tono, Anton \n`
  ELSE IF value of tanggal is divisible by 2 and 5
    string += `Tanggal ${tanggal value}: Tono, Budi \n`
  ELSE IF value of tanggal is divisible by 4 and 5
    string += `Tanggal ${tanggal value}: Anton, Budi \n`
  ELSE
    string +=  `Tanggal ${tanggal value}: `
  ENDIF
ENDFOR

print string

*/

var string = ''
var tanggal = []
for(i=7 ; i<32 ; i++){
  tanggal.push(i)
}

for(i=0 ; i<tanggal.length ; i++){
  if(tanggal[i] %5 ===0){
    string += `Tanggal ${(tanggal[i])}: Tempat Fitness tutup \n`
  } else if (i % 2 ===0 && i % 4 ===0 && i % 5 ===0){
    string += `Tanggal ${(tanggal[i])}: Tono, Anton, Budi \n`
  } else if (i % 2 ===0 && i % 4 !==0 && i % 5 !==0){
    string += `Tanggal ${(tanggal[i])}: Tono \n`
  } else if (i % 2 !==0 && i % 4 ===0 && i % 5 !==0){
    string += `Tanggal ${(tanggal[i])}: Anton \n`
  } else if (i % 2 !==0 && i % 4 !==0 && i % 5 ===0){
    string += `Tanggal ${(tanggal[i])}: Budi \n`
  } else if (i % 2 ===0 && i % 4 ===0 && i % 5 !==0){
    string += `Tanggal ${(tanggal[i])}: Tono, Anton \n`
  } else if (i % 2 ===0 && i % 4 !==0 && i % 5 ===0){
    string += `Tanggal ${(tanggal[i])}: Tono, Budi \n`
  } else if (i % 2 !==0 && i % 4 ===0 && i % 5 ===0){
    string += `Tanggal ${(tanggal[i])}: Anton, Budi \n`
  } else {
    string += `Tanggal ${(tanggal[i])}: \n`
  }
}
console.log(string)

















