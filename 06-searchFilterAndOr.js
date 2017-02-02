var _ = require("lodash");

var carCollection = [
    { name: "Honda", year: 2017 },
    { name: "Honda", year: 2013 },
    { name: "Nissan", year: 2012 },
    { name: "Toyota", year: 2009 },
    { name: "Hyundai", year: 2015 },
    { name: "Toyota", year: 2015 }
];

// Find the first result that matches the query - AND style query
var searchedCarCollection = _.find(carCollection, { year: 2015 });
console.log("First search result car: " + searchedCarCollection.name);

// Find the last result that matches the query - AND style query
var searchedCarCollectionLast = _.findLast(carCollection, { year: 2015 });
console.log("Last search result car: " + searchedCarCollectionLast.name);

console.log("\n\And filter car log");
// Find every search results that matches the exact query
var everySearchedCarCollection = _.filter(carCollection, { year: 2015 });
_.forEach(everySearchedCarCollection, function(car) {
    console.log("Car : " + car.name + " : " + car.year);
});

console.log("\n\nFiltered car log");
// Find every search results that matches the query
var filteredSearchedCarCollection = _.filter(carCollection, function(O) {
    return O.name == "Honda" || O.year == "2015";
});

_.forEach(filteredSearchedCarCollection, function(car) {
    console.log("Car : " + car.name + " : " + car.year);
});
