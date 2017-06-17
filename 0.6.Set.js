let names = new Set();

names.add("Peter");
names.add(20);


names.add("Maria");
names.add(5);
console.log(names);
console.log(names.has("Peter"));
names.delete(20);
console.log(names);