var _ = require('lodash');

var carCollection = [{name: 'Honda', year: 2017}, {name: 'Honda', year: 2013}, {name: 'Nissan', year: 2012}, {name: 'Toyota', year: 2009}, {name: 'Hyundai', year: 2015}];

// pluck style short hand operation from lodash for sorting collection based on multiple parameters
var sortedCarCollection = _.sortBy(carCollection, ['name', 'year']);

_.forEach(sortedCarCollection, function (car) {
    console.log('Car : ' + car.name + " : " + car.year);
});