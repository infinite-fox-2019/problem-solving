# problem-solving
SET output to empty string
SET startDay to seven
FOR each number from startDay to thirty one
	ADD output to string of Tanggal and ADD number and ADD string of colon
	IF number MOD five EQUAL to zero THEN
		ADD output to string of Tempat Fitness Tutup
	ELSE
		SET arrPeople to empty array

		IF (number MINUS startDay) MOD 2 EQUAL to zero THEN
			PUSH string of Tono to arrPeople
		ENDIF

		IF (number MINUS startDay) MOD 4 EQUAL to zero THEN
			PUSH string of Anton to arrPeople
		ENDIF

		IF (number MINUS startDay) MOD 5 EQUAL to zero THEN
			PUSH string of Budi to arrPeople
		ENDIF

		ADD output to arrPeople join by coma
	
	ADD output to string of new line

RETURN output

