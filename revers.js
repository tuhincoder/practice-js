const numbers = [23, 4, 34, 34, 56, 34, 654, 24, 34, 64]
// console.log(numbers);
numbers.reverse()
// console.log(numbers);

// ==================
// for (const num of numbers) {
//     // console.log(num);
// }

// const revers_num = [];
// for (const num of numbers) {
//     revers_num.push(num)
// }

// console.log(revers_num);

const revers_num = [];
for (const num of numbers) {
    revers_num.unshift(num)
}
console.log(revers_num);