// PSEUDOCODE
// STORE people with object tono value 2, anton value 4, budi value 5
// STORE counter with zero
//  For i = 7 to 31
//      IF i mod 5 equals to 0
//         DISPLAY tanggal to i tempat fitness tutup
//         Counter plus 1
//      ELSE 
//          STORE temp with empty array
//      FOR person in people
//          IF counter mod people to person equals to 0
//              ADD person to temp
//          END IF
//      END FOR
//      DISPLAY tanggal to i, JOIN temp with Comma(,)
//      Counter plus 1
// END FOR

function fitness(people){
    var counter = 0;
    for(var i = 7 ; i <= 31; i++){
        if (i % 5 == 0) {
            console.log(`tanggal ${i}: tempat fitness tutup`);
            counter++
        } else {
            var temp = []
            for(var person in people){
                if(counter % people[person]===0){
                    temp.push(person)                    
                }
            }
        console.log(`tanggal ${i}: ` +  temp.join(','));
        temp = []
        counter++            
        }
    }
}
var people = {
    Tono : 2,
    Anton : 4,
    Budi : 5
}
fitness(people)