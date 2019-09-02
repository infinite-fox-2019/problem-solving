/*  kalender fitness. tono 2 hari sekali, anton 4 hari sekali, budi 5 hari sekali
    tempat dibuka pertama kali tgl 7, all member datang dipembukaan, tempat tutup tiap kelipatan tgl 5
    kalender berjumlah 31 hari
*/ 

/*PSEUDO HERE

make a function and set a parameter of input
input is an obj contain name with their day

for i start at day 7 and i not longer than 31
    set an array
    if i modulus 5 equal to 0
        push a string "hari libur" to array
    else
        for k in input
            if (i - 7) modulus input[k] equal to 0
                push k to array
            end if
        end for
    end if
    
show the result
end for
*/

//CODE

function fitness(input){

    var tanggal = 31
    for(var i=7; i<=tanggal; i++){
        
        var people = []

        if(i%5===0){
            people.push("hari libur")
        }else{
            for(var k in input){
                //console.log(k, input[k])
                if((i - 7)%input[k]===0){
                    people.push(k)
                }
            }
 
        }

    console.log("tanggal "+i+": "+people.join(", "))
    }

}
fitness(
    {"Tono":2, "Anton":4,"Budi":5}
    )

