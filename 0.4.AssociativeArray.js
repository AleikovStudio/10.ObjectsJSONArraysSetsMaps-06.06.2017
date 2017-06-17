let phonebook = {};
phonebook["John Smith"] = "+1-555-8976"; // Add
phonebook["Lisa Smith"] = "+1-555-1234";
phonebook["Sam Doe"] = "+1-555-5030";
phonebook["Nakov"] = "+359-899-555-592";
phonebook["Nakov"] = "+359-2-981-9819"; // Replace
delete phonebook["John Smith"]; // Delete
console.log(Object.keys(phonebook).length); // 3

//checking:
if(phonebook["Nakov"] != undefined){
    console.log("Nakov is there");
}

//printing the elements:
for (let name in phonebook) {
    console.log(name + " -> " + phonebook[name]);
}

for (let key in phonebook) {
    console.log(`${key} -> ${phonebook[key]}`);
}