const bottle = {
    color: "yellow",
    hold: "water",
    price: 50,
    isCleaned: true
};
// get all property name
const keys = Object.keys(bottle);
// console.log(keys);

// get all property value
const values = Object.values(bottle);
// console.log(values);

// get property name and value in an array of array
const pairs = Object.entries(bottle);
// console.log(pairs);

// Object.seal(bottle);
Object.freeze(bottle)

bottle.price = 100;
bottle.height = 16;

// delete obj property
delete bottle.isCleaned;
console.log(bottle);