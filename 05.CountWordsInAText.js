function countWords(input) {
    let text = input.join("\n");
    let words = text.split(/[^A-Za-z0-9_]+/)//^ in the beginning is NOT here
        .filter(w=>w != "");

    let wordCounts = {};
    for (let w of words) {
        wordCounts[w] ? wordCounts[w]++:
            wordCounts[w] = 1;
    }

    console.log(JSON.stringify(wordCounts));
}

//countWords([
//    "Far too slow, you're far too slow."
//]);

countWords([
    "JS devs use Node.js for server-side JS.-- JS for devs"
]);

