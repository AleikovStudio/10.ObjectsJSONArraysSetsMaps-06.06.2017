let score = new Map();

score.set("Peter", 130);
score.set("Maria", 85);

console.log(score.get("Peter"));


for (let [k,v] of score) {
    console.log(k);
    console.log(v);
}
