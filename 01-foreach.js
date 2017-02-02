var _ = require('lodash');

var carCollection = ['Honda', 'Nissan', 'Toyota', 'Hyundai'];

_.forEach(carCollection, function (car) {
    console.log('Name of the car is : ' + car);
});