// PSEUDOCODE
// SET tanggalAwal with 7
// SET tono with 'Tono'
// SET anton with 'Anton'
// SET budi with 'Budi'

// FOR SET i equal tanggalAwal, i less than or equal 31
//      IF i equal 7
//          DISPLAY `Tanggal ${i} : ${tono}, ${anton}, ${budi}`
//      ELSE IF i modulus 5 equal 0
//          DISPLAY `Tanggal ${i} : Tempat Fitnes Tutup`
//      ELSE IF i not equal 7 AND i minus tanggalAwal modulus 2 equal 0 AND i minus tanggalAwal modulus 4 not equal 0 AND i modulus 5 not equal 0
//          DISPLAY `Tanggal ${i} : ${tono}`
//      ELSE IF i not equal 7 AND i minus tanggalAwal modulus 2 equal 0 AND i minus tanggalAwal modulus 4 equal 0 AND i modulus 5 not equal 0
//          DISPLAY `Tanggal ${i} : ${tono}, ${anton}`
//      ELSE IF i minus 7 modulus 5 equal 0
//          DISPLAY `Tanggal ${i} : ${budi}`
//      ELSE 
//          DISPLAY `Tanggal ${i} :`
//      END IF
// END FOR



// CODING
var tanggalAwal = 7
var tono = 'Tono'
var anton = 'Antron'
var budi = 'Budi'

for( var i = tanggalAwal; i <= 31; i++){
    if( i == 7){
        console.log(`Tanggal ${i} : ${tono}, ${anton}, ${budi}`);
    } else if (i%5 == 0){
        console.log(`Tanggal ${i} : Tempat Fitnes Tutup`);
    } else if(i !== 7 && ((i - tanggalAwal) % 2 == 0) && ((i - tanggalAwal) % 4 != 0) && i % 5 != 0){
        console.log(`Tanggal ${i} : ${tono}`)
    } else if(i !== 7 && ((i - tanggalAwal) % 2 == 0) && ((i - tanggalAwal) % 4 == 0) && i % 5 != 0){
        console.log(`Tanggal ${i} : ${tono}, ${anton}`)
    } else if( (i - 7) % 5 == 0){
        console.log(`Tanggal ${i} : ${budi}`)
    } else {
        console.log(`Tanggal ${i} :`)
    }
}