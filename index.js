/*
GET an array of member which have a length by 3 and contains a string data as Tono, Anton and Budi to each array index respectively
GET an empty object
SET count to 0

FOR day = 7 to 31
  IF the "Tanggal day" key in object is undefined
    assign an empty array to the mentioned key
  END IF

  IF day EQUALS TO 7
    ASSIGN the value for the object with the reffered key with "Tanggal day" with member data by push method
  ELSE IF day MODULO 5 EQUALS TO 0
    redo the assignment for the object with closing message ("Tempat Fitness Tutup")
  ELSE
    IF count MODULO 2 EQUALS TO 0
      PUSH member[0] to the object
    END IF
    IF count MODULO 4 EQUALS TO 0
      PUSH member[1] to the object
    END IF
    IF count MODULO 5 EQUALS TO 0
      PUSH member[2] to the object
    END IF
ADD count by 1
END FOR
DISPLAY object
    
*/

var member = ['Tono', 'Anton', 'Budi'];
var object = {};
var count = 0;
for (var i = 7; i <= 31; i++) {
  if (!object[`Tanggal ${i}`]) {
    object[`Tanggal ${i}`] = [];
  }
  if (i === 7) {
    object[`Tanggal ${i}`].push(member.join(', '));
    console.log(object);
  } else if (i % 5 === 0) {
    object[`Tanggal ${i}`].push(`Tempat Fitness Tutup`);
  } else {
    if (count % 2 === 0) {
      object[`Tanggal ${i}`].push(member[0]);
    }
    if (count % 4 === 0) {
      object[`Tanggal ${i}`].push(member[1]);
    }
    if (count % 5 === 0) {
      object[`Tanggal ${i}`].push(member[2]);
    }
  }
  count++;
  console.log(object);
}
/*
Kak Nadia, tapi ini utk result nya,
value si object msh dalam bentuk array,
aku belum punya ide utk bikin dia tanpa array
apa hrs pake Object.values kak? tp ga kebayang, kuatir berantakan lagi
kak Nadia ada hint utk ini?
thx so much kakkkk
*/
