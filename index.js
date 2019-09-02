/* 
	===PSEUDOCODE===
	STORE 'day' with 0
  FOR index = 7 to lower than equals to 31  
		STORE 'schedule' with empty array
		IF index modulo 5 equals to 0 THEN
				PUSH "Tempat Fitness Tutup" to schedule
		ELSE
				IF 'day' modulo 2 equals to 0 THEN
						PUSH "Tono" to 'participant'
				END IF
				IF 'day' modulo 4 equals to 0 THEN
						PUSH "Anton" to 'participant'
				END IF
				IF 'day' modulo 5 equals to 0 THEN
						PUSH "Budi" to 'participant'
				END IF
		END IF  
		
		ADD 'day' by 1
		DISPLAY "Tanggal "  + index + ': ' + values of 'participant' joined by ", "
	END FOR
*/

const solveProblem = () => {
	let day = 0
	for (let i = 7; i <= 31; i++) {
		let schedule = []
		if (i % 5 === 0) {
			schedule.push('Tempat fitness tutup')
		} else {
			if (day % 2 === 0) schedule.push('Tono')
			if (day % 4 === 0) schedule.push('Anton')
			if (day % 5 === 0) schedule.push('Budi')
		}

		day++

		console.log(`Tanggal ${i}: ${schedule.join(', ')}`)
	}

}

solveProblem()
