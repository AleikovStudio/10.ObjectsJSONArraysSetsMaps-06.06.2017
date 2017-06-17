function populationInTown(dataRows) {
    let total = new Map();
    for (let dataRow of dataRows) {
        let [town, population]=dataRow.split(/\s*<->\s*/);
        population = Number(population);
        if (total.has(town)) {
            total.set(town, total.get(town) + population);
        } else {
            total.set(town, population);
        }
    }

    for (let [town,sum] of total) {
        console.log(town + " : " + sum);
    }
}

//populationInTown([
//        "Sofia <-> 1200000",
//        "Montana <-> 20000",
//        "New York <-> 10000000",
//        "Washington <-> 2345000",
//        "Las Vegas <-> 1000000"
//    ]
//);

populationInTown([
        "Istanbul <-> 100000",
        "Honk Kong <-> 2100004",
        "Jerusalem <-> 2352344",
        "Mexico City <-> 23401925",
        "Istanbul <-> 1000"
    ]
);