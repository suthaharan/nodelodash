var _ = require("lodash");

var carCollection = ["Honda", "Nissan", "Toyota", "Buick", "Hyundai"];

// pluck style short hand operation from lodash for sorting collection based on multiple parameters
var sortedCarCollection = _.sortBy(carCollection);

var newCar = "Jeep";
var indexWhereInsertHappens = _.sortedIndex(sortedCarCollection, newCar);

console.log(indexWhereInsertHappens);

console.log("Before insert");

_.forEach(sortedCarCollection, function(car) {
    console.log("Car : " + car);
});

// To maintain the order of the sorted array and insert values
// splice removes item without disturbing the order
sortedCarCollection.splice(indexWhereInsertHappens, 0, newCar);

console.log("\n\nAfter insert");

_.forEach(sortedCarCollection, function(car) {
    console.log("Car : " + car);
});

// Return the index of the searched valued
console.log(
    "Sorted index of Buick " + _.sortedIndexOf(sortedCarCollection, "Buick")
);
