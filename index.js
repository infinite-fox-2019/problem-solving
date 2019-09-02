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

 
    var hasil = ''
    var start = 7
    for(let i=start; i<32; i++){
        if(i%5==0){
            hasil += 'Tanggal '+i+' : Tempat Fitnes Tutup';
            hasil +='\n';
        }
        // else if(i === 7){
        //     for(let j=0; j<input.length; j++){
        //         nama.push(input[j].nama);
        //         hasil = 'Tanggal '+i+' : '+nama;
        //         hasil += '\n';
        //     }
        // } 
        else {
            var arrPerson = []
            if((i-7)%2==0){
                arrPerson.push('Tono');
            }
            if((i-7)%4==0) {
                arrPerson.push('Anton');
            }
            if((i-7)%5==0) {
                arrPerson.push('Budi');
            }
            arrPerson.join(',')
            hasil += 'Tanggal '+i+' : '+arrPerson
            hasil += '\n';
        }
    }
    console.log(hasil)

