
var _ = require('lodash');

var carCollection = ['Honda', 'Nissan', 'Toyota', 'Hyundai'];

var reverseSortCarCollection = [];

_.forEachRight(carCollection, function (car) {
    reverseSortCarCollection.push(car);
    console.log('Name of the car is : ' + car);
});