// const price = 6000

// if (price >= 5000) {
//     const discount = price * 10 / 100;
//     console.log(discount);
// }

// const price = 1100;

// if (price >= 500) {
//     const discount = price * 35 / 100;
//     const pay = price - discount;
//     console.log(pay);
// }


// const mobilePrice = 5000;

// if (mobilePrice >= 10000) {
//     const discount = mobilePrice * 10 / 100;
//     const pay = mobilePrice - discount;
//     console.log('10% discount', pay);
// }
// else if (mobilePrice >= 2500) {
//     // 5% discount
//     const discount = mobilePrice * 5 / 100;
//     const payAmount = mobilePrice - discount;
//     console.log('5% discount', payAmount);
// }
// else {
//     console.log('not available');
// }


// const age = 48;
// const price = 500;

// if (age <= 12) {
//     console.log('you can eat free for you');
// }

// else if (age >= 60) {
//     // 5% discount
//     const discount = price * 50 / 100;
//     const payAmount = price - discount;
//     console.log(payAmount);

// }

// else if (age >= 50) {
//     // 25% discount
//     const discount = price * 25 / 100;
//     const payMentAmount = price - discount;
//     console.log('25% discount', payMentAmount);
// }

// else if (age >= 30) {
//     // 6% discount
//     const discount = price * 6 / 100;
//     const payMentAmount = price - discount;
//     console.log('6% discount', payMentAmount);
// }
// else {
//     console.log(price);
// }

let price = '';
const isLeader = true;

// if (isLeader === true) {
//     price = 200
// }
// else {
//     price = price + 500;
// }
// console.log('price', price);

// price = isLeader === true ? 0 : price + 1800;
// console.log(price);
price = isLeader === 'this is true' ? 70 : price + "not true";
console.log(price);


const isPassed = false;

if (!isPassed) {
    console.log('ok i will merry you');
}

else {
    console.log('i am not interest');
}