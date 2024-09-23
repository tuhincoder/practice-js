const numbers = [12, 34, 55, 34, 67, 45, 78, 34]
// console.log(numbers);
// numbers[3] = 454545;
// console.log(numbers);

// numbers[5] = 3000000;
// console.log(numbers);


const subject1 = 'chemistry '
const subject2 = ' Chemistry'

// if (subject1 === subject2) {
//     console.log('yes this match the subject');
// }
// else {
//     console.log('not match');
// }

if (subject1.trim() === subject2.toLocaleLowerCase().trim()) {
    console.log('this subject for me ');
}
else {
    console.log('this subject not for me');
}