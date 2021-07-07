function problemSolving(){
    var output = ''
    var startDay = 7
    for(var i=startDay;i<32;i++){
        output += 'Tanggal ' + i + ': '
        if(i%5===0){
            output += 'Tempat Fitness Tutup '
        }else{
            var arrPeople = []
            if((i-startDay)%2===0){
                arrPeople.push('Tono')
            }
            if((i-startDay)%4===0){
                arrPeople.push('Anton')
            }
            if((i-startDay)%5===0){
                arrPeople.push('Budi')
            }
            output += arrPeople.join(', ')
        }
        output += '\n'
    }
    return output
}
console.log(problemSolving())