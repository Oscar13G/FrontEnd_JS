//Reto 3  S2
//---------------------------------
let primo = false;
for (let i = 1; i <= 100; i++) {
    if (i < 4) {
        console.log(i);
    } else {
        for (let j = i - 1; j > 0; j--) {
            if (i % j !== 0) {
                primo = true;
            } else {
                primo = false;
                break;
            }
            if (primo === true && j === 2) {
                console.log(i);
            }
        }
    }
}
//---------------------------------