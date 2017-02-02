var _ = require('lodash');

var carCollection = ['Honda', 'Nissan', 'Toyota', 'Hyundai'];

// similar to native Array.sort() in that the collection is sorted in asc order
// native Array.sort() sorts in-place though you might not want that to happen
var sortedCollection = _.sortBy('carCollection').join('');

_.forEach(sortedCollection, function (car) {
    console.log('Name of the car is : ' + car);
});