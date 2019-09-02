/*
    Tono. 2 hari sekali
    Anton, 4 hari sekali
    Budi, 5 hari sekali
*/

/*
PSEUDUCODE :
STORE daftarMember with array value [['Tono', 2, 7], ['Anton', 4, 7], ['Budi', 5, 7]]

Loop For i with 7, i Less then Equal 31, i plus 1
    STORE daftarHadir with empty array
        Loop For j with 0, j Less then length of daftarMember, j plus 1
            if i Equal to 7 Then
                daftarMember[j][0] push to daftarHadir
            else if i % 5 Equal to 0 Then
                if i - daftarMember[j][2] Equal to daftarMember[j][1] Then
                    Set daftarMember[j][2] with i 
                Set daftarHadir[0] with 'Tempat Fitness Tutup' 
            else if i - daftarMember[j][2] Equal to daftarMember[j][1] Then
                daftarMember[j][0]) push to daftarHadir;
                Set daftarMember[j][2] with i;
            End If 
        End Loop
    Display with `Tanggal plus i plus Value from array daftarHadir`
End Loop
*/

var daftarMember = [['Tono', 2, 7], ['Anton', 4, 7], ['Budi', 5, 7]];

for (var i = 7; i <= 31; i++) {
    var daftarHadir = [];
        for (var j = 0; j < daftarMember.length; j++) {
            if (i === 7) {
                daftarHadir.push(daftarMember[j][0]);
            } else if (i % 5 === 0) {
                if ((i - daftarMember[j][2] === daftarMember[j][1])) {
                    daftarMember[j][2] = i;
                } 
                //daftarMember[1][2] = i;
                //console.log(daftarMember);
                daftarHadir[0] = 'Tempat Fitness Tutup';
            } 
            else if ((i - daftarMember[j][2]) === daftarMember[j][1]) {
                //console.log(daftarMember);
                daftarHadir.push(daftarMember[j][0]);
                daftarMember[j][2] = i;
            } 
        }
    //console.log(daftarHadir);
    console.log(`Tanggal ${i}: ${daftarHadir}`);
    //console.log(daftarMember[0][1]);
}