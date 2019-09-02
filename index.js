// // //pseudocode
//  Store hariPertama with value 7
//  Store maxHari with value 31
//  Store tono with value string Tono
//  Store anton with value string Anton
//  Store budi with value string budi
//  Store tutup with value string Tempat Fitnes tutup
//  FOR i EQUAL TO hariPertama to maxHari
//  STORE ARR with ARRAY
//     IF i EQUAL TO hariPertama 
//     PUSH ARR with tono anton budi
//     DISPLAY tanggal ke i PLUS ARR
//     ELSE IF i MOD 5 EQUAL TO 0
//     PUSH ARR with libur
//     DISPLAY tanggal ke i PLUS ARR
//     ELSE IF i MINUS hariPertama MOD 2 EQUAL TO ZERO AND i MINUS hariPertama MOD 4 EQUAL TO ZERO AND i MINUS hariPertama MOD 5 EQUAL TO ZERO 
//     PUSH ARR with tono anton budi
//     DISPLAY tanggal ke i PLUS ARR
//     ELSE IF i MINUS hariPertama MOD 2 EQUAL TO ZERO AND i MINUS hariPertama MOD 4 EQUAL TO ZERO 
//     PUSH ARR with tono anton
//     DISPLAY tanggal ke i PLUS ARR
//     ELSE IF i MINUS hariPertama MOD 2 EQUAL TO ZERO AND i MINUS hariPertama MOD 5 EQUAL TO ZERO 
//     PUSH ARR with tono budi
//     DISPLAY tanggal ke i PLUS ARR
//     ELSE IF i MINUS hariPertama MOD 4 EQUAL TO ZERO AND i MINUS hariPertama MOD 5 EQUAL TO ZERO 
//     PUSH ARR with anton budi
//     DISPLAY tanggal ke i PLUS ARR
//     ELSE IF i MINUS hariPertama MOD 2 EQUAL TO ZERO
//     PUSH ARR with tono
//     DISPLAY tanggal ke i PLUS ARR
//     ELSE IF i MINUS hariPertama MOD 4 EQUAL TO ZERO
//     PUSH ARR with anton
//     DISPLAY tanggal ke i PLUS ARR
//     ELSE IF i MINUS hariPertama MOD 5 EQUAL TO ZERO
//     PUSH ARR with budi
//     DISPLAY tanggal ke i PLUS ARR
//     ELSE 
//     DISPLAY tanggal ke i
// END IF
// END FOR



var hariPertama = 7
var maxHari = 31
var tono = 'Tono'
var anton = ' Anton'
var budi = ' Budi'
var tutup = 'Tempat Fitnes Tutup'

for(var i = hariPertama; i <= maxHari;i++){
    var arr = []
    if (i === hariPertama){
        arr.push(tono, anton, budi)
        console.log(`tanggal ${i}: ${arr}` )
    }else if (i % 5 === 0){
        console.log(`tanggal ${i}: ${tutup}` )
    }else if((i-hariPertama)% 2 === 0 &&(i-hariPertama)% 4 === 0&&(i-hariPertama)% 5 === 0 ){
        arr.push(tono,anton,budi)
        console.log(`tanggal ${i}: ${arr}` )
    }else if((i-hariPertama)% 2 === 0 &&(i-hariPertama)% 4 === 0){
        arr.push(tono,anton)
        console.log(`tanggal ${i}: ${arr}` )
    }else if((i-hariPertama)% 2 === 0 &&(i-hariPertama)% 5 === 0){
        arr.push(tono,budi)
        console.log(`tanggal ${i}: ${arr}` )
    }else if((i-hariPertama)% 4 === 0 &&(i-hariPertama)% 5 === 0){
        arr.push(anton,budi)
        console.log(`tanggal ${i}: ${arr}` )
    }else if((i-hariPertama)% 2 === 0){
        arr.push(tono)
        console.log(`tanggal ${i}: ${arr}` )
    }else if((i-hariPertama)% 4 === 0){
        arr.push(anton)
        console.log(`tanggal ${i}: ${arr}` )
    }else if((i-hariPertama)% 5 === 0){
        arr.push(budi)
        console.log(`tanggal ${i}: ${arr}` )
    }else {
        console.log(`tanggal ${i}: ` )
    }
}
