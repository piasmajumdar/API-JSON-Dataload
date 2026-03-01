const person = {
    name: "Selim",
    fruit: "dalim",
    dish: "halim",
    friends: ["alim", "kolim", "lamim"],
    isRich: false,
    money: 34000
}

console.log(person, typeof person);

// JSON -> JS object with Notation
// JSON.stringify -> JSON
// JSON.parse -> object

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON, typeof parseJSON);