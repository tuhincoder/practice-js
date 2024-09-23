const mobile = {
    name: 'i phone 12 max pro',
    price: 1500000,
    brand: 'apple',
    color: 'black',
    camera: '63 me',
    isNew: true

}
for (const prop in mobile) {
    // console.log(prop);
}

const keys = Object.keys(mobile)
console.log(keys);
for (const key of keys) {
    // console.log(key);
    console.log(key, ':', mobile[key]);
}