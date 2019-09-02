//PSEUDOCODE
// STORE "number" value with any number value which user input as a function parameter
// FOR each iteration of variable "i" from 7 until the length of "number"
// 	IF "i" is equals to 7 OR (the value of "i" minus 7) mod 2 is zero AND (the value of "i" minus 7) mod 4 is zero AND (the value of "i" minus 7) mod 5 is zero
// 		DISPLAY "Tanggal "value of i": Tono, Anton, Budi"
// 	ELSE IF "i" mod 5 is equals to zero
//      DISPLAY "Tanggal "value of i": Tempat Fitness Tutup"
// 	ELSE IF (the value of "i" minus 7) mod 2 is zero AND (the value of "i" minus 7) mod 4 is zero
//      DISPLAY "Tanggal "value of i": Tono, Anton"
// 	ELSE IF (the value of "i" minus 7) mod 2 is zero AND (the value of "i" minus 7) mod 5 is zero
//      DISPLAY "Tanggal "value of i": Tono, Budi"
// 	ELSE IF (the value of "i" minus 7) mod 2 is zero 
//      DISPLAY "Tanggal "value of i": Tono"
// 	ELSE IF (the value of "i" minus 7) mod 4 is zero 
//      DISPLAY "Tanggal "value of i": Anton"
// 	ELSE IF (the value of "i" minus 7) mod 5 is zero 
//      DISPLAY "Tanggal "value of i": Budi"
//  ELSE 
//      DISPLAY "Tanggal "value of i": "
// 	ENDIF
// ENDFOR	


function jadwal_fitness(number) {

    // var fpb = []
    for (var i = 7; i <= number; i++) {
        if (i === 7 || (i-7) % 2 === 0 && (i-7) % 4 === 0 && (i-7) % 5 === 0) {
            console.log('Tanggal ' + i + ': Tono, Anton, Budi');
        } else if ((i) % 5 === 0) {
            console.log('Tanggal ' + i + ': Tempat Fitness Tutup');
        } else if ((i-7) % 2 === 0 && (i-7) % 4 === 0) {
            console.log('Tanggal ' + i + ': Tono, Anton');
        } else if ((i-7) % 2 === 0 && (i-7) % 5 === 0) {
            console.log('Tanggal ' + i + ': Tono, Budi');
        } else if ((i-7) % 2 === 0) {
            console.log('Tanggal ' + i + ': Tono');
        } else if ((i-7) % 4 === 0) {
            console.log('Tanggal ' + i + ': Anton');
        } else if ((i-7) % 5 === 0) {
            console.log('Tanggal ' + i + ': Budi');
        } else {
            console.log('Tanggal ' + i + ':');
        }
    }

}

var bulan = 31
jadwal_fitness(bulan);
