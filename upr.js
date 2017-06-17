//let sofia = {name: "SoftUni", age: 3};
//console.log(sofia);
//
//console.log(Object.keys(sofia));
//
//console.log(sofia.hasOwnProperty("Name"));
//
//if (sofia.age == undefined) {
//    console.log("key do not exist");
//}


//let orders = [
//    {amount: 250},
//    {amount: 400},
//    {amount: 100},
//    {amount: 325}
//];
////
////let totalAmount = 0;
////
////for (let i = 0; i < orders.length; i++) {
////    totalAmount += orders[i].amount;
////}
////
////console.log(totalAmount);
//
//let totalAmount = orders.reduce(a,b=>a+b)

let polygon = {
    about: {name: "triangle", color: "red"},
    corners: [{x: 2, y: 6}, {x: 3, y: 1}, {x: -2, y: 2}]
};

console.log(JSON.stringify(polygon));
console.log(polygon.about.color);