const collage = {
    name: 'international',
    class: ['11', '12'],
    events: ['science', 'bijoy dibosh', 'shadinota dibosh', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }

}
// console.log(collage.class[1]);
// console.log(collage.events[3]);
collage.events[3] = '26 december'
// console.log(collage.events[3]);
// console.log(collage.events);
// collage.unique.result.merit = 'top top top merit list'
// console.log(collage);
// collage.unique.color = 'red'
// console.log(collage);
console.log(collage['unique'].result.gpa);