/**
 * Tono 2 hari sekali
 * Anton 4 hari sekali
 * Budi 5 hari sekali
 * 
 * fitnes di mulai pada tanggal 7 asumsi perbulan 31 hari
 * 
 * tiap kelipatan 5 fitnes tutup dikarenakan libur
 * 
 * base case nya sampai tanggal 31
 */

/**
 * Pseudocode
 * 
 * STORE 'hasil' without value
 * STORE 'start' with value 7
 * 
 * LOOP 'start' from index 0 to 32 
 *  IF i mod 5 equals to 0 THEN 'hasil' plus equals to 'Tanggal ' plus i plus ' : Tempat Fitnes Tutup' 'hasil' plus equals to 'enter'
 *  ELSE 
 *      STORE 'arrPerson' without value in array
 *      IF i min start mod 2 equals to 0 THEN push 'Tono' to 'arrPerson' END IF
 *      IF i min start mod 4 equals to 0 THEN push 'Anton' to 'arrPerson' END IF
 *      IF i min start mod 5 equals to 0 THEN push 'Budi' to 'arrPerson' END IF
 *      join 'arrPerson' with ','
 *      'hasil' plus equals to 'Tanggal 'plus i plus ' : ' plus 'arrPerson'
 *      'hasil' plus equals to 'enter'
 *  END IF
 * END LOOP
 * DISPLAY 'hasil'
 */


var hasil = ''
var start = 7
for(let i=start; i<32; i++){
    if(i%5==0){
        hasil += 'Tanggal '+i+' : Tempat Fitnes Tutup';
        hasil +='\n';
    }
    else {
        var arrPerson = []
        if((i-start)%2==0){
            arrPerson.push('Tono');
        }
        if((i-start)%4==0) {
            arrPerson.push('Anton');
        }
        if((i-start)%5==0) {
            arrPerson.push('Budi');
        }
        arrPerson.join(',')
        hasil += 'Tanggal '+i+' : '+arrPerson
        hasil += '\n';
    }
}
console.log(hasil)

