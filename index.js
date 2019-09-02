// Pseudocode
/*
 * STORE `startOpen` with 7
 *
 * FOR `startOpen` to 31
 *   IF `i` MOD 5 EQUALS TO 0 THEN
 *     LOG 'Tanggal ' +  `i` + ': Tempat Fitness Tutup'
 *   ELSE
 *     STORE `memberVisit` with empty array
 *
 *     IF `i` - `startOpen` MOD 2 EQUALS TO 0 THEN
 *       ADD 'Ton'o to `memberVisit`
 *     ENDIF
 *     IF `i` - `startOpen` MOD 4 EQUALS TO 0 THEN
 *       ADD 'Anton' to `memberVisit`
 *     ENDIF
 *     IF `i` - `startOpen MOD 5 EQUALS TO 0 THEN
 *       ADD 'Budi' to `memberVisit`
 *     ENDIF
 *
 *     LOG 'Tanggal ' +  `i` + ':'  `members` to string separate by comma
 *   ENDIF
 * ENDFOR
 */

const schedule = () => {
  const startOpen = 7

  for (let i = startOpen; i <= 31; i++) {
    if (i % 5 == 0) {
      console.log(`Tanggal ${i}: Tempat Fitness Tutup`)
    } else {
      const memberVisit = []

      if ((i - startOpen) % 2 == 0) {
        memberVisit.push('Tono')
      }
      if ((i - startOpen) % 4 == 0) {
        memberVisit.push('Anton')
      }
      if ((i - startOpen) % 5 == 0) {
        memberVisit.push('Budi')
      }

      console.log(`Tanggal ${i}: ${memberVisit.join(', ')}`)
    }
  }
}

schedule()
