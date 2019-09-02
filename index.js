/**
 FUNCTION `fitnes`
    SET `message` with string
    SET `count` with -1

    FOR `i` equal to 7 until `i` less then or equal to 31; add `i` by 1
        SET `participan` with array
        add `count` by 1

        `message` equal to `message` plus "Tanggal " plus `i` plus ":"

        IF `i` MOD 5 equal to 0 THEN
            `message` equal to `message` plus " Tempat Fitness Tutup" plus next line
        END IF

        IF `count` MOD 2 equal to 0 THEN
            add " Tono" to participan array
        END IF

        IF `count` MOD 4 equal to 0 THEN
            add " Anton" to participan array
        END IF

        IF `count` MOD 5 equal to 0 THEN
            add " Budi" to participan array
        END IF

       `message` equal to `message` plus participan plus next line
    END FOR

    DISLAY `message`
NED FUNCTION

 */


function fitnes() {
    let message = ''
    let count = -1
    for (let i = 7; i <= 31; i++) {
        let participan = []
        count++
        message += `Tanggal ${i}: `
        if (!(i % 5)) {
            message += ` Tempat Fitness Tutup\n`
            continue
        }
        if (!(count % 2)) {
            participan.push(` Tono`)
        }
        if (!(count % 4)) {
            participan.push(` Anton`)
        }
        if (!(count % 5)) {
            participan.push(` Budi`)
        }
        message += `${participan}\n`
    }
    console.log(message);
}

fitnes()