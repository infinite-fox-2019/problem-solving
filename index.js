//PSEUDOCODE
    // store firstDate with 7
    // for loop (i equal to firstDate; i<number; i++)
    //     if i mod 5 is equals to 0
    //         display 'Tanggal ' + i + ': Tempat fitness tutup'
    //     else
    //         store listName with Array
    //         store startDate with i-7

    //         if startDate mod 2 is equals to 0
    //             listName push 'Tono'
    //             
    //         if startDate mod 4 is equals to 4
    //             listName push 'Anton'
    //             
    //         if startDate mod 5 is equas to 5
    //             listName push 'Budi'
    //         
    //         display 'Tanggal ' + i + ': ' + listName
    
    //     end if
    // end for

function problemSolving(number){
    var firstDate = 7
    for(var i=firstDate; i<number; i++){
        if(i%5 === 0){
            console.log('Tanggal ' + i + ': Tempat fitness tutup');
        }
        else{
            
            var listName = [];
            var startDate = i-7;
            
            if(startDate%2 === 0){
                // attendee += 'Tono'
                listName.push('Tono')
            }
            if(startDate%4 === 0){
                listName.push('Anton')
            }
            if(startDate%5 === 0){
                listName.push('Budi')
            }
            console.log('Tanggal ' + i + ': ' + listName);
        }
    }
}

console.log(problemSolving(31))