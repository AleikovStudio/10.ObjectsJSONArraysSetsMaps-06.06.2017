//NE E RESHENA!
function cityMarkets(sales) {

    let townsWithProducts = new Map();
    for (let sale of sales) {

        let [town,product,quantityPrice]=sale.split(/\s*->\s*/);
        let [quantity,price]=quantityPrice.split(/\s*:\s*/);
        if (!townsWithProducts.has(town)) {
            townsWithProducts.set(town, new Map());
        }
        let income = quantity * price;
        let oldIncome = townsWithProducts.get(town).get(product);
        if (oldIncome) {
            income += oldIncome;
        }
        townsWithProducts.get(town).set(product, income);
    }

    let sortedTowns = Array.from(townsWithProducts.entries()).sort(mySort);

    //or:
    //[...townsWithProducts.entries()].sort(mySort);

    for (let [town,productsMap] of sortedTowns) {
        console.log("Town - " + town);
        for (let [name,price] of productsMap) {
            console.log(`$$$${name} : ${price}`);
        }
    }


    function mySort(a, b) {
        let aLength = a[0].length;
        let bLength = b[0].length;
        let firstCriteria = aLength - bLength;
        if (firstCriteria !== 0) {
            return firstCriteria;
        } else {
            return a[0].localeCompare(b[0]);//compare alphabetically vazhodyasht red
            return b[0].localeCompare(a[0]);//compare alphabetically nizhodyasht red
        }
    }
}

cityMarkets([
    "Sofia -> Laptops HP -> 200 : 2000",
    "Sofia -> Raspberry -> 200000 : 1500",
    "Sofia -> Audi Q7 -> 200 : 100000",
    "Montana -> Portokals -> 200000 : 1",
    "Montana -> Qgodas -> 20000 : 0.2",
    "Montana -> Chereshas -> 1000 : 0.3"
]);