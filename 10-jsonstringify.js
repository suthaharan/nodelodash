var carArray = ['Honda', 'Toyota', 'Nissan'];
// JSON.stringify converts array/objects/values to string
var carArrayJson = JSON.stringify(carArray);

console.log(carArray);
console.log(carArray[0]);
console.log(carArrayJson);
console.log(carArrayJson[0]); //prints just the first character in the string
// JSON.parse converts string back to object
console.log(JSON.parse(carArrayJson)[0]); 


var carObj = {name: 'Honda', model: 'Civic'};
var carObjJson = JSON.stringify(carObj);
console.log(carObj);
console.log(carObj.name);
console.log(carObjJson);
console.log(carObjJson.name);
console.log(JSON.parse(carObjJson).name);


var carArrayObj = [{name: 'Honda', year: 2017}, {name: 'Honda', year: 2013}, {name: 'Nissan', year: 2012}, {name: 'Toyota', year: 2009}, {name: 'Hyundai', year: 2015}];
var carArrayObjson = JSON.stringify(carArrayObj);
console.log(carArrayObj);
console.log(carArrayObj[0].name);
console.log(carArrayObjson);
console.log(carArrayObjson[0].name);
console.log(JSON.parse(carArrayObjson)[0].name);

