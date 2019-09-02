/*
define var tono set to 2
define var anton set to 4
define var budi set to 5
define startDate to 7
define endDate to 31

define function named pushDate with arguments increment(tono/anton/budi) , startDate and endDate
    define date equal to startDate
    define array named result
    do loop until date >= 31
        push date to result array
        date plus increment
    endloop
    return result

define var tonoDate euqal to pushDate(tono,startDate,endDate)
define var antonDate equal to pushDate(anton,startDate,endDate)
define var budiDate equal to pushDate(budi,startDate,endDate)

do loop from 7 to 31, and named it as a counter
    define var output as an array
    check tonoDate, antonDate, and budiDate if there is counter in its array
        if true, push tono/anton/budi to output
    display 'tanggal ' plus counter plus ':' plus output
*/


var tono = 2;var anton = 4;var budi = 5;
var startDate = 7; var endDate = 31;

function pushDate(dateIncrement, start, end){
    var date = start;
    var result = []
    while(date <= end){
        result.push(date);
        date += dateIncrement;
    }
    return result;
}

var tonoDates = pushDate(tono, startDate, endDate);
var antonDates = pushDate(anton, startDate, endDate);
var budiDates = pushDate(budi, startDate, endDate);

for(var i = startDate; i <= endDate; i++){
   
    function eachDateAbsence(date){
        
        var output = []
        if(date % 5 === 0)return 'Tempat Fitness Tutup'

        var tonoStatus = tonoDates.filter(function(tonoDate){
            return tonoDate === date;
        })
        if(tonoStatus.length !== 0) output.push('Tono')
        var antonStatus = antonDates.filter(function(antonDate){
            return antonDate === date;
        })
        if(antonStatus.length !== 0) output.push('Anton')
        var budiStatus = budiDates.filter(function(budiDate){
            return budiDate === date;
        })
        if(budiStatus.length !== 0) output.push('Budi')   
        
        return output.join(', ')
    }
    
    console.log('Tanggal ' + i + ': ' + eachDateAbsence(i))
}


